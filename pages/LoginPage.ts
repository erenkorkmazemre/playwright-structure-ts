/*import { expect, test } from '@playwright/test'

test('Login into Test', async ({ page }) => {
    // Go to login page
    await page.goto('https://practicetestautomation.com/practice-test-login/')

    // Fill in credentials
    await page.getByLabel('Username').type(process.env.USERNAME)
    await page.getByLabel('Password').type(process.env.PASSWORD)
    await page.getByRole('button', { name: 'Submit' })

    // Verify successful login
    await expect(page.locator('#login-message')).toBeVisible()
})*/
import {Page} from '@playwright/test';

export async function goTo(
    page: Page,
    url: any
): Promise<void> {
    await page.goto(url);
}

export async function sigIn(username: string, password: string) {
    await this.username.type(username);
    await this.password.type(password);
    await this.signIn.click();
}

//export default {login, sigIn};

