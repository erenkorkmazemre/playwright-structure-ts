import { Page } from '@playwright/test';

export async function goTo(page: Page, url: any): Promise<void> {
    await page.goto(url);
}

export async function sigIn(username: string, password: string) {
    await this.username.type(username);
    await this.password.type(password);
    await this.signIn.click();
}

