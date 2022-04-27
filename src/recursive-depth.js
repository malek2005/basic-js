const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    
      if (!(arr instanceof Array)) {
        return 0;
    }
    let arrayMaxDepth = 0;
    for (let el of arr) {
        let arrayDepth = this.calculateDepth(el);
        if (arrayMaxDepth < arrayDepth) {
            arrayMaxDepth = arrayDepth;
        }
    }
    return arrayMaxDepth + 1;
  }
  }


module.exports = {
  DepthCalculator
};
