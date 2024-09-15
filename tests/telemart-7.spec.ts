import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://telemart.ua/ua/");
  });
  
  test.afterEach(({ page }) => {
    page.close();
  });

test('TLM-1 homepage and carousel item > 2', async ({ page }) => {
    const carouselItems = await page
    .locator("//div[@id='swiper-wrapper-b12810df8b6fe899e'][count(./a/*)>2]");
});


test('TLM-2 click on swipe twice', async ({ page }) => {
    await page.locator("//div[@id='swiper-wrapper-5241b6713d9e2310e']").click();
    await page.locator("//div[@id='swiper-wrapper-5241b6713d9e2310e']").click();
    await page.getByPlaceholder('Цена от').click();
    await page.getByPlaceholder('Цена от').fill('10000');
    await expect(page.frameLocator('iframe[title="Opens a widget where you can find more information"]').getByTestId('launcher')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Поиск' })).toBeVisible();
  });

  
