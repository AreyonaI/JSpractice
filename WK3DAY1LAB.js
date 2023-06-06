let nums=[2.53,4,6,8,10]
let sum=0

function addList(nums,sum){
  for (let i = 0; i < nums.length; i++ ){
  sum += nums[i];
  }
  return (sum);
}

console.log(addList(nums,sum));