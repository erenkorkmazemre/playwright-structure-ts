import { expect, test } from '@playwright/test';
import { goTo } from '@actions/pages/LoginPage';
import { click, fillTheInput } from '@actions/pages/CommonPage';
import { LOGIN } from '@locators/loginLocators';
import { faker } from '@faker-js/faker';
import { User } from 'tests/types/User';

test.describe('Try to login then check failure and success', async () => {
    test('Login with success', async ({ page }) => {
        await goTo(page, process.env.URL);
        await fillTheInput('Fill the username input', page, LOGIN.USERNAME, process.env.USERNAME);
        await fillTheInput('Fill the password input', page, LOGIN.PASSWORD, process.env.PASSWORD);
        await click('Click the submit button', page, LOGIN.SUBMIT_BUTTON);
        await expect(page).toHaveURL('https://franchise.develop.getirapi.com/map/live');
        /** Under the below includes API request && response process **/
        const response = await page.request.post(
            'https://franchise-api-gateway.development.getirapi.com/auth/login',
            {
                data: {
                    username: process.env.USERNAME,
                    password: process.env.PASSWORD
                }
            }
        );
        const userData: User = <User>await response.json();
        console.log(response.json().then((res) => console.log(res.refreshToken)));
        console.log(userData.refreshToken);
        console.log(userData.accessToken);
    });

    test('Login with failure', async ({ page }) => {
        const username = faker.internet.userName() + faker.random.numeric(2);
        const password = faker.internet.password();
        const response = await page.request.post(
            'https://franchise-api-gateway.development.getirapi.com/auth/login',
            {
                data: {
                    username: username,
                    password: password
                }
            }
        );
        await goTo(page, process.env.URL);
        await fillTheInput('Fill the username input', page, LOGIN.USERNAME, username);
        await fillTheInput('Fill the password input', page, LOGIN.PASSWORD, password);
        await click('Click the submit button', page, LOGIN.SUBMIT_BUTTON);
        await expect(response).not.toBeOK();
        /** Under the below includes API request && response process **/
        const userData: User = <User>await response.json();
        console.log(response.json().then((res) => console.log(res.refreshToken)));
        console.log(userData.refreshToken);
        console.log(userData.accessToken);
    });
});
