//Esta funcion le vamos a asignar parametros, pero aca hay una particularidad, como puedes ver las variables tienen el parametro que vamos a mandar y ademas tienen un valor ya definido, que paso?, esto significa que si no le pasamos ningun parametro, se va asignar su valor ya pre-establesido
function newUser(name, age, country){
    var name = name || 'Oscar'
    var age = age || 34
    var country = country || 'Venezuela'
    console.log(name, age, country)
}
newUser()
newUser( 'jose', 28, 'Peru')    //Aca si le pasamos valores

//Ecma6
//Aca hay una manera mas corta de hacerlo y es creando el parametro pero asignandole ya un valor por defecto
function newAdmin(name = 'oscar', age = '34', country = 'CL'){
    console.log(name, age, country)
}

newAdmin()
newAdmin('Ana', 28, 'PE')

//Y aca con una arrow bar

const newAdmin = (name = 'oscar', age = '34', country = 'CL') => console.log(name, age, country)

newAdmin()
newAdmin('Ivan', 21, 'VE')