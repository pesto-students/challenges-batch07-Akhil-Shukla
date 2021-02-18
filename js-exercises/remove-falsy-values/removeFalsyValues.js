
function removeFalsyValues(array) {
  let tempArray=array.filter((n)=>{
    if(n=='' || n==false || n==null || n==undefined || n==0 || n==NaN){

    }else{
      return n
    }
  })
  return tempArray;

}

export {
  removeFalsyValues,
};
