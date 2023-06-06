/*expression */
const maxOfThree = function (x, y, z) {
  if (x >= y && x>= z) {
    return x;
  } 
  else if(y>=x && x>= z){
    return y;
  }
  else {
    return z;
  }
} 
  console.log(maxOfThree(22, -81, -12));




/*declaration*/ 
function isCharAVowel(v){
    if (v=="a"||v=="e"||v=="i"||v=="o"||v=="u"){
      return true;
    }
    else{
      return false;
    }
  }
  
  console.log(isCharAVowel("o"));
  
  let a=[2,4,5];
  let sum=0;
  
  const sumArray= function(a){
    for (let i = 0; i < a.length; i++ ){
    sum+= a[i];
    }
    return (sum);
  }
  console.log(sumArray(a));


  function multiplyArray(a,b,c){
    return (a*b*c);
  }
  console.log(multiplyArray(2,5,4));


 function reverseString(x){
    let str="";
    for (let i = x.length-1; i >=0 ; i-- ){
        str+= x[i];
        }
    return str;
 }
 console.log(reverseString("hello"));

