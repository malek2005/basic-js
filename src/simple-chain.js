const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
    },
  addLink( value ) {
    this.chain.push("" + value);
    return this;
    },
  removeLink( position ) {
    if (
      position < 1 ||
      position > this.chain.length ||
      typeof position != "number"
        ) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }
    if (position === this.chain.length) this.chain.pop();
      else
        this.chain = this.chain
          .slice(0, position - 1)
          .concat(this.chain.slice(position));
        return this;
},
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = "";
      for (let i = 0; i < this.chain.length; i++) {
        if (i === 0) {
          str += `( ${this.chain[i]} )`;
        } else {
          str += `~~( ${this.chain[i]} )`;
        }
        }
        this.chain = [];
        return str;
    
  }
};

module.exports = {
  chainMaker
};
