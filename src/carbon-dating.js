 const CustomError = require("../extensions/custom-error");
 const MODERN_ACTIVITY= 15; 
 const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleAct) {
    if(typeof sampleAct !== 'string') return false;
  let sampleAct1 = parseFloat(sampleAct);
 let time = (0.693 / HALF_LIFE_PERIOD);
 let activity = Math.log(MODERN_ACTIVITY / sampleAct1);
 if(sampleAct1 <= 0 || sampleAct1 > MODERN_ACTIVITY || isNaN(sampleAct1)) return false;
 return Math.ceil(activity/time);
};
  