/**
 * @param {number} n
 * @return {string}
 */
 var thousandSeparator = function(n) {
  const str = `${n}`
  let counter = 0
  let result = ''
  for(let i=str.length-1;i>=0;i--){
      result=str[i]+result
      counter++
      if(counter === 3 && i!==0){
          counter = 0
          result='.'+result
      }
  }
  return result
};