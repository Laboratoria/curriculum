function convertDoubleSpaceToSingle(str) {
  // your code here

  var parts = str.split ('  ');
  return parts.join (' ');
}

module.exports = convertDoubleSpaceToSingle;
 