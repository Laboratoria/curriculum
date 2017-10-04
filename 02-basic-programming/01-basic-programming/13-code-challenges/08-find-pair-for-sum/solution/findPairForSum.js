function findPairForSum(array, number)
{

  for (var i = 0;  i < array.length; i++) {
    for (var j = i+1;  j < array.length; j++) {
        
      if ( (array[i] + array [j]) == number )
        return [array[i] , array[j]];
    }    
  }
  return [];
}

module.exports = findPairForSum;
 