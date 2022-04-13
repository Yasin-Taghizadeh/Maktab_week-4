let str = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
has been the industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type specimen book. It has survived
not only five centuries, but also the leap into electronic typesetting, remaining essentially
unchanged. It was popular in the 1960s with the release of let sheets containing
2 Lorem Ipsum passages, and more recently with desktop publishing software like Ald
PageMaker including versions of Lorem Ipsum.`



let myArray = str.split(' ');

let word = 'Lorem'


b =[];

  let result =  myArray.map(function(value , index) {
        
      if (value === word) {
            console.log(index)

            b.push(index)

            
      }
    }) 
    
    console.log(b)

