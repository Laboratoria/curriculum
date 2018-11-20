const kill = require('tree-kill');
const { cleanUp } = require('./globalSetup');


module.exports = () => new Promise((resolve, reject) => {
  if (!global.__e2e.childProcessPid) {
    return resolve();
  }

  cleanUp()
    .then(() => {
      kill(global.__e2e.childProcessPid, 'SIGKILL', resolve);
      global.__e2e.childProcessPid = null;
    })
    .catch(() => {
      kill(global.__e2e.childProcessPid, 'SIGKILL', reject);
      global.__e2e.childProcessPid = null;
    });
});
