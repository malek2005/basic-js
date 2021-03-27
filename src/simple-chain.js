const CustomError = require("../extensions/custom-error");
const chainMaker = {
  newArr: [],
  getLength() {
      return this.newArr.length;
  },
  addLink(value) {
      this.newArr.push("" + value);
      return this;
  },
  removeLink(position) {
      if (
          position < 1 ||
          position > this.newArr.length ||
          typeof position != "number"
      ) {
          this.newArr = [];
          throw new Error();
      }
      if (position === this.newArr.length) this.newArr.pop();
      else
          this.newArr = this.newArr
              .slice(0, position - 1)
              .concat(this.newArr.slice(position));
      return this;
  },
  reverseChain() {
      this.newArr.reverse();
      return this;
  },
  finishChain() {
      let str = "";
      for (let i = 0; i < this.newArr.length; i++) {
          if (i === 0) {
              str += `( ${this.newArr[i]} )`;
          } else {
              str += `~~( ${this.newArr[i]} )`;
          }
      }
      this.newArr = [];
      return str;
  }
};

module.exports = chainMaker;