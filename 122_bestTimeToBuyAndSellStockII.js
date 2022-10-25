/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    const last = prices.length
    let accProfit = 0
    for(let i=0;i<last-1;i++){
        const buy = prices[i]
        let max = 0
        let j = i+1
        while(j<last){
            const sell = prices[j]
            const profit = sell-buy
            if(profit > max){
                max = profit
            }
            else{
                accProfit+=max
                i=j-1
                break
            }
            j++
        }

        if(j===last){
            accProfit+=max
            break
        }
    }

    return accProfit
};

// console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit([1,2,3,4,5]))
// console.log(maxProfit([7,6,4,3,1]))
// console.log(maxProfit([6,1,3,2,4,7]))
// console.log(maxProfit([2,1,4,5,2,9,7]))
