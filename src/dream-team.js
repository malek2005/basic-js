const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {
    let result = [];
    if (Array.isArray(team)){
    team.forEach (item => {
        if (typeof item == 'string'){
            item = item.trim();
            if (/^[A-Za-z]{1}/.test(item[0])) {
                result.push(item[0].toUpperCase()); 
            }
        }
    });
    }
 else{
     return false;
 }
 return result.sort().join('');
};