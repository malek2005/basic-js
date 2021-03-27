 const CustomError = require("../extensions/custom-error");
module.exports = function transform(a) {
    if (!Array.isArray(a)) {
      throw new Error('You shoud give me array, please :) ')
    } else if (a.length === 0) {
      return a
    };
    let newA = a.map(i => i)
  
    for (let i = 0; i < newA.length; i++) {
  
      switch (newA[i]) {
        case '--discard-next':
          if (i === newA.length - 1) {
            newA.splice(i, 1)
            break;
          }
          if (newA[i + 2] === '--double-prev' || newA[i + 2] === '--discard-prev') {
            newA.splice(i, 3)
            break;
          }
          newA.splice(i, 2)
          i--;
          break;
        case '--discard-prev':
          if (i === 0) {
            newA.splice(i, 1)
            break;
          }
          newA.splice(i - 1, 2)
          i--;
          break;
        case '--double-next':
          if (i === newA.length - 1) {
            newA.splice(i, 1)
            break;
          }
          newA.splice(i, 1, newA[i + 1])
          break;
        case '--double-prev':
          if (i === 0) {
            newA.splice(i, 1)
            break;
          }
          newA.splice(i, 1, newA[i - 1])
          break;
      }
    }
  
    return newA
  };