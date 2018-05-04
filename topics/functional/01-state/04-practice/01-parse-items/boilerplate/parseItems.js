const parseItems = (items) => {
  for (let i = 0; i < items.length; i++) {
    items[i] = parseInt(items[i]);
  }
  return items.sort();
};

module.exports = parseItems;
