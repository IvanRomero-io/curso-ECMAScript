const anotherFuntion = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!')
        } else{
            reject('No funciono!')
        }
    } )
}

anotherFuntion()
    .then(response => console.log(response))
    .catch(err => console.log(err))


//Jon mircha

function cuadradoPromise(value){ //Iniciamos la funcion
    if(typeof value !== "number"){
        return Promise.reject(`Error, el valor " ${value} " no es un numero`)
    } //Si no manda el numero, se va al la promesa se va al reject

    return new Promise( (resolve, reject) => { //Creamos la promesa con los dos parametros tipicos, resolve y reject
        setTimeout(() => { // seteamos un tiempo en el que se va a ejecutar.
           resolve({ //El resolve es cada que una promesa sea ejecutada como verdadera, aca creamos una clase.
            value,
            result: value * value
           })
        // reject()
        }, 0 | Math.random() * 1000) //tiempo en el que se va a ejecutar
    })
   
}

cuadradoPromise(0)
    .then(obj => {
        //console.log(obj)
        console.log('Inicio Promise')
        console.log(`promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(1)
    })
    .then(obj => {
        console.log('Segundo Promise')
        console.log(`promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(2)
    }).then(obj => {
        console.log('Tercer Promise')
        console.log(`promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(3)
    }).then(obj => {
        console.log('Cuarto Promise')
        console.log(`promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise("4") // Aca se exploto el codigo y lo mando al reject
    }).then(obj => {
        console.log('Quinto Promise')
        console.log(`promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(5)
    }).then(obj => {
        console.log('Sexto Promise')
        console.log(`promise: ${obj.value}, ${obj.result}`)
        console.log('Final del promise')
    })
    .catch(err => console.error(err));