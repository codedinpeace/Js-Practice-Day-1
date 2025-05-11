// Debounce Function
// Create a debounce() function that delays function execution by a given delay.


// Callbacks

function CountDown(count, nextCount) {
    console.log(`Getting Data${count}.....`)
    setTimeout(() => {
        console.log(`Data${count}`)

        if (nextCount) {
            nextCount()
        }
    }, 1000)
}

CountDown(1, () => {
    return CountDown(2, () => {
        return CountDown(3, () => {
            return CountDown(4, () => {
                return CountDown(5)
            })
        })
    })
})



