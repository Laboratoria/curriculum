const flow = require("./flow.json");

describe("Valida el archivo JSON del flow", () => {
  test("Debe contener al menos 2 cadenas LLM", async () => {
    expect(
      flow.nodes.reduce(
        (acc, node) => acc + (node.data.type === "LLMChain" ? 1 : 0),
        0
      )
    ).toBeGreaterThan(1);
  });
  test("Debe contener al menos 1 Prompt Template", async () => {
    expect(flow.nodes.some((node) => node.data.type === "PromptTemplate")).toBe(
      true
    );
  });
  test("Debe contener al menos 1 Chat Model Open AI", async () => {
    expect(flow.nodes.some((node) => node.data.type === "ChatOpenAI")).toBe(
      true
    );
  });
  test("Debe contener al menos 1 Chat Promt Template que utilicé el input de otra cadena", async () => {
    expect(
      flow.nodes.some(
        (node) =>
          node.data.type === "ChatPromptTemplate" &&
          node.data.inputs.promptValues.match(/llmChain_\d+\.data\.instance/)
      )
    ).toBeTruthy();
  });
});
