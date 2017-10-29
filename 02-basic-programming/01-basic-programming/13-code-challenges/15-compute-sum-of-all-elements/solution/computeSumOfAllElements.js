function computeSumOfAllElements(arr) {
  // your code here
  if (arr.length == 0)
  	return 0;

  var sum = 0; 
  for (var i = 0; i < arr.length; i++) {
	 if (typeof arr[i] === 'number') {
	   sum += arr[i];	 
	 } 	
  }  
  return sum;
}
module.exports = computeSumOfAllElements;
 