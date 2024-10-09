const axios = require('axios');
const chatFlow = require('../test/flow.json');

const PORT = process.env.PORT;
const openAIApiKey = process.env.OPENAI_API_KEY;
const baseUrl = `http://localhost:${PORT}/api/v1`;

const createCredential = async (name, apiKey) => {
  const payload = {
    name,
    credentialName: 'openAIApi',
    plainDataObj: { openAIApiKey: apiKey },
  };
  const { data } = await axios.post(`${baseUrl}/credentials`, payload);
  return data.id;
};

const createFlow = async (name, credentialId) => {
  const nodes = chatFlow.nodes.map((node) => {
    if (node.data.type === 'ChatOpenAI') {
      node.data.credential = credentialId;
    }
    return node;
  });

  const chatFlowCredential = { ...chatFlow, nodes };

  const payload = {
    deployed: false,
    flowData: JSON.stringify(chatFlowCredential),
    isPublic: false,
    name,
  };

  const { data } = await axios.post(`${baseUrl}/chatflows`, payload);
  return data.id;
};

const testEndpoint = async (endpoint) => {
  console.log(`${baseUrl}/prediction/${endpoint}`);

  const response = await axios.post(`${baseUrl}/prediction/${endpoint}`, {
    question: 'pozole',
    history: [],
    overrideConfig: {},
  });
  return response.status === 200;
};

const fullFlow = async (flowName) => {
  const credentialId = await createCredential(
    'credential script',
    openAIApiKey
  );
  const flowId = await createFlow(flowName, credentialId);
  console.log(flowId);
  return await testEndpoint(flowId);
};

fullFlow('chatFlow').then(console.log);
