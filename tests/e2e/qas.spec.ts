import { test } from '@playwright/test';
import { goTo } from '@actions/pages/LoginPage';
import {
    click,
    expectToHaveUrl,
    fillTheInput,
    mockDataWithMultipleArray
} from '@actions/pages/CommonPage';
import { LOGIN } from '@locators/loginLocators';
import { ContactModel } from '@data/mocks/dynamic/contactList/ContactModel';
import * as fs from 'fs';
import * as path from 'path';
import { URL } from '@utils/urls/franchise';
import { CONTACT_ENDPOINT } from '@utils/endpoints/contact';
import { createFakeData, deleteAllFakeData } from '@actions/api/Api';
import { TUTORIAL } from '@utils/endpoints/tutorial';
import { Tutorial } from '@data/mocks/dynamic/tutorial/Tutorial';

const mockedSummaryResponse = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../data/mocks/static/contactList/contact.json'), 'utf-8')
);
test.beforeEach(async ({ page }) => {
    await goTo(page, process.env.URL);
    await fillTheInput('Fill the username input', page, LOGIN.USERNAME, process.env.USERNAME);
    await fillTheInput('Fill the password input', page, LOGIN.PASSWORD, process.env.PASSWORD);
    await click('Click the submit button', page, LOGIN.SUBMIT_BUTTON);
    await expectToHaveUrl('Live page', page, URL.CONTACT_LIST);
});

test.describe('Contact check mocking @e2e', async () => {
    test('Contact Endpoint', async ({ page }) => {
        await mockDataWithMultipleArray(
            'Contact endpoint desc',
            ContactModel,
            40,
            page,
            CONTACT_ENDPOINT.LIST
        );
        await goTo(page, URL.CONTACT_LIST);
    });
});

test.describe('Contact check mocking @FP-YYY', async () => {
    test('Contact Mocking Branchbase', async ({ page }) => {
        await mockDataWithMultipleArray(
            'Mock With Multiple Array',
            ContactModel,
            46,
            page,
            CONTACT_ENDPOINT.LIST
        );
        await goTo(page, URL.CONTACT_LIST);
    });
});

test.describe('Fake Data', async () => {
    test('Delete and Create Data', async ({ request }) => {
        await deleteAllFakeData('Delete All Data', request, TUTORIAL.DELETE);
        await createFakeData('Create Fake Data', request, Tutorial, TUTORIAL.POST);

        // const mongoose = require('mongoose');
        // const db = {};
        // db.tutorials = require('../../server-app/models/tutorial.model.js')(mongoose);
        // const schema = model('tutorial').schema.obj;
        // console.log(schema);
    });
});
