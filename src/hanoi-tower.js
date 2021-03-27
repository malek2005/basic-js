const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {
    turns: 0,
    seconds: 0
  }
  let newTurns = Math.pow(2, disksNumber) - 1

  let TurnsPerSec = turnsSpeed / 3600
  let newSecond = Math.floor(newTurns / turnsSpeed * 3600)



  result.turns = Number(newTurns)
  result.seconds = Number(newSecond)
  return result
};