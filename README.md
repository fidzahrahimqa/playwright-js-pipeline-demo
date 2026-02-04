# SauceDemo Automation – Playwright (JavaScript)

This project demonstrates **UI automation testing** using **Playwright (JavaScript)**
against the SauceDemo application.

It is designed with **maintainability, scalability, and interview readiness** in mind,
using Page Object Model (POM), shared base fixtures, and tagged test execution.

---

## 🚀 Tech Stack

- Playwright
- JavaScript (ES Modules)
- Node.js
- SauceDemo (UI Test Application)

---

## 📁 Project Structure

saucedemo-automation-js/
├─ pages/
│ ├─ login.page.js
│ ├─ inventory.page.js
│ └─ cart.page.js
├─ tests/
│ ├─ baseTest.js
│ ├─ standardUser.spec.js
│ └─ lockedOutUser.spec.js
├─ playwright.config.js
├─ package.json
└─ README.md

## 🧱 Framework Design

### Page Object Model (POM)
- Each page encapsulates selectors and actions
- Tests focus only on behavior, not UI details

### BaseTest
- Centralized fixtures (`loginPage`, `inventoryPage`)
- `beforeEach` handles standard user login
- `afterEach` ensures logout and clean state

### Test Isolation
- Every test runs independently
- No shared state between tests

---

## 🔐 Authentication Strategy

- **Standard user tests**:
  - Login handled automatically in `beforeEach`
- **Authentication tests**:
  - Login executed explicitly inside the test
  - Prevents hiding failures in setup logic

---

## 🧪 Test Coverage

### Standard User
- Login success
- View product list
- Add product to cart
- Remove product from cart

### Locked Out User
- Login blocked with correct error message

---

## 🏷 Test Tags

Tests are categorized using tags:

- `@smoke` – critical functionality
- `@regression` – full test coverage

### Run examples (PowerShell):

```powershell
npx playwright test --grep "@smoke"
npx playwright test --grep "@regression"
Note: Quotes are required in PowerShell when using @ symbols.

▶️ Running Tests
Run all tests:

powershell
Copy code
npx playwright test
Open HTML report:

powershell
Copy code
npx playwright show-report
📊 Reporting & Debugging
HTML report generated after execution

Screenshots, videos, and traces captured on failure

Easy replay for debugging failed tests

