const base  = [[0,1],[1,1]]
const unit  = [[1],[1]]
const moder = 100000

const Mmap  = {}
const Fmap  = {}

Fmap[0] = base
Fmap[1] = base

const fastMod = (num,moder) => {
  if(num in Mmap){
     return Mmap[num]
  }
  else{
    var result = 0
    for(var i=0,mask=1;i<31;i++,mask<<=1){
      if(num&mask){
         result+=mask%moder
      }
    }
    result%=moder
    Mmap[num] = result
    return Mmap[num]
  }
}

const matrixMultiplication = (a,b) => {
  return a.map(function(row){
      return row.map(function(_,i){
          return row.reduce(function(sum,cell,j){
              return fastMod(sum+cell*b[j][i],moder)
          },0);
      });
  });
}

const fibonacci = (n) => {
  if(n in Fmap){
    return Fmap[n];
  }
  else{
    Fmap[n] = n%2 ===0
            ? matrixMultiplication(fibonacci(n/2),fibonacci(n/2))
            : matrixMultiplication(base,fibonacci(n-1))
    return Fmap[n]
  }
}

console.time('fastPower')
console.log(fibonacci(1<<31-1)[1][1])
console.timeEnd('fastPower')

