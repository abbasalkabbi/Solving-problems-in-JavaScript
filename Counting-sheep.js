// node Counting-sheep.js
function count_sheep(arr){
    count=0;
    arr.map(x=>{
        if(x===true){
            count++
        }
    }) 
    return arr.isArray();
}
console.log(count_sheep([true,true,false,true]))