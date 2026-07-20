import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");
const source = (relativePath) => readFileSync(join(root, relativePath), "utf8");

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}

test("central public configuration keeps approved values and hides unknown socials", () => {
  const config = source("src/config/site.ts");
  assert.match(config, /https:\/\/بانوراما\.tech/);
  assert.match(config, /https:\/\/www\.instagram\.com\/company\.panorama\?utm_source=qr&igsh=ZTZ1Z21wNG54ZWVx/);
  assert.match(config, /https:\/\/www\.facebook\.com\/share\/1CvmsKTNKV\//);
  assert.match(config, /link\.enabled && typeof link\.url === "string" && link\.url\.length > 0/);
  assert.match(config, /showNews: false/);
  assert.match(config, /showGallery: false/);
});

test("enabled faculty data has unique slugs, localized names, and existing logo assets", () => {
  const faculties = source("src/data/faculties.ts");
  const slugs = [...faculties.matchAll(/slug: "([a-z-]+)"/g)].map((match) => match[1]);
  const logoPaths = [...faculties.matchAll(/logoPath: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(slugs.length, 8);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.equal(logoPaths.length, slugs.length);
  assert.equal((faculties.match(/name: \{ ar:/g) ?? []).length, slugs.length);
  for (const logoPath of logoPaths) {
    assert.ok(existsSync(join(root, "public", logoPath.replace(/^\//, ""))), `missing faculty logo ${logoPath}`);
  }
});

test("declared public routes, page loader, errors, and 404 boundaries exist", () => {
  const routes = ["about", "contact", "faculties", "faq", "gallery", "impact", "initiatives", "news", "platform", "privacy", "services", "terms", "volunteer"];
  for (const route of routes) {
    assert.ok(existsSync(join(root, "src", "app", "[locale]", route, "page.tsx")), `missing route ${route}`);
  }
  for (const file of ["src/app/[locale]/faculties/[slug]/page.tsx", "src/components/ui/PageLoader.tsx", "src/app/[locale]/error.tsx", "src/app/not-found.tsx"]) {
    assert.ok(existsSync(join(root, file)), `missing boundary ${file}`);
  }
  assert.match(source("src/app/[locale]/faculties/[slug]/page.tsx"), /if \(!faculty\) notFound\(\)/);
});

test("navigation uses declared internal destinations and static forms remain honestly disabled", () => {
  const navigation = source("src/data/navigation.ts");
  const destinations = [...navigation.matchAll(/href: "([^"]+)"/g)].map((match) => match[1]);
  assert.ok(destinations.length > 0);
  assert.ok(destinations.every((href) => href.startsWith("/") && href !== "#"));
  for (const form of ["src/components/forms/StaticContactForm.tsx", "src/components/forms/StaticVolunteerForm.tsx"]) {
    const code = source(form);
    assert.match(code, /disabled type="button"/);
    assert.doesNotMatch(code, /onSubmit=/);
  }
});

test("localized message catalogs parse and retain required shell namespaces", () => {
  for (const locale of ["ar", "en"]) {
    const messages = JSON.parse(source(`src/messages/${locale}.json`));
    for (const namespace of ["site", "nav", "loading", "footer", "privacy", "terms"]) {
      assert.ok(messages[namespace], `${locale} is missing ${namespace}`);
    }
  }
});

test("Arabic remains the deterministic default locale while English is explicitly prefixed", () => {
  const routing = source("src/i18n/routing.ts");
  assert.match(routing, /defaultLocale: "ar"/);
  assert.match(routing, /localePrefix: "as-needed"/);
  assert.match(routing, /localeDetection: false/);
});

test("content source contains no placeholder prose", () => {
  const contentFiles = listFiles(join(root, "src", "content"));
  const joined = contentFiles.map((file) => readFileSync(file, "utf8")).join("\n");
  assert.doesNotMatch(joined, /lorem ipsum|placeholder text|todo: write/i);
});
