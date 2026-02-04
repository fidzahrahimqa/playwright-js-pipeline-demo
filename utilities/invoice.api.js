export async function convertQuoteToInvoice(api, quoteId) {
  const response = await api.post(`/quotes/${quoteId}/invoice`);

  const body = await response.json();

  if (!response.ok()) {
    throw new Error(
      `Convert to invoice failed (${response.status()}): ${JSON.stringify(body)}`
    );
  }

  return body.data.id;
}

export async function deleteInvoice(api, invoiceId) {
  if (!invoiceId) return;
  await api.delete(`/invoices/${invoiceId}`);
}
