import { test, expect } from "@playwright/test";
import { format } from "util";

const changeLanguageButtonSelector = "#lang-select";
const selectLanguageListSelector = "li[data-value='%s']";
const uxPtContainerSelector = "[data-testid='ux-pt-container'] > %s";
const webdevContainerSelector = "[data-testid='webDev-container'] > %s";
const topicsTitlesSelector = "[data-testid='topic-title']";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("change language to PT", async ({ page }) => {
  await page.locator(changeLanguageButtonSelector).click();
  await page.click(format(selectLanguageListSelector, "pt"));
  await expect(page.locator(changeLanguageButtonSelector)).toHaveText("PT");
});

test("load UX", async ({ page }) => {
  await page.getByTestId("ux").click();
  await expect(page.locator("h1")).toHaveText("Diseño UX");
  await expect(page.locator("h2")).toHaveText("Proyectos");
});

test("load UX and change language to PT", async ({ page }) => {
  await page.getByTestId("ux").click();
  await page.locator(changeLanguageButtonSelector).click();
  await page.click(format(selectLanguageListSelector, "pt"));
  await expect(page.locator(format(uxPtContainerSelector, "h1"))).toHaveText(
    "UX Design"
  );
  await expect(page.locator(changeLanguageButtonSelector)).toHaveText("PT");
  await expect(page.locator(format(uxPtContainerSelector, "p"))).toHaveText(
    "Este conteúdo não está disponível atualmente em português."
  ); //This content is currently not available in Portuguese.
});

test("load webdev", async ({ page }) => {
  await page.getByTestId("webdev").click();
  await expect(page.locator(format(webdevContainerSelector, "h1"))).toHaveText(
    "Desarrollo Web"
  );
});

test("load webdev topics", async ({ page }) => {
  const expectedTopicArray = [
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
  await page.getByTestId("webdev").click();
  await page.getByTestId("topics").click();
  const elements = page.locator(topicsTitlesSelector);
  // Get the title of all the topics and store in an array
  const actualTopicArray = await elements.evaluateAll((elements) =>
    elements.map((element) => element.textContent.trim())
  );
  expect(actualTopicArray).toEqual(expectedTopicArray);
});
