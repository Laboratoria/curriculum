import { format } from "util";

class WebDevPage {
  constructor(page){
    this.page = page
    this.webdevContainerSelector = "[data-testid='webDev-container'] > %s";
  }

  async goToWebdevPage() {
    await this.page.getByTestId("webdev").click();
  }
  async getWebdevPageTitle() {
    await this.goToWebdevPage()
    return this.page.locator(format(this.webdevContainerSelector, "h1")).textContent()
  }

  async getWebdevPageTitleInPT() {
    return this.page.locator(format(this.webdevContainerSelector, "h1")).textContent();
  }
}

export default WebDevPage;
