//C(N,K) with limit that can not exceed 10^6

global.map = new Map()
const binomialCoeff = (n,k) =>{
  var min = Math.min(k,n-k)
  var key = `${n},${min}`
  if(global.map.has(key)){
    return global.map.get(key)
  }
  else{
    if (k==0 || k==n){
        return 1;
    }
    global.map.set(key,binomialCoeff(n-1, k-1) + binomialCoeff(n-1, k))
    return global.map.get(key)
  }
}

global.map2 = new Map()
const factorial = (i) =>{
  if(i<=1){
    return 1
  }
  else{
    if(global.map2.has(i)){
      return global.map2.get(i)
    }
    else{
      global.map2.set(i,i*factorial(i-1))
      return global.map2.get(i)
    }  
  }
}
const inRange = (n,k,maxValue) =>{
  return k*(Math.log(n)-Math.log(k))<=Math.log(maxValue) && 0<=k&&k<=n
}
const binomialCoeff2 = (n,k) =>{
  if(inRange(n,k,1000000)){
    return factorial(n)/(factorial(k)*factorial(n-k))
  }
  else{
    return -1
  }
}

//多項式方法
console.time('A1')
console.log(binomialCoeff(40,20)) 
console.timeEnd('A1')

//階乘方法
console.time('A2')
console.log(binomialCoeff2(40,20))
console.timeEnd('A2')

//n小時 階乘方法比多項式快約2~3倍
//n大時 階乘方法算不出來
//原題有輸出結果不能超過10^6的限制 經過推演k(log n - log k) < 6 ....
/*
C(n,k) = n!/(n-k)!k!

n*n-1*...*n-k+1*n-k*n-k-1*...*1
________________________________
n-k*n-k-1*...*1  *  k*k-1*...*1

n^k       n*n-1*...*n-k+1 
___   <  __________________  < 10^6
K^k       k*k-1*k-2*...*1

k(log n - log k) < 6

有可能有個案會通過 待實測
*/
        
