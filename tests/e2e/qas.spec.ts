import {expect, test} from '@playwright/test'
import {goTo} from "../../pages/LoginPage";
import {click, fillTheInput} from "../../pages/CommonPage";
import {LOGIN} from "../../locators/loginLocators";
import {EX2, EX3} from "../../data/mocks/dynamic/ddsOld/DynamicExamples";
import {SummaryModel} from "../../data/mocks/dynamic/qas/Summary";
import * as fs from 'fs';
import * as path from 'path';
import {COMMON} from "../../locators/commonLocators";

const mockedSummaryResponse = JSON.parse(
    fs.readFileSync(
        path.join(__dirname, '../../data/mocks/static/qas/summary.json'),
        'utf-8'
    )
);
test.beforeEach(async ({page}) => {
    await goTo(page, process.env.URL)
    await fillTheInput('Fill the username input', page, LOGIN.USERNAME, process.env.USERNAME)
    await fillTheInput('Fill the password input', page, LOGIN.PASSWORD, process.env.PASSWORD)
    await click('Click the submit button', page, LOGIN.SUBMIT_BUTTON)
    await expect(page).toHaveURL('https://franchise.develop.getirapi.com/map/live')
    await click('Click the notification button', page, COMMON.NOTIFICATION_BUTTON)

});

test.describe('QAS check mocking', async () => {
    test('Summary Endpoint', async ({page}) => {
        await page.goto('https://franchise.develop.getirapi.com/dys/kds/summary')
        await page.route('https://franchise-api-gateway.development.getirapi.com/audit/summary-last-90',
            async route => {
                await route.fulfill({
                    body: JSON.stringify(mockedSummaryResponse),
                });
            });

        const summaryModel = new SummaryModel();
        const summaryModel2 = new SummaryModel("12345");
        const summaryModel3 = new EX3("foo", "bar");
        console.log(JSON.stringify(summaryModel))
        console.log(JSON.stringify(summaryModel2))
        console.log(summaryModel3.toJSON())
        console.log(mockedSummaryResponse)
        console.log("eren")
        console.log("eren2")
        await page.waitForTimeout(20000)



    })
});

