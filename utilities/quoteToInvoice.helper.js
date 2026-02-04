import { QuotePage } from '../pages/quote.page.js';
import { InvoicePage } from '../pages/invoice.page.js';

export async function createInvoiceFromQuote(page, quoteData) {
  const quotePage = new QuotePage(page);
  const invoicePage = new InvoicePage(page);

  await quotePage.createQuote(quoteData);

  if (!(await quotePage.isQuoteCreated())) {
    throw new Error('Quote creation failed');
  }

  await quotePage.convertToInvoice();
  return invoicePage; // 👈 THIS IS KEY
}

