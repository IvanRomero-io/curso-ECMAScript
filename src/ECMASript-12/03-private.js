//En esta clase se van a usar las clases privadas, son clases que solo pueden ser añadidas dentro de la clase y se vuelven privadas cuando le añades una "#" al inicio de la funcion o nombre de la variables

class user{
    //constructor
    constructor(name, age){
        this.name = name
        this.age = age
    }
    //metodos
    #speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }

    get #uAge(){
        return this.age
    }

    set #uAge(n){
        this.age = n
    }
}

const ivanDev = new user('Ivan Romero', 21)

console.log(ivanDev)

console.log(ivanDev.uAge) //Por una extraña razon, asi es la unica manera que me devuelva la edad cuando declare una variable a una clase, osea sin parentesis
console.log(ivanDev.uAge = 26) //Con esta le puedes volver a "setear" el valor a la clase de la variable que creaste
console.log(ivanDev.uAge) //Y aca podemos ver que conservo el valor que le acabas de setear!!!