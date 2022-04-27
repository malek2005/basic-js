const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let result = 0;
  const number = n.toString().split('');
  for (let i = 0; i < number.length; i++) {
    const middle = number.slice();
    middle.splice(i, 1);
    const final = +middle.join('');
    if (result < final) {
      result = final;
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
