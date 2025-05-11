function Count(count) {
    return new Promise((resolve, reject) => {
        console.log(`Getting Data ${count}`)
        setTimeout(() => {
            console.log(`Data${count}`)
            resolve(200)
        }, 1000)
    })
}

Count(1).then(() => {
    return Count(2)
}).then(() => {
    return Count(3)
}).then(() => {
    return Count(4)
}).then(() => {
    return Count(5)
})