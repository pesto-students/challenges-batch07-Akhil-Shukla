function sumFibs(num) {
  let n1=0 , n2=1 , nextTerm;
  let sum_odd=0;
  if(!num){
    return false;
  }
  
  for(let i=0; i<=num;i++){
    
    if(!(n1%2==0) && n1<=num){
      sum_odd+=n1;
    }else{
      
    }
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
  }
  
  return sum_odd;
  //
}

function cacheFunction(sumFibs) {
  var cache={};
  var result= (n) => {
    if(n in cache){
      return cache[n];
    }else{
      cache[n.toString()]=sumFibs(n);
    }
    return cache[n];
  }

  return result;

}

export { sumFibs, cacheFunction };
