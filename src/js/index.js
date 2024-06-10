// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';


//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers=[1,2,3,4,5]

numbers.map((number,index)=>console.log(number*index))

//console.log(numbers)

//- Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

const arrayOfNumbers=[1,2,3,4,5]

arrayOfNumbers.map((number,index)=>console.log(number/index+2))

//- Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const arrayWords=['hola','adios','perro','gato']

arrayWords.map((word)=>console.log(arrayWords.toUpperCase()))