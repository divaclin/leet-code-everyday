/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
  let start = 0
  let end = s.length
  let result = []
  for(let i=0;i<s.length;i++){
      if(s[i]==='I'){
          result.push(start)
          start++
      }
      if(s[i]==='D'){
          result.push(end)
          end--
      }
  }
  result.push(start)
  return result
};