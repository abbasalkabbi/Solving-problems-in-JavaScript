// node countPositivesSumNegatives.js
/**
 * Given an array of integers.
 *Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
 *  If the input is an empty array or is null, return an empty array.
 *  Example
        For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
            you should return [10, -65].
 */
function countPositivesSumNegatives(input) {
    var p=0;
    var n=0;
    if(input === null || input.length === 0){
        return[]
    }
    else{
        for (let i =0; i < input.length ; i++ ){
            input[i]>0?p++:n+=input[i]
        }
        return [p,n];
    }
    
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
console.log(countPositivesSumNegatives([]))
