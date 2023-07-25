import { expect, test } from '@playwright/test';
import { goTo } from '@actions/pages/LoginPage';
import { click, expectToHaveUrl, fillTheInput } from '@actions/pages/CommonPage';
import { LOGIN } from '@locators/loginLocators';
import { URL } from '@utils/urls/franchise';
import { faker } from '@faker-js/faker';
import { User } from 'tests/types/User';
import { LOGIN_ENDPOINT } from '@utils/endpoints/login';

test.describe('Try to login then check failure and success', async () => {
    test('Login with success', async ({ page }) => {
        await goTo(page, process.env.URL);
        await fillTheInput('Fill the username input', page, LOGIN.USERNAME, process.env.USERNAME);
        await fillTheInput('Fill the password input', page, LOGIN.PASSWORD, process.env.PASSWORD);
        await click('Click the submit button', page, LOGIN.SUBMIT_BUTTON);
        await expectToHaveUrl('Live page', page, URL.CONTACT_LIST);
        /** Under the below includes API request && response process **/
        const response = await page.request.post(LOGIN_ENDPOINT.AUTH, {
            data: {
                email: process.env.USERNAME,
                password: process.env.PASSWORD
            }
        });
        const userData: User = <User>await response.json();
        process.env.TOKEN = userData.token;
        console.log(process.env.TOKEN);
    });

    test('Login with failure', async ({ page }) => {
        const username = faker.internet.userName() + faker.random.numeric(2);
        const password = faker.internet.password();
        const response = await page.request.post(LOGIN_ENDPOINT.AUTH, {
            data: {
                email: username,
                password: password
            }
        });
        await goTo(page, process.env.URL);
        await fillTheInput('Fill the username input', page, LOGIN.USERNAME, username);
        await fillTheInput('Fill the password input', page, LOGIN.PASSWORD, password);
        await click('Click the submit button', page, LOGIN.SUBMIT_BUTTON);
        await expect(response).not.toBeOK();
    });
});
