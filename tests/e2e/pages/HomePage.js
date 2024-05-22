import { format } from "util";
class HomePage {
  constructor(page) {
    this.page = page
    this.changeLanguageButtonSelector = "#lang-select";
    this.selectLanguageListSelector = "li[data-value='%s']";
  }

  async navigate(url){
    await this.page.goto(url)
  }

  async changeLanguage(toLanguage){
    await this.page.locator(this.changeLanguageButtonSelector).click();
    await this.page.click(format(this.selectLanguageListSelector, toLanguage.toLowerCase()));
  }
  async getCurrentLanguage(){
    return this.page.locator(this.changeLanguageButtonSelector).textContent()
  }

}

export default HomePage;
