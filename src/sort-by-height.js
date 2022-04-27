const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr1.push(i);
    } else {
      arr2.push(arr[i]);
    }
  }
  arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    arr2.splice(arr1[i], 0, -1);
  }
  return arr2;
}

module.exports = {
  sortByHeight
};
