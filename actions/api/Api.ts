import { ContactModel } from '@data/mocks/dynamic/contactList/ContactModel';
import { Tutorial } from '@data/mocks/dynamic/tutorial/Tutorial';
import { Page, expect, request } from '@playwright/test';
import logger from '@utils/logger';

//Post Data
export async function createFakeData(
    stepDescription: string,
    request: any,
    singleton: any,
    endpoint: string
): Promise<void> {
    singleton = new singleton();
    await request.post(endpoint, {
        data: singleton
    });
    logger.info(stepDescription);
}

//Delete All Data
export async function deleteAllFakeData(
    stepDescription: string,
    request: any,
    endpoint: string
): Promise<void> {
    await request.delete(endpoint);
    logger.info(stepDescription);
}
