export class LoginPage {
  constructor(page) {
    this.page = page;

    // Selectors
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  /**
   * Navigate to SauceDemo login page
   * Uses baseURL from playwright.config.js
   */
  async goto() {
    await this.page.goto('/');
  }

  /**
   * Login with provided credentials
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  /**
   * Login using standard_user (happy path shortcut)
   */
  async loginAsStandardUser() {
    await this.login('standard_user', 'secret_sauce');
  }

  /**
   * Get error message text (for negative tests)
   */
  async getErrorMessage() {
    await this.page.waitForSelector(this.errorMessage);
    return await this.page.textContent(this.errorMessage);
  }
}
