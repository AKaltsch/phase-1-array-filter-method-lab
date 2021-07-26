// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching(arr, name) {
//     name = name.toUpperCase()
//     return arr.filter( function(x) {return x.toUpperCase() === name})
// }

// function fuzzyMatch(arr, str) {
//     return arr.filter(el => el.startsWith(str))
// }

// function matchName(arr, string) {
//     return arr.filter(el => el.name === string)
// }

function findMatching(array, string) {
    string  = string.toLowerCase()
    return array.filter(name => name.toLowerCase() === string)
}

function fuzzyMatch(array, str) {
    return array.filter(name => name.startsWith(str))
}

function matchName(arr, str) {
    return arr.filter(el => el.name === str)
}
































