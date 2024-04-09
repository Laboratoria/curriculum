const parseJson = (str) => {
  try {
    return JSON.parse(str);
  } catch (err) {
    return err;
  }
};

export default parseJson;
