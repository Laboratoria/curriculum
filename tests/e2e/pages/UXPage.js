import { format } from "util";

class UXPage {
  constructor(page) {
    this.page = page;
    this.uxPtContainerSelector = "[data-testid='ux-pt-container'] > %s";
  }

  async navigateToUXpage() {
    await this.page.getByTestId("ux").click();
  }

  async getTitleOfThePage() {
    return this.page.locator("h1").textContent()
  }
  
  async getTitleOfPageInPT() {
    return this.page.locator(format(this.uxPtContainerSelector, "h1")).textContent();
  }

  async getContentOfPageInPT() {
    return this.page.locator(format(this.uxPtContainerSelector, "p")).textContent();
  }
}

export default UXPage;
