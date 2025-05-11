// Reverse a String
// Write a function that reverses a string using JavaScript.


function reverseStr(str) {
    let reversedStr = str.split("").reverse().join("")
    return reversedStr
}

console.log(reverseStr("Hello"))