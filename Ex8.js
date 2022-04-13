
function brArray (myArray) {

if(myArray.length <=1) {
    return myArray
}

let middle = Math.floor(myArray.length /2);
  
 let leftHalf = brArray (myArray.slice(0,middle)) ;

  
 
 let rightHalf = brArray (myArray.slice(middle)) ;

 function mergeArray (leftHalf,rightHalf){
    let result = [];
    let i = 0;
    let j = 0;
    
    while(i < leftHalf.length && j < rightHalf.length){
     if(leftHalf[i] < rightHalf[j]){
         result.push(leftHalf[i])
         i++;
     } else {
         result.push(rightHalf[j])
         j++;
     }
    }
   while(i < leftHalf.length){
       result.push(leftHalf[i])
       i++;
   }
   while(j < rightHalf.length){
       result.push(rightHalf[j])
       j++;
   }
   
   return result
 }
 return mergeArray (leftHalf,rightHalf)

}
console.log(brArray([5,2,4,6]))

