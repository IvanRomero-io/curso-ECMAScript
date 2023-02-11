var lastName = 'david'
lastName = 'oscar' // Se reagsigno

console.log(lastName)

//Con let

let fruit = 'Apple'
fruit = 'Kiwi' // Se reagsigno tambien

console.log(fruit)

//Con const

const animal = 'Dog'
animal = 'Parrot' //No se puede reagsignar un valor y va a devolver un error

console.log(animal)


const fruits = () => {
    if(true){
        var fruit1 = 'Apple' //funcion scope
        let fruit2 = 'Kiwi' //block scope
        const fruit3 = 'Banana' //block scope
    }
    console.log(fruit1, fruit2, fruit3) //Como ves, la variables "var" se pueden acceder fuera del bloque, en cambio let y const no.
}

fruits()