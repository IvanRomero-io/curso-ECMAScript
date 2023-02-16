const fnAync = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Async!!'), 1000)
        : reject(new Error('Error!'))
    })
}

const anotherFn = async () => {
    const something = await fnAync()
    console.log(something)
    console.log('Hello!')
}

console.log('Before')
anotherFn()
console.log('After')