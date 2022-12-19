// node Convert-number-to-reversed-array.js

function cntra(num){
    arr=[]
    num.toString().split("").forEach(e => arr.unshift(parseInt(e)));
    return arr
}
console.log(cntra(1234))