import { test, expect } from '@playwright/test';

test('hw-5', async ({ page }) => {
    let x = Math.random() * 10;
    await page.goto('https://demo.learnwebdriverio.com/');
    await page.locator('//a[@href="/login"]').click();
    await expect(page.locator('//button[@class="btn btn-lg btn-primary pull-xs-right"]')).toBeVisible();
    await page.locator('//input[@type="email"]').fill("abramenko.mariia@gmail.com");
    await page.locator('//input[@type="password"]').fill("12345");
    await page.locator('//button[@class="btn btn-lg btn-primary pull-xs-right"]').click();
    await expect(page.locator("//a[contains(text(),'mariia')]/parent::li")).toBeVisible();
    await page.locator('//*[@href="/editor"]').click();
    let title = 'test mariia' + x;
    await page.locator('//input[@placeholder="Article Title"]').fill(title);
    await page.locator("//input[@data-qa-id='editor-description']").fill('about masha');
    await page.locator("//div[@class='auto-textarea-wrapper content-input']/textarea").fill('test info');
    await page.locator("//div[@class='auto-textarea-wrapper content-input']/textarea").click();
    await page.keyboard.press('Meta+A');
    await page.locator("//button[@class='op-icon fa fa-mavon-bold']").click();
    await page.locator('//input[@placeholder="Enter tags"]').fill('masha1502');
    await page.locator('//button[@type="submit"]').click();
    await expect(page.locator('//h1[@data-qa-id="article-title"]')).toHaveText(title);
});