const createTestRunner = tests => code => new Promise((resolve, reject) => {
  const worker = new Worker('/workers/test-runner.js');

  worker.addEventListener('error', (ev) => {
    worker.terminate();
    reject(new Error(ev.message));
  });

  worker.addEventListener('message', (ev) => {
    worker.terminate();
    resolve(ev.data);
  });

  worker.postMessage({ code, tests });
});

export default createTestRunner;