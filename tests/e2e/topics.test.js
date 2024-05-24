import { test, expect } from "@playwright/test";
import HomePage from "./pages/HomePage";
import UXPage from "./pages/UXPage";
import WebDevPage from "./pages/WedevPage";
import TopicsPage from "./pages/TopicsPage";

const expectedWebdevTopicsArray = [
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

const expectedWebdevTopicsInPTArray = [
  "JavaScript",
  "Browser JavaScript",
  "CSS",
  "HTML",
  "Source Code Management (SCM) - Git + GitHub",
  "Unix Shell",
];

const expectedUXTopicsArray = [
  "Cómo crear y organizar el contenido de un producto digital",
  "Interaction Design",
  "Intro a User Experience Design",
  "Learning Mindset",
  "Prototipado",
  "UX Research",
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

test("load webdev topics", async () => {
  await webdevPage.goToWebdevPage();
  await topicsPage.goToTopicPage();
  const actualTopicsArray = await topicsPage.getTitlesOfTheTopics();
  expect(actualTopicsArray).toEqual(expectedWebdevTopicsArray);
});

test("load webdev topics and change language", async () => {
  await webdevPage.goToWebdevPage();
  await topicsPage.goToTopicPage();
  await homePage.changeLanguage("pt");
  const pageTitle = await webdevPage.getWebdevPageTitleInPT();
  await expect(pageTitle).toBe("Desenvolvimento Web");
  const actualTopicsInPTArray = await topicsPage.getTitlesOfTheTopics();
  expect(actualTopicsInPTArray).toEqual(expectedWebdevTopicsInPTArray);
});

test("load ux topics", async () => {
  await uxPage.navigateToUXpage();
  await topicsPage.goToTopicPage();
  const actualUXTopicsArray = await topicsPage.getTitlesOfTheTopics();
  expect(actualUXTopicsArray).toEqual(expectedUXTopicsArray);
});

test("load ux topics and change language", async () => {
  await uxPage.navigateToUXpage();
  await topicsPage.goToTopicPage();
  await homePage.changeLanguage("pt");
  const contentInPT = await uxPage.getContentOfPageInPT();
  await expect(contentInPT).toBe(
    "Este conteúdo não está disponível atualmente em português."
  ); //This content is currently not available in Portuguese.
  // uncomment following lines and remove the two lines above when topics will be available in PT
  //const actualUXTopicsInPTArray = await topicsPage.getTitlesOfTheTopics();
  //expect(actualUXTopicsInPTArray).toEqual(expectedUXopicsInPTArray);
});
