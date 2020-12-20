/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let length = 0
    for(let head = 0; head < s.length; head++){
        let substr = s[head]
        let map = {
            [s[head]]:true
        }
        for(let tail = head+1; tail < s.length; tail++){
            if(map[s[tail]]){
                break
            }
            else{
                substr += s[tail]
                map[s[tail]] = true
            }
        }

        if(substr.length > length){
            length = substr.length
        }
    }
    return length
};