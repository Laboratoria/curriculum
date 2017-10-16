function getLongestWordOfMixedElements(arr) {
  // your code here
  if (arr.length == 0)
  	return '';

  var max = 0;
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
	if (typeof arr[i] === 'string') {
		if ( arr[i].length > max) {
			max = arr[i].length;
			index = i;
		}
	} 	
  }  
  if (index == -1)
  	return '';
  return arr[index];
}
module.exports = getLongestWordOfMixedElements;
 