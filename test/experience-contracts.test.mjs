import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = (path) => {
  const target = join(root, path);
  assert.ok(existsSync(target), `Required experience file is missing: ${path}`);
  return readFileSync(target, "utf8");
};

test("faculty model contains six actual faculties and keeps clinical learning inside Dentistry", () => {
  const faculties = source("src/data/faculties.ts");
  const slugs = [...faculties.matchAll(/slug: "([a-z-]+)"/g)].map((match) => match[1]);
  assert.equal(slugs.length, 6);
  assert.ok(!slugs.includes("foundation-requirements"));
  assert.ok(!slugs.includes("clinical"));
  assert.match(faculties, /clinical learning/);
});

test("mobile header and drawer meet the documented interaction contract", () => {
  const navbar = source("src/components/layout/Navbar.tsx");
  const drawer = source("src/components/layout/MobileNavigation.tsx");
  assert.match(navbar, /min-h-\[4\.5rem\]/);
  assert.match(navbar, /Button className="hidden xl:inline-flex"/);
  assert.match(drawer, /max-h-\[calc\(100dvh-4\.5rem\)\]/);
  assert.match(drawer, /document\.body\.style\.overflow = "hidden"/);
  assert.match(drawer, /event\.key === "Escape"/);
  assert.match(drawer, /aria-modal="true"/);
  assert.match(drawer, /SocialLinks/);
});

test("compact brand treatment uses a symbol and one localized name", () => {
  const logo = source("src/components/ui/BrandLogo.tsx");
  assert.match(logo, /src=\{site\.assets\.favicon\}/);
  assert.match(logo, /sizes="40px"/);
  assert.doesNotMatch(logo, /site\.name : site\.arabicName/);
});

test("mobile-first design tokens keep reachable targets and readable type", () => {
  const css = source("src/app/globals.css");
  assert.match(css, /--content-gutter: clamp\(1rem, 4vw, 2rem\)/);
  assert.match(css, /padding-block: clamp\(3\.5rem, 8vw, 7rem\)/);
  assert.match(css, /font-size: clamp\(2\.5rem, 10vw, 4rem\)/);
  assert.match(css, /font-size: clamp\(1\.9rem, 7vw, 3rem\)/);
  assert.match(css, /min-height: 3rem/);
});

test("homepage is streamlined around student journeys and avoids empty content previews", () => {
  const home = source("src/app/[locale]/page.tsx");
  const content = source("src/content/home.ts");
  assert.match(home, /StudentJourneySection/);
  assert.doesNotMatch(home, /InitiativesPreviewSection/);
  assert.doesNotMatch(home, /ImpactSection/);
  assert.match(content, /supportLine/);
  assert.match(content, /journeys:/);
});

test("empty content routes are absent from primary navigation and static forms are not rendered", () => {
  const navigation = source("src/data/navigation.ts");
  const config = source("src/config/site.ts");
  assert.doesNotMatch(navigation, /initiatives/);
  assert.match(config, /showVolunteerForm: false/);
  assert.match(config, /showContactForm: false/);
  assert.doesNotMatch(source("src/app/[locale]/contact/page.tsx"), /StaticContactForm/);
  assert.doesNotMatch(source("src/app/[locale]/volunteer/page.tsx"), /StaticVolunteerForm/);
});
