// Count Vowels
// Count the number of vowels in a string.


function CountVowels(str) {
    let vowels = "aeiouAEIOU"
    let count = 0;
    let vowelsArr = vowels.split("")

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowelsArr.length; j++) {
            if (str[i] === vowelsArr[j]) {
                count++
            }
        }
    }
    return count
}

console.log(CountVowels("aeiou"))

// let vowels = "aeiouAEIOU"

// let vowelsArr = vowels.split("")

// let eachChar = vowelsArr.forEach((a) => {
//     console.log(a)
// })

// console.log(eachChar)