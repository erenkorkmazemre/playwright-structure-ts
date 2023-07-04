import { expect, test } from '@playwright/test';
import { goTo } from '@actions/pages/LoginPage';
import { click, fillTheInput } from '@actions/pages/CommonPage';
import { LOGIN } from '@locators/loginLocators';
import { URL } from '@utils/urls/franchise';
import { CriteriaModel } from '@data/mocks/dynamic/ddsOld/CriteriaModel';
import { EX2, EX3 } from '@data/mocks/dynamic/ddsOld/DynamicExamples';

test.beforeEach(async ({ page }) => {
    await goTo(page, process.env.URL);
    await fillTheInput('Fill the username input', page, LOGIN.USERNAME, process.env.USERNAME);
    await fillTheInput('Fill the password input', page, LOGIN.PASSWORD, process.env.PASSWORD);
    await click('Click the submit button', page, LOGIN.SUBMIT_BUTTON);
    await expect(page).toHaveURL(URL.DDS_OLD);
});

test.describe('DDS OLD check mocking', async () => {
    test('Criteria Endpoint', async ({ page }) => {
        await goTo(page, URL.DDS_OLD);
        const criteriaModel = new CriteriaModel();
        const criteriaModel2 = new CriteriaModel('12345');
        const criteriaModel3 = new EX3('foo', 'bar');
        console.log(JSON.stringify(criteriaModel));
        console.log(JSON.stringify(criteriaModel2));
        console.log(criteriaModel3.toJSON());
    });
});
