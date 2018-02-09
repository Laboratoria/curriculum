module.exports = function coinConvert (usDollars) {
  var peruvianSoles = usDollars * 3.25;
  var mexicanPesos  = usDollars * 18;
  var chileanPesos  = usDollars * 660;
    
  return [peruvianSoles, mexicanPesos, chileanPesos];
};
