export async function createQuote(api, clientId) {
  const response = await api.post('/quotes', {
    data: {
      client_id: clientId,
      line_items: [
        {
          quantity: 1,
          cost: 100,
          product_key: 'Test Item'
        }
      ]
    }
  });

  const body = await response.json();

  if (!response.ok()) {
    throw new Error(
      `Create quote failed (${response.status()}): ${JSON.stringify(body)}`
    );
  }

  return body.data.id;
}

export async function deleteQuote(api, quoteId) {
  if (!quoteId) return;
  await api.delete(`/quotes/${quoteId}`);
}
