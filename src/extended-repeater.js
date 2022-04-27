const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  let newString = String(str)
  let repeatTimesNum = options.repeatTimes
  if (repeatTimesNum == undefined) { repeatTimesNum = 1 }
  let separatorStr = options.separator
  if (!separatorStr) { separatorStr = '+' }
  let addition = String(options.addition)
  let additionRepeatTimesNum = options.additionRepeatTimes
  if (additionRepeatTimesNum == undefined) { additionRepeatTimesNum = 1 }
  let additionSeparatorStr = options.additionSeparator
  if (!additionSeparatorStr) { additionSeparatorStr = '|' }

  let newStr = ''

  let resultStr = ''

  if (addition) {
    let arr = []
    for (let i = 1; i <= additionRepeatTimesNum; i++) {
      arr.push(addition)
      arr.push(additionSeparatorStr)
    }
    arr.pop()
    newStr = arr.join('')
  }

  if (newString) {
    let strArr = []
    for (let j = 1; j <= repeatTimesNum; j++) {
      strArr.push(newString)
      if (newStr !== 'undefined') {
        strArr.push(newStr)
      }
      strArr.push(separatorStr)
    }
    strArr.pop()
    resultStr = strArr.join('')
  }

  return resultStr;
}

module.exports = {
  repeater
};
