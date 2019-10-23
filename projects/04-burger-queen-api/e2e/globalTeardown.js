const kill = require('tree-kill');

module.exports = () => new Promise((resolve) => {
  if (!global.__e2e.childProcessPid) {
    return resolve();
  }

  kill(global.__e2e.childProcessPid, 'SIGKILL', resolve);
  global.__e2e.childProcessPid = null;
});
