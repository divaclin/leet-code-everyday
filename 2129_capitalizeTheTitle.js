/**
 * @param {string} title
 * @return {string}
 */
 var capitalizeTitle = function(title) {
  return title.split(' ').map(words => {
      let newWords = words.toLowerCase()
      if(newWords.length>2){
          newWords = newWords[0].toUpperCase()+newWords.substring(1)
      }
      return newWords
  })
  .join(' ')
};