import { expect, test } from "@playwright/test";

test("WL-1 USER REG", async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com");
    await page.locator('//a[@href="/login"]').click();
    await page.locator("//input[@type='email']").fill("testuser@yyf.com");
    await page.locator("//input[@type='password']").fill("wrongpass");
    await expect (page.locator("//ul/li/text()")).toBeVisible();
});