/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
  const isUpperCase = (char) => char === char.toUpperCase()
  const isLowerCase = (char) => char === char.toLowerCase()
  if(word.length === 0) {
      return false
  }
  if(word.length === 1) {
      return true
  }
  else if(isUpperCase(word[0])){
      const left = word.substring(1).split('')
      return left.every(isUpperCase) || left.every(isLowerCase)
  }
  else{
      const left = word.substring(1).split('')
      return left.every(isLowerCase)
  }
};