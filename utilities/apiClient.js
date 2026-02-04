import { request } from '@playwright/test';

/**
 * Create API context using authenticated browser cookies
 * (InvoiceNinja uses cookie-based auth, NOT localStorage tokens)
 */
export async function createApiContext(page) {
  const cookies = await page.context().cookies();

  if (!cookies || cookies.length === 0) {
    throw new Error('❌ No cookies found — user not authenticated');
  }

  return await request.newContext({
    baseURL: 'https://demo.invoiceninja.com/api/v1',
    storageState: {
      cookies,
      origins: []
    },
    extraHTTPHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
