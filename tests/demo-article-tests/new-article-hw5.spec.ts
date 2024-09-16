import { test, expect, Locator} from '@playwright/test';
import exp from 'constants';


test('hw-5', async ({ page }) => {
    let x = Math.random() * 10;
    await page.goto('https://demo.learnwebdriverio.com/');
    const loginButton: Locator = page.locator('//a[@href="/login"]');
    const emailInput: Locator = page.locator('//input[@type="email"]');
    const passInput: Locator = page.locator('//input[@type="password"]');
    const signInButton: Locator = page.locator('//button[@class="btn btn-lg btn-primary pull-xs-right"]');
    const usernameHeader: Locator = page.locator("//a[contains(text(),'mari')]/parent::li");
    const newArticle: Locator = page.locator('//*[@href="/editor"]');
    let title = 'test mariia' + x;
    const articleTitle: Locator = page.locator('//input[@placeholder="Article Title"]');
    const editorDesc: Locator = page.locator("//input[@data-qa-id='editor-description']");
    const articleBody: Locator = page.locator("//div[@class='auto-textarea-wrapper content-input']/textarea");
    const boldText: Locator = page.locator("//button[@class='op-icon fa fa-mavon-bold']");          
    const articleTags: Locator = page.locator('//input[@placeholder="Enter tags"]');
    const articleSubmit: Locator = page.locator('//button[@type="submit"]');
    const userArticleTitle: Locator = page.locator('//h1[@data-qa-id="article-title"]');



    await loginButton.click();
    await emailInput.fill("abramenko.mariia@gmail.com");
    await passInput.fill("12345");
    await signInButton.isVisible;
    await signInButton.click();
    await usernameHeader.isVisible();
    await newArticle.click();
    await articleTitle.fill(title);
    await editorDesc.fill('about masha');
    await articleBody.fill('test info');
    await articleBody.click();
    await page.keyboard.press('Meta+A');
    await boldText.click();
    await articleTags.fill('masha1502');
    await articleSubmit.click();
    await expect(userArticleTitle).toHaveText(title);

    
    await expect(page.locator('//h1[@data-qa-id="article-title"]')).toHaveText(title);
});