import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page })=> {
  await page.goto("https://playwright.dev/");
});

test('pw-1 search', async ({ page }) => {
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('timeout');
  await page.getByRole('link', { name: 'Timeouts', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Timeouts', exact: true })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Search⌘K' }).nth(3)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Expect timeout', exact: true })).toBeVisible();
});


test('pw-2 get started', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('article').getByRole('link', { name: 'What\'s Installed', exact: true }).click();
  await expect(page.locator('div').filter({ hasText: /^npmyarnpnpmnpx playwright testyarn playwright testpnpm exec playwright test$/ }).getByRole('tab').first()).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Updating PlaywrightDirect' })).toBeVisible();
});

test('pw-3 community', async ({ page }) => {
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('link', { name: 'Next Ambassadors »' }).click();
  await page.locator('div:nth-child(2) > .card_BpUT > .socialLinks_Gzic > .header-github-link').click();
});

test('pw-4 codegen and youtube', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Codegen.' }).click();
  await page.getByRole('link', { name: 'Next Trace viewer »' }).click();
  await page.getByRole('link', { name: 'Next Videos »' }).click();
  await page.getByRole('link', { name: 'Previous « Trace viewer' }).click();
});



