import { test, expect } from '@playwright/test';

test('DV-1 homepage and login form opened', async ({ page }) => {
    await page.goto('https://lalafo.kg/');
    await expect(page.getByRole('button', { name: 'Подать объявление' })).toBeVisible();
    await expect(page.getByText('Войти•Регистрация')).toBeVisible();
    await page.getByText('Войти•Регистрация').click();
    await page.getByRole('button', { name: 'Войти' }).click();
    await expect(page.getByText('Забыли пароль?')).toBeVisible();
});


test('DV-2 search and filtering', async ({ page }) => {
    await page.goto('https://lalafo.kg/');
    await expect(page.getByRole('button', { name: 'Поиск' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Все категории' })).toBeVisible();
    await expect(page.getByPlaceholder('Я ищу')).toBeVisible();
    await page.getByPlaceholder('Я ищу').click();
    await page.getByPlaceholder('Я ищу').fill('мерседес');
    await page.getByPlaceholder('Я ищу').press('Enter');
    await page.locator('div').filter({ hasText: /^Сортировать$/ }).nth(4).click();
    await page.getByText('Сначала дешевле').click();
    await page.getByPlaceholder('Цена от').click();
    await page.getByPlaceholder('Цена от').fill('10000');
    await expect(page.frameLocator('iframe[title="Opens a widget where you can find more information"]').getByTestId('launcher')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Поиск' })).toBeVisible();
  });

  
