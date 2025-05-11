// Sum of Array Elements
// Use reduce() to sum all values in an array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let totalNum = arr.reduce((total, each) => {
    return total = total + each
}, 0)

console.log(totalNum)