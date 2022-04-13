let str = 'b';

let myArray = str.split('');

function CapWord (myArray){

    let result = myArray.map(value => value.toUpperCase())
    return result
}console.log(CapWord(myArray))