function getKeyByValue(object, value) { 
  return Object.keys(object).find(key => object[key] === value); 
} 

function duplicateLetters(str){
	let obj1=new Object; 
	let alist=new Array; 
	let lenghtofstr=str.length; 
	for(var i=0;i<str.length;i++){
		if(alist.includes(str[i])==true || alist.includes(str[i].toLowerCase())==true){
		obj1[str[i].toLowerCase()]++;
		}
		else if(alist.includes(str[i])==false){
			alist.push(str[i]);obj1[str[i]]=1;
		}
	}
	var maxValue=Math.max.apply(null,Object.values(obj1));
  console.log(maxValue);
  if(maxValue==1){
    return false;
  }else{
    return maxValue;
  }
}

export {
  duplicateLetters,
};
