//Convert from base to another base

let convert = function (number, m, n) {

    return parseInt(number, m).toString(n)
}
console.log(convert(78, 10, 24))