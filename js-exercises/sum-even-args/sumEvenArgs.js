const sumEvenArgs = (...args) => {
  
  let sum=0;
  if(args.length==0){
    return 0;
  }
  args.filter((n)=>{
    if(n%2==0){
      sum+=n;
    }
  })
  return sum;
};

export { sumEvenArgs };
