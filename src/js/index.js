// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

//- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2, 3, 4, 5];

numbers.map((number, index) => console.log(number * index));

//console.log(numbers)

//- Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

const sumNumberIndex = numbers => {
  numbers.forEach((number, index) => console.log(number / (index + 2)));
};

sumNumberIndex([1, 2, 3, 4, 5]);

//- Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const arrayWords = wordsMayus => {
  const result = wordsMayus.map(word => word.toUpperCase());
  console.log(result);
};

arrayWords(['hola', 'adios', 'perro', 'gato']);

// - Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const newArrayWords = (words, letter) => {
  const result = words.filter(word => word.startsWith(letter));

  if (result.length === 0) {
    console.log(`Ninguna palabra coincide.`);
  } else {
    console.log(result);
  }
};

newArrayWords(['hola', 'adios', 'perro', 'gato'], 'a');

// - Añade a la función anterior lo necesario para que funcione independientemente de mayusculas o minúsculas.

const newArrayWords2 = (words, letter) => {
  const result = words.filter(word => word.startsWith(letter));

  if (result.length === 0) {
    console.log(`Ninguna palabra coincide.`);
  } else {
    console.log(result);
  }
};

newArrayWords2(['hola', 'adios', 'perro', 'gato'], 'a');

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const arrayAdittion = numbers => {
  const total = numbers.reduce((total, number) => total + number);
  console.log(total);
};

arrayAdittion([1, 2, 3, 4, 5]);

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

const arrayOfNumbers = number => {
  const result = number.map(number =>
    console.log(`Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(number, 3)}`)
  );
};

arrayOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const word = 'ordenador';

const result = word.split('').reduce((acc, letter) => {
  if ('aeiou'.includes(letter)) return acc + letter.toUpperCase();
  else return acc + letter;
}, '');

console.log(result);

// - Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const arrayOfTenNumbers = numbers => {
  const randomnumber = Math.ceil(Math.random() * 10);
  const arrayResult = numbers.map(number => {
    return number * randomnumber;
  });
  const evens = arrayResult.filter(number => number % 2 === 0);
  const odds = arrayResult.filter(number => number % 2 !== 0);

  console.log(numbers, evens, odds);
};

arrayOfTenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']. Si te quedas atascado puedes investigar la función flatMap() y flat()

const printFirstAndLastLetter = words => {
  const firstAndLastLetter = words.flatMap(word => {
    return [word.charAt(0).toUpperCase(), word.charAt(word.length - 1).toUpperCase()];
  });
  console.log(firstAndLastLetter);
};
printFirstAndLastLetter(['hola', 'adios', 'gato', 'perro', 'casa']);

// - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const tenNumbersArray = numbers => {
  const result = numbers.some(number => number >= 5);
  console.log(result);
};

tenNumbersArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

// - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

// - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
const user = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];

const undetThirhty = data => {
  const userUnderThirty = data.filter(user => {
    return user.data < 30;
  });

  console.log(users);
};

// - Crea una función que reciba un array relleno con números y te diga si todos son pares o no.

// - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

const orderWords = words => {
  const order = words.sort((a, b) => a.length - b.length);
  console.log(order);
};

orderWords(['hola', 'adios', 'perrotes', 'nuercielago', 'dos']);

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight)

// ## Retos!!

// - Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

// - Utilizando el array que te dejo a continuación resuelve estos dos retos.

//   - Crea una función que reciba un criterio de ordenación y ordene el array en base a ese criterio. Puede ser el nombre, el apellido o la edad.

//   - Crea una función que reciba un id de usuario y borre ese usuario del array.

//     const users = [
//     {
//     id: "user001",
//     name: "Juan",
//     surname: "Pérez",
//     age: 30
//     },
//     {
//     id: "user002",
//     name: "María",
//     surname: "González",
//     age: 25
//     },
//     {
//     id: "user003",
//     name: "Pedro",
//     surname: "Sánchez",
//     age: 35
//     },
//     {
//     id: "user004",
//     name: "Ana",
//     surname: "Martínez",
//     age: 28
//     },
//     {
//     id: "user005",
//     name: "Luis",
//     surname: "López",
//     age: 40
//     }
//     ];

console.log('-----------------APUNTES----------------');
const numbersArray = [1, 2, 3, 4, 5];
const names = ['César', 'Ángel', 'Laura', 'Carlos', 'Adrian'];

//numbers.sort((a, b) => a.localeCompare(b));

console.log(names);

//->a.localeCompare(b) ó b.localeCompare(a)-> solo sirve para Strings
//a-b para numeros o b-a(para ordenarlos al reves)

const numbersArrayB = [1, 2, 3, 4, 5];

const total = numbers.reduce((total, number) => (total += number));
console.log(total);

console.log('-----------------APUNTES----------------');
