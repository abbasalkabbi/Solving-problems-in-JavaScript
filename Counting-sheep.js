// node Counting-sheep.js
function countSheeps(arrayOfSheep){
    var arr=arrayOfSheep;
    count=0;
    if(arr != null || arr != undefined){
        arr.map(x=>{
            if(x===true){
                count++
            }
        }) 
    }
    return count;
}
console.log(countSheeps([true,true,false,true]))
console.log(countSheeps([]))
console.log(countSheeps())
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))