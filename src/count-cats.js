 const CustomError = require("../extensions/custom-error");

{module.exports = function countCats(backyard) {
  let count = 0;
 backyard.forEach(array => {
   array.forEach(item => {
     if (item === '^^') {
       count++;
     }
   });
  });
return count;
};
};
