import {Page} from '@playwright/test';
import {LOGIN} from "../locators/loginLocators";

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


//export default {login, sigIn};

