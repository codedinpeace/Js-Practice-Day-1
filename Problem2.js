// Palindrome Checker
// Write a function to check if a given string is a palindrome.

function checkPalindrom(str) {
    let check = str.split("").reverse().join("")
    if (check === str) {
        console.log(`${str} is a palindrome`)
    }

    else {
        console.log(`${str} is not a palindrome`)
    }

}

console.log(checkPalindrom("madam"))
