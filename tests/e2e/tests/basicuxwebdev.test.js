import { test, expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import UXPage from "../pages/UXPage";
import WebDevPage from "../pages/WedevPage";


let homePage;
let uxPage;
let webdevPage;


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  uxPage = new UXPage(page);
  webdevPage = new WebDevPage(page);
  await homePage.navigate("/");
});

test("change language to PT", async () => {
  const toLanguage = "pt";
  await homePage.changeLanguage(toLanguage);
  const currentLanguage = await homePage.getCurrentLanguage();
  await expect(currentLanguage).toBe(toLanguage.toUpperCase());
});

test("load UX", async () => {
  await uxPage.navigateToUXpage();
  const title = await uxPage.getTitleOfThePage();
  await expect(title).toBe("Diseño UX");
});

test("load UX and change language to PT", async () => {
  const toLanguage = "pt";
  await uxPage.navigateToUXpage();
  const title = await uxPage.getTitleOfThePage();
  await expect(title).toBe("Diseño UX");
  await homePage.changeLanguage(toLanguage);
  const currentLanguage = await homePage.getCurrentLanguage();
  await expect(currentLanguage).toBe(toLanguage.toUpperCase());
  const titleInPT = await uxPage.getTitleOfPageInPT();
  await expect(titleInPT).toBe("UX Design");
  const contentInPT = await uxPage.getContentOfPageInPT();
  await expect(contentInPT).toBe(
    "Este conteúdo não está disponível atualmente em português."
  ); //This content is currently not available in Portuguese.
});

test("load webdev", async () => {
  const title = await webdevPage.getWebdevPageTitle();
  await expect(title).toBe("Desarrollo Web");
});
