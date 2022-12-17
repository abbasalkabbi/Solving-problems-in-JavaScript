// node sum-of-positive.js

function sum_of_positive(arr){
    var result=0;
    for (let i =0; i < arr.length ; i++ ){
        arr[i]>=0?result+=arr[i]:result=result
    }
    return result;
}
// Test
console.log(sum_of_positive([1,1,2,3,55,66]))
console.log(sum_of_positive([1,1,2,3,55,66]))
console.log(sum_of_positive([-1,-1,-2,-3,-55]))
