// Divide the strings into sections in number

const str = 'ababababababab';

let myArray = str.split('')
let numbers = 2;
let answer = [];


    for (let i = 0; i <= myArray.length; i++) {

       answer.push(myArray.splice(0, numbers).join(''))
    }

    console.log(answer)



