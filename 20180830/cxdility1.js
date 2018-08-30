//cxdility 1
//given n bulbs and sequenance of n-th bulb switch
//find total number of successive bulbs shine


const check = (element,index) => {
    return element-1===index
}

//bulbs []
function response(bulbs){
    var result = 0
    var bucket = []
    
    for(var i=0;i<bulbs.length;i++){
        bucket[bulbs[i]-1] = bulbs[i]
        if(result===0){
           result+= bucket.every(check) ? 1 : 0    
        }
        else{
           result+= bucket[bulbs[i]-2] === bulbs[i]-1
                    ? 1
                    : 0
        }
    }
    return result
}

//e.g. response([2,3,1,4,5]) = 3
