const parse = (str) => {
 const fs = require('fs');
 const path = require('path');
 const filePath = path.join(__dirname, str);
 console.log(filePath)
 const buffer = fs.readFileSync(filePath , {
   encoding: 'utf8'
 });
   return buffer.indexOf('.reverse()')
}
module.exports = parse