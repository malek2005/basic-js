 const CustomError = require("../extensions/custom-error");


    module.exports = class DepthCalculator {
      calculateDepth(arr) {
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
      };
  };