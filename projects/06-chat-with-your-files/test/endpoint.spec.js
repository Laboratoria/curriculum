const flow = require('./flow.json');

describe('Valida el archivo JSON del flow', () => {
  test('Debe contener al menos 1 nodo del tipo TextSplitter', () => {
    expect(
      flow.nodes.some((node) => node.data.type.includes('TextSplitter'))
    ).toBe(true);
  });

  test('Debe hacer uso de Embeddings', () => {
    expect(
      flow.nodes.some((node) => node.data.category.includes('Embeddings'))
    ).toBe(true);
  });

  test('Debe utilizar únicamente el modelo de chat gpt-3.5-turbo', () => {
    expect(
      flow.nodes
        .filter((node) => node.data.type === 'ChatOpenAI')
        .every((node) => node.data.inputs.modelName === 'gpt-3.5-turbo')
    ).toBe(true);
  });

  test('Debe hacer uso de una Vectore Store', () => {
    expect(
      flow.nodes.some((node) => node.data.category === 'Vector Stores')
    ).toBe(true);
  });

  test('Debe cargar al menos 1 Documento', () => {
    expect(flow.nodes.some((node) => node.data.type === 'Document')).toBe(true);
  });

  test('Debe utilizar el nodo Conversational Retrieval QA Chain', () => {
    expect(
      flow.nodes.some(
        (node) => node.data.type === 'ConversationalRetrievalQAChain'
      )
    ).toBe(true);
  });
});