import { test, expect, Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://telemart.ua/ua/");
  });
  
  test.afterEach(({ page }) => {
    page.close();
   });


test('TLM-1 homepage and carousel item > 2', async ({ page }) => {
    const carouselItems: Locator = page.locator("//div[@id='swiper-wrapper-b12810df8b6fe899e'][count(./a/*)>2]");
});


test('TLM-2 swipe twice and click', async ({ page }) => {
  const swipeButton: Locator = page
  .locator('//div[@class="swiper-button-next"]');

  const activeBanner: Locator = page
  .locator("//a[@data-banner-position='3'][contains(@class, 'active')]");

  const breadCrumb: Locator = page
  .locator("//ol/li/a[contains(text(), 'Акції')]");

  await swipeButton.
  click();
  await page
  .waitForTimeout(1000);
  await swipeButton
  .click();
  await expect(activeBanner).toBeVisible();

  await activeBanner
  .click();

  await expect(breadCrumb).toBeVisible();

 });

  
