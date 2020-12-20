/**
 * @param {string}
 * @return {number}
 */

const mapping = {
  I:1,
  V:5,
  X:10,
  L:50,
  C:100,
  D:500,
  M:1000
}

const substractMapping = {
  I:{
    V:4,
    X:9
  },
  X:{
    L:40,
    C:90
  },
  C:{
    D:400,
    M:900
  }
}

var romanToInt = function(s) {
    let result = 0
    for(let i=0;i<s.length;i++){
      const hasSubtract = substractMapping[s[i]] && i+1 < s.length && substractMapping[s[i]][s[i+1]] 
      if(hasSubtract){
        result+=substractMapping[s[i]][s[i+1]]
        i++
      }
      else{
        result+=mapping[s[i]]
      }
    }
    return result
};

// console.log(romanToInt('III'))
// console.log(romanToInt('IV'))
// console.log(romanToInt('IX'))
// console.log(romanToInt('LVIII'))
// console.log(romanToInt('MCMXCIV'))