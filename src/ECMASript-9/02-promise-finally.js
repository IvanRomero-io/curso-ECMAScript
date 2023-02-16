const anotherFuntion = () => {
    return new Promise((resolve, reject) => {
        if (true){
        setTimeout(() => { resolve('Hey!')}, 3000)   
        } else{
            reject('No funciono!')
        }
    } )
}

anotherFuntion()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Ha terminado')) //Finali sirve para ejecutarce en el final de una promesa