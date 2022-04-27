const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(directly = true) {
    this.directly = directly;
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
    const messages = str.toUpperCase().split("");
    const keys = key.toUpperCase().split("");
    let a = 0;

    let result = messages.map((item) => {
      if (this.alphabet.includes(item)) {
        let i =
          (this.alphabet.indexOf(keys[a]) +
            this.alphabet.indexOf(item)) %
          this.alphabet.length;
        a = (a + 1) % keys.length;
        return this.alphabet[i];
      }
      return item;
    });
    return this.directly ? result.join("") : result.reverse().join("");
  }
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
    const messages = str.toString().toUpperCase().split("");
    const keys = key.toString().toUpperCase().split("");
    let a = 0;

    let result = messages.map((item) => {
      if (this.alphabet.includes(item)) {
        let i =
          this.alphabet.indexOf(item) - this.alphabet.indexOf(keys[a]);
        if (i < 0) i += this.alphabet.length;
        a = (a + 1) % keys.length;
        return this.alphabet[i];
      }
      return item;
    });
    return this.directly ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
