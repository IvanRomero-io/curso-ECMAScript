const users = { //Aca creamos un objeto, con diferentes valores dentro de cada elemento
    gndx:{
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users.gndx.country) //Con los puntos podemos acceder a las llaves dentro de un propoio objeto para enseñar su valor

console.log(users.gndx.age) //Devuelve undefined porque no existe, obviamente si no estan declarados y inicializados en lel objeto no va a mostrar nada

console.log(users.bebeloper.country) //Devuelve un error en la consola
console.log(users?.bebeloper?.country) //Regresa undefinded porque no esxiste, y aca estas preguntando