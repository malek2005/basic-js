const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  } else if (arr.length === 0) {
    return arr;
  };
  let newA = arr.map(i => i)

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

  return newA;
}

module.exports = {
  transform
};
