




let shift = 3;

function inputCipher (text){
    let str = text
    
let inputArray = str.split('');

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


   let runText = "", p =""
    for (x in inputArray){
        if (shift > 0){
         p = alphabet[(alphabet.indexOf(inputArray[x]) + shift) % alphabet.length]  
         
        } else{
            p = alphabet[(alphabet.indexOf(inputArray[x]) + (26 - shift)) % alphabet.length] 
        }
        runText = runText + p;
    }
    
    return runText
}
console.log(inputCipher('abcdefg'))