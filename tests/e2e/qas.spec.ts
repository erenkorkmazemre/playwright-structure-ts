import {expect, test} from '@playwright/test'
import {goTo} from "@pages/LoginPage";
import {click, fillTheInput, mockDataWithMultipleArray} from "@pages/CommonPage";
import {LOGIN} from "@locators/loginLocators";
import {EX2, EX3} from "@data/mocks/dynamic/ddsOld/DynamicExamples";
import {SummaryModel} from "@data/mocks/dynamic/qas/Summary";
import * as fs from 'fs';
import * as path from 'path';
import {COMMON} from "@locators/commonLocators";
import {QAS_ENDPOINT} from "@utils/endpoints/qas";

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

        await goTo(page, 'https://franchise.develop.getirapi.com/dys/kds/summary')
        await mockDataWithMultipleArray("QAS Summary endpoint desc", SummaryModel, 46, page, QAS_ENDPOINT.SUMMARY)
        await page.waitForTimeout(10000)


    })
});

