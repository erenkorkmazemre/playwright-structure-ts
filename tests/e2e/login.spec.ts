import {expect, test} from '@playwright/test'
import {goTo, sigIn} from "../../pages/LoginPage";
import {click} from "../../pages/CommonPage";
import {LOGIN} from "../../locators/loginLocators";

test('Login into Test', async ({page}) => {
    // Go to login page
    //await page.goto('https://practicetestautomation.com/practice-test-login/')
    await goTo(page, process.env.URL)
    //await sigIn(process.env.USERNAME, process.env.PASSWORD)
    // Fill in credentials
    await page.getByLabel('Username').type(process.env.USERNAME)
    await page.getByLabel('Password').type(process.env.PASSWORD)
    //await page.click('(//button[text()="Submit"])')
    await click(page, LOGIN.SUBMIT_BUTTON)
    await expect(page.locator('(//div[@id="error"])')).toHaveText('Your username is invalid!');

    await page.getByLabel('Username').type(process.env.USERNAME_CORRECT)
    await page.getByLabel('Password').type(process.env.PASSWORD_CORRECT)
    await page.click('(//button[text()="Submit"])')
    await expect(page.locator('(//h1[text()="Logged In Successfully"])')).toHaveText('Logged In Successfully');

})
