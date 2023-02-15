//aca hay una nueva funcion llamada st funciona parecido a array pero tiene metodos diferentes
const list = new Set()

list.add('item 1')
list.add('item 2').add('item 3').add('item 4').add('item 2') //Se pueden agregar como un push de esta manera, y si los elementos son iguales, no los añade, porque ya hay un elemento igual

console.log(list)

// Metodos utiles de Set:

// add
// has
// delete
// size

// const set = new Set();
// set.add('item 1');                  	// Set ['item 1']
// set.add('item 2').add('item 3'); // Set ['item 1','item 2','item 3']

// set.has('item 2');                 // true

// set.delete('item 1');             // Set ['item 2','item 3', 1] 
                   
// set.size();     