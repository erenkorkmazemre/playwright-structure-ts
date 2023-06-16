import {expect, test} from '@playwright/test'
import {login, sigIn} from "../../pages/LoginPage";

test('Login into Test', async ({page}) => {
    // Go to login page
    //await page.goto('https://practicetestautomation.com/practice-test-login/')
    await login(page)
    await sigIn(process.env.USERNAME, process.env.PASSWORD)
    // Fill in credentials
    await page.getByLabel('Username').type(process.env.USERNAME)
    await page.getByLabel('Password').type(process.env.PASSWORD)
    await page.click('(//button[text()="Submit"])')
    await expect(page.locator('(//div[@id="error"])')).toHaveText('Your username is invalid!');

    await page.getByLabel('Username').type(process.env.USERNAME_CORRECT)
    await page.getByLabel('Password').type(process.env.PASSWORD_CORRECT)
    await page.click('(//button[text()="Submit"])')
    await expect(page.locator('(//h1[text()="Logged In Successfully"])')).toHaveText('Logged In Successfully');

})
