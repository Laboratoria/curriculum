class TopicsPage {
  constructor(page) {
    this.page = page;
    this.topicsTitlesSelector = "[data-testid='topic-title']";
  }

  async goToTopicPage() {
    await this.page.getByTestId("topics").click();
  }

  async getTitlesOfTheTopics() {
    const elements = this.page.locator(this.topicsTitlesSelector);
    // Get the title of all the topics and store in an array
    return elements.evaluateAll((elements) =>
      elements.map((element) => element.textContent.trim())
    );
  }
}

export default TopicsPage;
