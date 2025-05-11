// Find Max/Min in Array
// Return the maximum and minimum value in an array without using Math.max() or min().

let maximum = -Infinity
let minimum = Infinity

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function FindMax(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i]
        }
    }

    return maximum
}

function FindMin(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    return sortedArr[0]
}

console.log(FindMax(array))
console.log(FindMin(array))