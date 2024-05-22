import { test, expect } from "@playwright/test";
import HomePage from "./pages/HomePage";
import UXPage from "./pages/UXPage";
import WebDevPage from "./pages/WedevPage";
import TopicsPage from "./pages/TopicsPage";

const expectedTopicsArrayES = [
  "JavaScript",
  "Browser JavaScript",
  "CSS",
  "Functional JavaScript",
  "HTML",
  "Learning Mindset",
  "Paradigmas de programación",
  "Source Code Management (SCM) - Git + GitHub",
  "Unix Shell",
];

const expectedTopicsInPTArray = [
  "JavaScript",
  "Browser JavaScript",
  "CSS",
  "HTML",
  "Source Code Management (SCM) - Git + GitHub",
  "Unix Shell",
];

let homePage;
let uxPage;
let webdevPage;
let topicsPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  uxPage = new UXPage(page);
  webdevPage = new WebDevPage(page);
  topicsPage = new TopicsPage(page);
  await homePage.navigate("/");
});

test("change language to PT", async () => {
  const toLanguage = "pt";
  await homePage.changeLanguage(toLanguage);
  const currentLanguage = await homePage.getCurrentLanguage();
  await expect(currentLanguage).toBe(toLanguage.toUpperCase());
});

test("load UX", async () => {
  const title = await uxPage.navigateToUXpage();
  await expect(title).toBe("Diseño UX");
});

test("load UX and change language to PT", async () => {
  const toLanguage = "pt";
  const title = await uxPage.navigateToUXpage();
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

test("load webdev topics", async () => {
  await webdevPage.goToWebdevPage();
  await topicsPage.goToTopicPage();
  const actualTopicsArray = await topicsPage.getTitlesOfTheTopics();
  expect(actualTopicsArray).toEqual(expectedTopicsArrayES);
});

test("load webdev topics and change language", async () => {
  await webdevPage.goToWebdevPage();
  await topicsPage.goToTopicPage();
  await homePage.changeLanguage("pt");
  const pageTitle = await webdevPage.getWebdevPageTitleInPT();
  await expect(pageTitle).toBe("Desenvolvimento Web");
  const actualTopicsInPTArray = await topicsPage.getTitlesOfTheTopics();
  expect(actualTopicsInPTArray).toEqual(expectedTopicsInPTArray);
});
