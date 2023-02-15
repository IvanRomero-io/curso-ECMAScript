class User {}

// const newUser = new User()

class user{
    //metodos
    greeting(){
        return 'Hello'
    }
}

const gndx = new user()

console.log(gndx.greeting())

const bebeloper = new user()

console.log(bebeloper.greeting())

//Constructor class

class user{
    //constructor
    constructor(){
        console.log('Nuevo Usuario')
    }

    greeting(){
        return 'Hello'
    }
}

const david = new user()


//this

class user{
    constructor(name){
        this.name = name
    }
    //Metodos
    speak(){
        return 'hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user('Ana')

console.log(ana.greeting())

//Stters and getters

class user{
    //constructor
    constructor(name, age){
        this.name = name
        this.age = age
    }
    //metodos
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }

    get uAge(){
        return this.age
    }

    set uAge(n){
        this.age = n
    }
}

const ivanDev = new user('Ivan Romero', 21)

console.log(ivanDev.uAge) //Por una extraña razon, asi es la unica manera que me devuelva la edad cuando declare una variable a una clase, osea sin parentesis
console.log(ivanDev.uAge = 26) //Con esta le puedes volver a "setear" el valor a la clase de la variable que creaste
console.log(ivanDev.uAge) //Y aca podemos ver que conservo el valor que le acabas de setear!!!