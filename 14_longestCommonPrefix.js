/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let result = ''
  if(strs.length === 1){
    return strs[0]
  }
  strs.forEach((str, index) => {
      if(str.length === 0){
          return 
      }
      for(let i=0;i<str.length;i++){
          const prefix = str.substring(0,i+1)
          const hasPrefix = strs.every(str => str.substring(0, i+1) === prefix)
          if(hasPrefix && result.length < prefix.length){
              result = prefix
          }
      }            
  })
  return result
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix(["a"]))
// console.log(longestCommonPrefix(["reflower","flow","flight"]))

