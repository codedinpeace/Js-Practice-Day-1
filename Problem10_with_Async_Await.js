function Count(count) {
    return new Promise((resolve, reject) => {
        console.log(`Getting Data ${count}`)
        setTimeout(() => {
            console.log(`Data${count}`)
            resolve(200)
        }, 1000)
    })
}


async function Data() {
    await Count(1)
    await Count(2)
    await Count(3)
    await Count(4)
    await Count(5)
}

Data()