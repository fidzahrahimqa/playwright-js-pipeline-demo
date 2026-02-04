export async function createClient(api) {
  const response = await api.post('/clients', {
    data: {
      name: `Client ${Date.now()}`,
      contacts: [
        {
          first_name: 'Test',
          last_name: 'User',
          email: `test${Date.now()}@example.com`
        }
      ]
    }
  });

  const status = response.status();
  const bodyText = await response.text();

  throw new Error(
    `CREATE CLIENT DEBUG
Status: ${status}
Body:
${bodyText}`
  );
}

export async function deleteClient(api, clientId) {
  if (!clientId) return;
  await api.delete(`/clients/${clientId}`);
}
