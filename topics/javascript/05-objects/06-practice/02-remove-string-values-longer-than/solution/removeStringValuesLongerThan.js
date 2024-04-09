const removeStringValuesLongerThan = (num, obj) => Object.keys(obj).reduce(
  (memo, key) => (
    (obj[key].length > num)
      ? memo
      : { ...memo, [key]: obj[key] }
  ),
  {},
);


export default removeStringValuesLongerThan;
