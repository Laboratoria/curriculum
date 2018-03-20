export const actionTypes = {
  FILTER_TEXT_CHANGED: 'FILTER_TEXT_CHANGED',
  IN_STOCK_ONLY_CHANGED: 'IN_STOCK_ONLY_CHANGED'
};

export const filterTextChanged = text => ({
  type: actionTypes.FILTER_TEXT_CHANGED,
  text
});

export const inStockOnlyChanged = value => ({
  type: actionTypes.IN_STOCK_ONLY_CHANGED,
  value
});
