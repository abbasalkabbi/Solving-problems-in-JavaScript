// node Your-order.js

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
function order(words){
    // ...
    const findnumber=words.match(/[1-9]/g)
    const arrayWords = words.split(' ');
    return arrayWords.sort((a,b)=>{
        return a.match(/\d/) - b.match(/\d/)
    }).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"))