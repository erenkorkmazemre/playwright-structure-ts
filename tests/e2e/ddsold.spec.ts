import { expect, test } from '@playwright/test';
import { goTo } from '@pages/LoginPage';
import { click, fillTheInput } from '@pages/CommonPage';
import { LOGIN } from '@locators/loginLocators';
import { CriteriaModel } from '@data/mocks/dynamic/ddsOld/CriteriaModel';
import { EX2, EX3 } from '@data/mocks/dynamic/ddsOld/DynamicExamples';

test.beforeEach(async ({ page }) => {
    await goTo(page, process.env.URL);
    await fillTheInput('Fill the username input', page, LOGIN.USERNAME, process.env.USERNAME);
    await fillTheInput('Fill the password input', page, LOGIN.PASSWORD, process.env.PASSWORD);
    await click('Click the submit button', page, LOGIN.SUBMIT_BUTTON);
    await expect(page).toHaveURL('https://franchise.develop.getirapi.com/map/live');
});

test.describe('DDS OLD check mocking', async () => {
    test('Criteria Endpoint', async ({ page }) => {
        await page.goto('https://franchise.develop.getirapi.com/dys/dds/summary');
        const criteriaModel = new CriteriaModel();
        const criteriaModel2 = new CriteriaModel('12345');
        const criteriaModel3 = new EX3('foo', 'bar');
        console.log(JSON.stringify(criteriaModel));
        console.log(JSON.stringify(criteriaModel2));
        console.log(criteriaModel3.toJSON());
    });
});
