const endpoint =
  "http://localhost:3000/api/v1/prediction/2429f869-6ca6-4d30-bf10-0617c3ce49a9";

async function query(data) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

describe("test endpoint responses", () => {
  test("Debe incluir Descroisilles para el creador de la cafetera", async () => {
    const response = await query({
      history: [],
      overrideConfig: {},
      question: "¿Quién fue el inventor del primer modelo de cafetera?",
    });
    expect(response.toLowerCase()).toContain("descroisilles");
  });

  test("Debe responder Melitta Bentz", async () => {
    const response = await query({
      history: [],
      overrideConfig: {},
      question: "¿Cómo se llamaba la primera mujer interesada en el invento?",
    });
    expect(response).toContain("Melitta Bentz");
  });

  test("Debe incluir Descroisilles para el creador de la cafetera", async () => {
    const response = await query({
      history: [],
      overrideConfig: {},
      question: "¿Cuál es la nacionalidad de Melitta?",
    });
    expect(response.toLowerCase()).toContain("alemana");
  });
});

describe("Valida el archivo JSON del flow", () => {
  test("find Text File node", async () => {
    const flow = require("./flow.json");
    expect(flow.nodes.some((node) => node.data.label === "Text File")).toBe(
      true
    );
  });
});
