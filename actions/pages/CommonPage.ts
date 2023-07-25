import { ContactModel } from '@data/mocks/dynamic/contactList/ContactModel';
import { Page, expect } from '@playwright/test';
import logger from '@utils/logger';

export async function click(stepDescription: string, page: Page, locator: string): Promise<void> {
    await expect(page.locator(locator)).toBeVisible({ timeout: 5000 });
    await page.click(locator);
    logger.info(stepDescription);
}

//Assert contain text
export async function assertContainText(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await expect(page.locator(locator)).toBeVisible({ timeout: 5000 });
    await expect(page.locator(locator)).toContainText(value);
    logger.info(stepDescription);
}

//Fill the input with value (Clear the input then fill)
export async function fillTheInput(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await expect(page.locator(locator)).toBeVisible({ timeout: 5000 });
    await page.locator(locator).fill(value);
    logger.info(stepDescription);
}

//Type the input with value
export async function typeTheInput(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await page.locator(locator).type(value);
    logger.info(stepDescription);
}

export async function mockDataWithMultipleArray(
    stepDescription: string,
    singleton: any,
    arraySize: number,
    page: Page,
    endpoint: string
): Promise<void> {
    singleton = new singleton(arraySize);
    await page.route(endpoint, async (route) => {
        await route.fulfill({
            body: JSON.stringify(singleton.data)
        });
    });
    logger.info(stepDescription);
}

//Click the element
export async function clickTheElement(stepDescription: string, page: Page, locator): Promise<void> {
    await expect(locator).toBeEnabled();
    await page.locator(locator).click();
    logger.info(stepDescription);
}

//Right Click the element
export async function rightClickTheElement(
    stepDescription: string,
    page: Page,
    locator
): Promise<void> {
    await expect(locator).toBeEnabled();
    await page.locator(locator).click({ button: 'right' });
    logger.info(stepDescription);
}

//Shift + Click the element
export async function shiftClickTheElement(
    stepDescription: string,
    page: Page,
    locator
): Promise<void> {
    await expect(locator).toBeEnabled();
    await page.locator(locator).click({ modifiers: ['Shift'] });
    logger.info(stepDescription);
}

// Hover over element
export async function hoverTheElement(stepDescription: string, page: Page, locator): Promise<void> {
    await page.locator(locator).hover();
    logger.info(stepDescription);
}

//Force Click the element
export async function forceClickTheElement(
    stepDescription: string,
    page: Page,
    locator
): Promise<void> {
    await expect(locator).toBeEnabled();
    await page.locator(locator).click({ force: true });
    logger.info(stepDescription);
}

// Hit Enter
export async function hitEnterTheElement(
    stepDescription: string,
    page: Page,
    locator
): Promise<void> {
    await page.locator(locator).press('Enter');
    logger.info(stepDescription);
}

//Double Click the element
export async function doubleClickTheElement(
    stepDescription: string,
    page: Page,
    locator
): Promise<void> {
    await expect(locator).toBeEnabled();
    await page.locator(locator).click();
    logger.info(stepDescription);
}

//Find element by given Text
export async function findElementByGivenText(
    stepDescription: string,
    page: Page,
    locator
): Promise<void> {
    await page.locator(locator).check();
    logger.info(stepDescription);
}

//Expect to have Url
export async function expectToHaveUrl(stepDescription: string, page: Page, locator): Promise<void> {
    await expect(page).toHaveURL(locator);
    logger.info(stepDescription);
}
