import {Page} from '@playwright/test';

export async function click(
    page: Page,
    selector: string
): Promise<void> {
    await page.click(selector)
}


//export default {login, sigIn};

