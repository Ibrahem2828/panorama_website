import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const testDirectory = dirname(fileURLToPath(import.meta.url));
const root = resolve(testDirectory, "..");

function source(relativePath) {
  const filePath = join(root, relativePath);
  assert.ok(existsSync(filePath), "Required SEO file is missing: " + relativePath);
  return readFileSync(filePath, "utf8");
}

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(filePath) : [filePath];
  });
}

test("canonical URLs are pinned to the official HTTPS Punycode host", () => {
  const config = source("src/config/site.ts");
  assert.match(config, /CANONICAL_HOST = "xn--mgbaab0cxheq\.tech"/);
  assert.match(config, /CANONICAL_ORIGIN = "https:\/\/xn--mgbaab0cxheq\.tech"/);
  assert.match(config, /const canonicalUrl = CANONICAL_ORIGIN/);
  assert.doesNotMatch(config, /NEXT_PUBLIC_SITE_URL\) \|\|/);
});

test("public application source contains no insecure HTTP URLs", () => {
  const sourceFiles = [
    ...listFiles(join(root, "src")),
    join(root, "next.config.ts"),
    join(root, ".env.example"),
  ].filter((filePath) => /\.(?:ts|tsx|json)$/.test(filePath) || filePath.endsWith(".env.example"));

  for (const filePath of sourceFiles) {
    assert.doesNotMatch(
      readFileSync(filePath, "utf8"),
      /http:\/\//,
      "Public application source must not contain an insecure URL: " + filePath,
    );
  }
});

test("CSP upgrades insecure requests after source URLs are HTTPS-only", () => {
  const nextConfig = source("next.config.ts");
  const proxy = source("src/proxy.ts");
  assert.match(nextConfig, /upgrade-insecure-requests/);
  assert.match(proxy, /upgrade-insecure-requests/);
  assert.match(nextConfig, /connect-src 'self'/);
});

test("canonical redirect rules cover HTTP and www requests", () => {
  const nextConfig = source("next.config.ts");
  const proxy = source("src/proxy.ts");
  assert.match(nextConfig, /value: "www/);
  assert.match(nextConfig, /xn--mgbaab0cxheq/);
  assert.match(nextConfig, /destination: "https:\/\/xn--mgbaab0cxheq\.tech\/:path\*"/);
  assert.match(proxy, /protocol === "http"/);
  assert.match(proxy, /destination\.port = ""/);
  assert.match(proxy, /NextResponse\.redirect\(destination, 308\)/);
});

test("robots permits indexing and names the canonical sitemap", () => {
  const robots = source("src/app/robots.ts");
  assert.match(robots, /userAgent: "\*"/);
  assert.match(robots, /allow: "\/"/);
  assert.match(robots, /host: CANONICAL_HOST/);
  assert.match(robots, /sitemap:/);
  assert.match(robots, /sitemap\.xml/);
});

test("sitemap contains canonical indexable pages and enabled faculty routes only", () => {
  const sitemap = source("src/app/sitemap.ts");
  for (const unpublishedPath of ["/news", "/gallery", "/initiatives"]) {
    assert.doesNotMatch(sitemap, new RegExp('path: "' + unpublishedPath + '"'));
  }
  assert.match(sitemap, /faculties\.filter\(\(faculty\) => faculty\.enabled && faculty\.detailPageEnabled\)/);
  assert.match(sitemap, /site\.domain/);
});

test("empty news, gallery, and initiatives pages are noindex follow", () => {
  for (const page of ["news", "gallery", "initiatives"]) {
    assert.match(
      source("src/app/[locale]/" + page + "/page.tsx"),
      /indexable: false/,
      page + " must be noindex until approved content exists",
    );
  }
});

test("Organization and WebSite schemas use verified HTTPS values and safe serialization", () => {
  const schema = source("src/lib/structured-data.ts");
  assert.match(schema, /"@type": "Organization"/);
  assert.match(schema, /"@type": "WebSite"/);
  assert.match(schema, /name: "بانوراما"/);
  assert.match(schema, /"فريق بانوراما الطلابي"/);
  assert.match(schema, /"Panorama SPU"/);
  assert.match(schema, /sameAs: verifiedOrganizationSameAs/);
  assert.match(schema, /new URL\(site\.assets\.logo, site\.domain\)/);
  assert.match(schema, /JSON\.stringify/);
  assert.match(schema, /\\u003c/);
});

test("localized home and page metadata remain unique and indexable where primary", () => {
  const arabic = JSON.parse(source("src/messages/ar.json")).site;
  const english = JSON.parse(source("src/messages/en.json")).site;
  assert.equal(arabic.title, "بانوراما | فريق طلابي تطوعي في الجامعة السورية الخاصة");
  assert.notEqual(arabic.title, english.title);
  assert.ok(arabic.description.length > 80);
  for (const concept of ["فريق بانوراما الطلابي", "بانوراما الجامعة السورية الخاصة", "فيد واستفيد", "فريق طلابي تطوعي", "الخدمات الطلابية", "تبادل المعرفة"]) {
    assert.ok(arabic.keywords.includes(concept), "Arabic homepage keyword is missing: " + concept);
  }

  const pageMeta = source("src/content/page-meta.ts");
  for (const locale of ["ar", "en"]) {
    const block = pageMeta.split("  " + locale + ": {")[1].split(locale === "ar" ? "  en: {" : "} satisfies")[0];
    const titles = [...block.matchAll(/title: "([^"]+)"/g)].map((match) => match[1]);
    const descriptions = [...block.matchAll(/description: "([^"]+)"/g)].map((match) => match[1]);
    assert.equal(titles.length, 13);
    assert.equal(new Set(titles).size, titles.length, locale + " page titles must be unique");
    assert.equal(new Set(descriptions).size, descriptions.length, locale + " page descriptions must be unique");
  }

  assert.match(source("src/lib/metadata.ts"), /indexable = true/);
  for (const primaryPage of ["about", "faculties", "services", "platform", "contact"]) {
    assert.doesNotMatch(source("src/app/[locale]/" + primaryPage + "/page.tsx"), /indexable: false/);
  }
});

test("primary pages have one shared H1 entry point", () => {
  assert.match(source("src/components/ui/PageHero.tsx"), /<h1/);
  assert.match(source("src/components/sections/HeroSection.tsx"), /<h1/);
  assert.match(source("src/app/[locale]/page.tsx"), /<HeroSection/);

  for (const primaryPage of ["about", "faculties", "services", "platform", "contact", "faq", "impact", "volunteer", "privacy", "terms"]) {
    assert.match(
      source("src/app/[locale]/" + primaryPage + "/page.tsx"),
      /<PageHero|<h1/,
      primaryPage + " must provide exactly one page H1 entry point",
    );
  }
});

test("favicon is a 48 by 48 PNG based on the official brand symbol", () => {
  const faviconPath = join(root, "public", "favicon-48.png");
  const favicon = readFileSync(faviconPath);
  assert.equal(favicon.readUInt32BE(16), 48);
  assert.equal(favicon.readUInt32BE(20), 48);
  assert.match(source("src/config/site.ts"), /favicon-48\.png/);
  assert.match(source("src/app/[locale]/layout.tsx"), /site\.assets\.favicon/);
});
