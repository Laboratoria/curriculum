export default function createStore() {

  let data = {};

  return {
    get  : (key) => data[key],
    set  : (key, value) => data[key] = value,
    keys : () => Object.keys(data),
    clear: () => data = {}
  };
};
