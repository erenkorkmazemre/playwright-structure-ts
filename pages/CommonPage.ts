import {Page} from '@playwright/test';
import {LOGIN} from "../locators/loginLocators";
import {SummaryModel} from "../data/mocks/dynamic/qas/Summary";

export async function click(
    stepDescription: string,
    page: Page,
    selector: string,
): Promise<void> {
    await page.click(selector)
    console.log(stepDescription)
}

export async function fillTheInput(
    stepDescription: string,
    page: Page,
    locator,
    value: any
): Promise<void> {
    await page.locator(locator).type(value)
    console.log(stepDescription)
}

export async function mockDataWithMultipleArray(
    stepDescription: string,
    singleton:any,
    arraySize:number,
    page: Page,
    endpoint: string,
): Promise<void> {
    singleton = new singleton(arraySize)
    await page.route(endpoint,
        async route => {
            await route.fulfill({
                body: JSON.stringify(singleton),
            });
        });
    console.log(stepDescription)
}


//export default {login, sigIn};

