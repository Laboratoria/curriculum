/* function getAllKeys(obj) {
  var keys = [];

  for(var prop in obj)
    keys.push(prop);

  return keys;
} */

function getAllKeys(obj) {
  return Object.keys(obj);
}

module.exports = getAllKeys;
