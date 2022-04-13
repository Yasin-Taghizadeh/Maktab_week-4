// Find correct name and family

let myArray = [{ name: 'yasin', family: 'taghizadeh' }, { name: 'abbasi', family: 'bavadi' }, { name: 'amir ali', family: 'nav' }]

function list(myArray) {

    let startWith = 'a';
    let endsWith = 'i'

    let result = myArray.map(function (value) {

        if (startWith === value.name[0] && endsWith === value.name[value.name.length - 1]) {
            console.log(value)
        }
    })


}
list(myArray)