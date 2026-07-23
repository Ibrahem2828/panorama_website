import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const mobileViewports = [
  { width: 320, height: 800 },
  { width: 1024, height: 900 },
  { width: 1279, height: 900 },
];

function menuTrigger(page: Page) {
  return page.locator('button[aria-controls="mobile-navigation"]');
}

function drawer(page: Page) {
  return page.locator("#mobile-navigation");
}

async function expectNoHorizontalOverflow(page: Page) {
  const layout = await page.evaluate(() => {
    const clientWidth = document.documentElement.clientWidth;
    const offenders = Array.from(document.querySelectorAll<HTMLElement>("body *"))
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName.toLowerCase(),
          className: element.className,
          left: Math.round(rect.left),
          right: Math.round(rect.right),
        };
      })
      .filter((element) => element.left < -1 || element.right > clientWidth + 1)
      .slice(0, 12);

    return { clientWidth, scrollWidth: document.documentElement.scrollWidth, offenders };
  });

  expect(
    layout.scrollWidth,
    `Horizontal overflow details: ${JSON.stringify(layout.offenders)}`,
  ).toBeLessThanOrEqual(layout.clientWidth);
}

for (const viewport of mobileViewports) {
  test(`Arabic mobile navigation is usable at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(menuTrigger(page)).toBeVisible();
    await expectNoHorizontalOverflow(page);

    await menuTrigger(page).click();
    await expect(drawer(page)).toBeVisible();
    await expect(drawer(page)).toHaveAttribute("role", "dialog");
    await expect(drawer(page)).toHaveAttribute("aria-modal", "true");
    await expect(drawer(page)).toHaveCSS("right", "0px");
    await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
    await expect(drawer(page).locator('a[aria-current="page"]')).toHaveCount(1);

    if (viewport.width === 1024) {
      const accessibility = await new AxeBuilder({ page })
        .include("#mobile-navigation")
        .withTags(["wcag2a", "wcag2aa"])
        .analyze();
      expect(accessibility.violations).toEqual([]);
    }

    await page.keyboard.press("Escape");
    await expect(drawer(page)).toBeHidden();
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
    await expect(menuTrigger(page)).toBeFocused();
  });
}

test("the English drawer opens from the left and closes through its controls", async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.goto("/en");
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");

  await menuTrigger(page).click();
  await expect(drawer(page)).toHaveCSS("left", "0px");
  await drawer(page).locator("button").first().click();
  await expect(drawer(page)).toBeHidden();

  await menuTrigger(page).click();
  await page.locator('button[aria-hidden="true"]').click({ force: true });
  await expect(drawer(page)).toBeHidden();

  await menuTrigger(page).click();
  await drawer(page).locator('a[href="/en/about"]').click();
  await expect(page).toHaveURL(/\/en\/about$/);
  await expect(drawer(page)).toBeHidden();
});

test("desktop navigation replaces the mobile trigger at 1280px", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");

  await expect(menuTrigger(page)).toBeHidden();
  await expect(page.locator('header nav a[href="/about"]')).toBeVisible();
  await expectNoHorizontalOverflow(page);
});
