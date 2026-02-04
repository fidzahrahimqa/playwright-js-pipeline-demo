// utilities/navigation.util.js
import { expect } from '@playwright/test';

/**
 * Navigate to Quotes via LEFT sidebar (Flutter Web safe)
 * @param {import('@playwright/test').Page} page
 */
export async function navigateToQuotes(page) {
  // 1️⃣ Assert app shell exists (sidebar rendered)
  const sidebar = page.locator('nav');
  await expect(sidebar).toBeVisible({ timeout: 20000 });

  // 2️⃣ Click Quotes in sidebar (no visibility assertion on text)
  const quotesNav = sidebar.getByText('Quotes');

  // Click even if Playwright thinks it's not visible
  await quotesNav.click({ force: true });

  // 3️⃣ Wait for route change (Flutter-safe)
  await page.waitForTimeout(2000);

  // 4️⃣ Assert Quotes page loaded by checking "New Quote" button
  // This button ONLY exists on Quotes page
  await expect(
    page.getByText('New Quote')
  ).toBeVisible({ timeout: 20000 });
}
