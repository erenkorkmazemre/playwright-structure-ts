import { Page, expect } from '@playwright/test';
import { LOGIN } from '@locators/loginLocators';
import { SummaryModel } from '@data/mocks/dynamic/qas/Summary';

export async function click(stepDescription: string, page: Page, locator: string): Promise<void> {
    await expect(page.locator(locator)).toBeVisible({ timeout: 5000 })
    await page.click(locator);
    console.log(stepDescription);
}

//Assert contain text
export async function assertContainText(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await expect(page.locator(locator)).toBeVisible({ timeout: 5000 })
    await expect(page.locator(locator)).toContainText(value)
    console.log(stepDescription);
}

//Fill the input with value (Clear the input then fill)
export async function fillTheInput(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await expect(page.locator(locator)).toBeVisible({ timeout: 5000 })
    await page.locator(locator).fill(value);
    console.log(stepDescription);
}

//Type the input with value
export async function typeTheInput(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await page.locator(locator).type(value);
    console.log(stepDescription);
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
            body: JSON.stringify(singleton)
        });
    });
    console.log(stepDescription);
}

//Click the element
export async function clickTheElement(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await expect(locator).toBeEnabled();
    await page.locator(locator).click();
    console.log(stepDescription);
}

//Right Click the element
export async function rightClickTheElement(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await expect(locator).toBeEnabled();
    await page.locator(locator).click({ button: 'right' });
    console.log(stepDescription);
}

//Shift + Click the element
export async function shiftClickTheElement(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await expect(locator).toBeEnabled();
    await page.locator(locator).click({ modifiers: ['Shift'] });
    console.log(stepDescription);
}

// Hover over element
export async function hoverTheElement(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await page.locator(locator).hover();
    console.log(stepDescription);
}

//Force Click the element
export async function forceClickTheElement(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await expect(locator).toBeEnabled();
    await page.locator(locator).click({ force: true });
    console.log(stepDescription);
}

// Hit Enter
export async function hitEnterTheElement(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await page.locator(locator).press('Enter');
    console.log(stepDescription);
}

//Double Click the element
export async function doubleClickTheElement(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await expect(locator).toBeEnabled();
    await page.locator(locator).click();
    console.log(stepDescription);
}

//Find element by given Text
export async function findElementByGivenText(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await page.locator(locator).check();
    console.log(stepDescription);
}

//export default {login, sigIn};
