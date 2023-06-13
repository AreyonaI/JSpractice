let nums=[2.53,4,6,8,10]
let sum=0

function addList(nums,sum){
  for (let i = 0; i < nums.length; i++ ){
  sum += nums[i];
  }
  return (sum);
}

console.log(addList(nums,sum));

/* new waycd
function addList(...numbers){
  if(numbers.length === 0){
    return 0;
  }

  let sum=0;

  for (let i = 0; i < numbers.length; i++ ){
  sum += numbers[i];
  }
  return (sum);
}

7\
console.log(addList(1,5,2,4,-2));*/