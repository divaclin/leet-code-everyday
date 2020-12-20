/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  
  const resetChanged = (counter) => {
    counter.m.isChanged = false
    counter.n.isChanged = false
  }
  const getMergedCurrent = (counter) => {
    return counter.m.current+counter.n.current
  }

  const setCounter = (counter,which) => {
    counter[which].current++
    counter[which].isChanged = true
  }
  
  const iterate = (counter) => {
    resetChanged(counter)
    const valueM = nums1[counter.m.current]
    const valueN = nums2[counter.n.current]
    switch(true){
      //edge case if counter.m.current + counter.n.current = mn
      case valueM === undefined && valueN === undefined:
        break
      case valueM === undefined:
        setCounter(counter,'n')
        break
      case valueN === undefined:
        setCounter(counter,'m')
        break
      case valueM > valueN:
        setCounter(counter,'n')
        break
      case valueM < valueN:
        setCounter(counter,'m')
        break
      case valueM === valueN:
        setCounter(counter,'n')
        setCounter(counter,'m')
        break
      default:
        break
    }
  } 

  const getMergedValue = (counter) => {
    return counter.m.isChanged 
        ? nums1[counter.m.current-1]
        : nums2[counter.n.current-1]
  }

  const mn = m+n
  const oddOperator = mn%2
  const medianPos = (mn+oddOperator)/2 -1
  
  let result = null
  let counter = {
    m:{current:0, isChanged:false},
    n:{current:0, isChanged:false}
  }
  

  while(getMergedCurrent(counter) <= medianPos){
    iterate(counter)
  }
  
  if(oddOperator === 0){
      //need to do again
      const value1 = getMergedValue(counter)
      iterate(counter)
      const value2 = getMergedValue(counter)
      result = (value1+value2)/2            
  }
  else{
    result = getMergedValue(counter)
  }

  return parseFloat(result).toFixed(5)
};
// console.log(findMedianSortedArrays([1,3],[2]))
// console.log(findMedianSortedArrays([1,2],[3,4]))
// console.log(findMedianSortedArrays([0,0],[0,0]))
// console.log(findMedianSortedArrays([],[1]))
// console.log(findMedianSortedArrays([2],[]))
// console.log(findMedianSortedArrays([1],[1]))
// console.log(findMedianSortedArrays([1,2],[-1,3]))
// console.log(findMedianSortedArrays([1,2],[1,2]))
