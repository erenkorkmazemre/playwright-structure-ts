import { Page } from '@playwright/test';
import { LOGIN } from '@locators/loginLocators';
import { SummaryModel } from '@data/mocks/dynamic/qas/Summary';

export async function click(stepDescription: string, page: Page, selector: string): Promise<void> {
    await page.click(selector);
    console.log(stepDescription);
}

//Fill the input with value (Clear the input then fill)
export async function fillTheInput(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
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
    await page.locator(locator).click();
    console.log(stepDescription);
}

//Force Click the element
export async function forceClickTheElement(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await page.locator(locator).click();
    console.log(stepDescription);
}

//Double Click the element
export async function doubleClickTheElement(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await page.locator(locator).click();
    console.log(stepDescription);
}

//Submits on element with given element
export async function submitTheElementWithGivenElement(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
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
