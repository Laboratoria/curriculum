const listeners = {};
const data = {};


const notify = (path) => {
  const [coll, slug] = path.split('/');

  (listeners[path] || []).forEach(fn => fn(data[path]));

  if (slug) {
    (listeners[coll] || []).forEach(fn => fn(data[coll]));
  }
};


const updateData = (path, val) => {
  const [coll, slug] = path.split('/');

  data[path] = val;

  if (slug && data[coll]) {
    data[coll] = data[coll].filter(item => item.slug !== slug).concat(val);
  }
};


export const unsubscribe = (path, callback) => {
  listeners[path] = (listeners[path] || []).filter(fn => fn !== callback);
};


export const subscribe = (path, callback) => {
  // if we already have data we invoke callback
  if (data[path]) {
    setTimeout(() => callback(data[path]));
  } else {
    fetch(`/data/${path}.json`)
      .then(resp => resp.json())
      .catch(err => err)
      .then((json) => {
        updateData(path, json);
        callback(json);
      });
  }

  if (listeners[path]) {
    listeners[path].push(callback);
  } else {
    listeners[path] = [callback];
  }

  return () => unsubscribe(path, callback);
};


const watch = () => {
  const ws = new WebSocket('ws://127.0.0.1:8080/');

  const onError = (ev) => {
    console.error('WebSocket error', ev);
  };

  const onClose = (ev) => {
    console.log('WebSocket closed', ev);
  };

  const onMessage = (ev) => {
    const { path, data: value } = JSON.parse(ev.data);
    updateData(path, value);
    notify(path);
  };

  ws.addEventListener('error', onError);
  ws.addEventListener('close', onClose);
  ws.addEventListener('message', onMessage);
};


// If in dev env, we start watching for changes in projects and topics
if (import.meta.env.NODE_ENV === 'development') {
  watch();
}

// eslint-disable-next-line
export default { subscribe, unsubscribe };