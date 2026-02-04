import { test, expect } from './baseTest.js';

test.describe('@regression Locked Out User – SauceDemo', () => {

  test('TC_LO_01 – Locked out user cannot login', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Sorry, this user has been locked out');
  });

});
