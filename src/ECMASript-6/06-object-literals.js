//enahced object literals
let uId = 4855941

function newUser(user, age, country){ //Al regresar el parametro directo, va usar el parametro como si fuera una variable como de nombre, y el valor que este en ese parametro (el argumento), 
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("Ivan", 21, "Peru"))