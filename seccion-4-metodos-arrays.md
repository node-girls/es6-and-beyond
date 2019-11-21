### Métodos de arrays (map, filter, reduce, etc).

Los arrays (`Array` o matrices) son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación. Ni la longitud o los tipos de los elementos del array son fijos.

El objeto `Array` de JavaScript es un objeto global que es usado en la construcción de arrays, que son objetos tipo lista de alto nivel.

El siguiente ejemplo crea un objeto `Array` con una matriz unidimensional de textos, la matriz unidimensional `animales` contiene cinco elementos.

```javascript
const animales = ['perro', 'gato', 'raton', 'ardilla', 'rinoceronte']

console.log(animales.length)
// 5

console.log(animales[3])
// ardilla

const ultimo = animales[animales.length - -1]
console.log(ultimo)
// rinoceronte
```


#### Métodos transformadores

Estos métodos modifican la matriz unidimensional:

#### `Array.prototype.pop()`
Elimina el último elemento de una matriz unidimensional y retorna este elemento.

#### `Array.prototype.push()`
Añade uno o más elementos al final de una matriz unidimensional y retorna la nueva longitud de una matriz unidimensional.

#### `Array.prototype.reverse()`
Invierte el orden de los elementos de una matriz unidimensional - el primero llega a ser el último y el último llega aser el primero.

#### `Array.prototype.sort()`
Ordena los elementos de una matriz unidimensional.

```javascript
console.log(animales.pop())
// rinoceronte
// animales => ['perro', 'gato', 'raton', 'ardilla']

animales.push('leon')
// 5
// animales => ['perro', 'gato', 'raton', 'ardilla', 'leon']

animales.reverse()
// ['leon', 'ardilla', 'raton', 'gato', 'perro']
```


#### Métodos accesores

Estos métodos no modifican una matriz unidimensional y retornan alguna representación de la matriz unidimensional.

#### `Array.prototype.join()`
Une todos los elementos de una matriz unidimensional en una cadena.

#### `Array.prototype.slice()`
Extrae una sección de una matriz unidimensional y devuelve una nueva matriz unidimensional.


```javascript
console.log(`Estos son los animales:, ${animales.join(', ')}.`)
// Estos son los animales:, leon, ardilla, raton, gato, perro.

animales.slice(0,2)
// [ 'leon', 'ardilla' ]

console.log(`Estos son los animales:, ${animales.slice(0,4).join(', ')} y ${animales[animales.length - 1]}.`)
// Estos son los animales:, leon, ardilla, raton, gato y perro.
```


#### Métodos de repetición

Varios métodos toman como argumentos funciones que son reinvocadas mientras se procesa la matriz unidimensional. Cuando estos métodos son invocados, la longitud `length` de la matriz unidimensional se muestrea y cualquier elemento añadido más allá de esta longitud desde el interior de la reinvocación no es visitado. Otros cambios a la matriz unidimensional (configuración del un valor o la eliminación de un elemento) puede afectar los resultados de la operacion si el método visita luego el elemento cambiado. el comportamiento específico de estos métodos en tales casos no está siempre bien definido y no debería confiarse sobre ello.


#### `Array.prototype.filter()`
Crea una nueva matriz unidimensional con todos los elementos de esta matriz unidimensional para los cuales la funcion de filtrado provista devuelve `true`.

```javascript
const newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
```

**Parameters**
* `callback`: Función que **comprueba cada elemento**  del array para ver si se cumple la condición. Retorna `true` si el elemento la cumple o en caso contrario retornará `false`. Acepta tres parámetros:
  - `currentValue`: El elemento actual del array que está siendo procesado.
  - `index` (opcional): El ídice del elemento actual del array que está siendo procesado
  - `array`: El array sobre el que se ha llamado `filter`.
* `thisArg` (opcional): Valor a utilizar como `this` cuando se ejecuta `callback`


```javascript
let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]

let greaterTen = numbers.filter(number => number > 10 ); // return implicito

console.log(greaterTen);
// [ 23, 12, 45, 78, 11, 10.1, 84 ]
```

```javascript
let students = [
  {
    name: 'Alvaro',
    score: 10,
  },
  {
    name: 'Daniel',
    score: 16,
  },
  {
    name: 'Alexys',
    score: 12,
  }
]

let approved = students.filter(student => student.score >= 11);

approved
// [ { name: 'Daniel', score: 16 }, { name: 'Alexys', score: 12 } ]
```

```javascript
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];


function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```



#### `Array.prototype.forEach()`
Invoca a una funcion por cada elemento en la matriz unidimensional.

#### `Array.prototype.map()`
Crea una nueva matriz unidimensional con los resultados de la invocación de una funcion provista sobre cda elemento en esta matriz unidimensional.

```javascript
const nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])
```

**Parameters**
* `callback`: Función que producirá un elemento del nuevo array, recibe tres argumentos:
  - `currentValue`: El elemento actual del array que se está procesando.
  - `index`: El índice del elemento actual dentro del array.
  - `array`: El array sobre el que se llama `map`.
* `thisArg` (opcional): Valor a utilizar como `this` cuando se ejecuta `callback`

```javascript
let numArray = [1,2,3,4,5,6,7,8,9,10]
let numArray2 = numArray.map(current => current*2)

console.log("numArray => ",  numArray)
// numArray =>  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log("numArray2 => ", numArray2)
// numArray2 =>  [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
```

```javascript
let orders = [
    {
        customer: {
            name: "Oscar Blancarte"
        },
        products: [
            {
                id: 1,
                name: "Banana"
            },{
                id: 2,
                name: "strawberry"
            }
        ]
    },{
        customer: {
            name: "Carlos Raygoza"
        },
        products: [
            {
                id: 3,
                name: "apple"
            },{
                id: 2,
                name: "strawberry"
            }
        ]
    },{
        customer: {
            name: "Andres Bedoya"
        },
        products: [
            {
                id: 4,
                name: "Watermelon"
            },{
                id: 2,
                name: "apple"
            },{
                id: 1,
                name: "Banana"
            }
        ]
    }
]

let simpleOrders = orders.map(order => {
    return order.products.map(product => {return {customer: order.customer.name, product: product.name}})
})

console.log("simpleOrders => ", simpleOrders)
// simpleOrders =>  [ 
//   [ { customer: 'Oscar Blancarte', product: 'Banana' },
//     { customer: 'Oscar Blancarte', product: 'strawberry' } 
//   ],
//   [ { customer: 'Carlos Raygoza', product: 'apple' },
//     { customer: 'Carlos Raygoza', product: 'strawberry' } 
//   ],
//   [ { customer: 'Andres Bedoya', product: 'Watermelon' },
//     { customer: 'Andres Bedoya', product: 'apple' },
//     { customer: 'Andres Bedoya', product: 'Banana' } 
//   ] ]
```


#### Nuevos métodos añadidos

#### `Array.prototype.reduce()` - ECMAScript 5.1 (ECMA-262)

```javascript
arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
```

**Parameters**
* `callback`: Función a ejecutar sobre cada elemento del array (excepto para el primero, si no se proporciona `valorInicial`), que recibe cuatro parámetros:
  - `acumulador`: El acumulador acumula el valor devuelto por la función callback. Es el valor acumulado devuelto en la última invocación de callback, o el `valorInicial`, si se proveyó. (Ver a continuación).
  - `valorActual`: El elemento actual que está siendo procesado en el array.
  - `indiceActual`: El índice del elemento actual que está siendo procesado en el array. Empieza desde el índice 0 si se provee `valorInicial`. En caso contrario, comienza desde el índice 1.
  - `indice`: (opcional).
  - `array` (opcional): El array sobre el cual se llamó el método `reduce()`.
* `valorInicial`: Un valor a usar como primer argumento en la primera llamada de la función `callback`. Si no se proporciona `valorInicial`, el primer elemento del array será utilizado y saltado. Llamando a `reduce()` sobre un array vacío sin un `valorInicial` lanzará un `TypeError`.

```javascript
const ciudades = [
  {
    pais: 'Venezuela',
    nombre: 'Maracaibo',
    habitantes: 1209000
  },
  {
    pais: 'Turquía',
    nombre: 'Denizli',
    habitantes: 850300
  },
  {
    pais: 'Italia',
    nombre: 'Siena',
    habitantes: 53700
  },
  {
    pais: 'Italia',
    nombre: 'Genova',
    habitantes: 583600
  },
  {
    pais: 'Brasil',
    nombre: 'Fortaleza',
    habitantes: 2400100
  }
];


const obtenerHabitantes = array => array.reduce((acumulador, { habitantes }) => acumulador + habitantes, 0)

const habitantesTotales = obtenerHabitantes(ciudades);
console.log(`Resultado ${habitantesTotales}`)
// Resultado: 5096700
```

1. Primera iteración: acumulador será 0 y habitantes será el valor de la propiedad habitantes en el objeto actual. El valor de habitantes será 1209000 porque es la primera iteración (la misma cosa que ciudades[0].habitantes). Pasamos acumulador a la siguiente iteración que será: 0 + 1209000
2. Segunda iteración: acumulador será 1209000 y habitantes será 850300 (ciudades[1].habitantes). Pasamos acumulador: 1209000 + 850300
3. ercera iteración: acumulador = 2059300; habitantes = 53700 (ciudades[2].habitantes). Pasamos acumulador: 2059300 + 53700
4. Cuarta iteración: acumulador = 2113000; habitantes = 583600 (ciudades[3].habitantes). Pasamos acumulador:
5. Quinta iteración: acumulador = 2696600; habitantes = 2400100 (ciudades[4].habitantes). Pasamos acumulador:
6. Final, no hay más elementos por iterar. Resultado: 5096700


#### `Array.prototype.find()` - ECMAScript 2015 (6th Edition, ECMA-262)

```javascript
arr.find(callback(element[, index[, array]])[, thisArg])
```

**Parameters**
* `callback`: Función que se ejecuta sobre cada valor en el array, tomando tres argumentos:
  - `element`: El elemento actual que se está procesando en el array.
  - `index`: (opcional) El índice del elemento actual que se está procesando en el array.
  - `array`: (opcional) El array desde el que se llama al método `find`.
* `thisArg`: (opcional) Objeto a usar como `this`cuando se ejecuta `callback`.

**Valor devuelto**  
El **valor** del **primer elemento** del array que cumple la función de prueba proporcionada; de lo contrario, devuelve `undefined`.

```javascript
const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

function esCereza(fruta) { 
    return fruta.nombre === 'cerezas';
}

console.log(inventario.find(esCereza));
// { nombre: 'cerezas', cantidad: 5 }
```  

#### `Array.prototype.includes()` - ECMAScript 2016 (ECMA-262)

```javascript
arr.includes(searchElement[, fromIndex])
```

**Parameters**
* `valueToFind`: El valor a buscar.
* `fromIndex`: (opcional) Posición en la matriz en la cuál se debe comenzar a buscar `valueToFind`; el primer caracter a buscar se encuentra en `fromIndex`. Un valor negativo inicia la búsqueda desde array.length + fromIndex en adelante. El valor por defecto es 0.

**Valor devuelto**  
El **valor** del **primer elemento** del array que cumple la función de prueba proporcionada; de lo contrario, devuelve `undefined`.

```javascript
var arr = ['a', 'b', 'c'];

arr.includes('c', 3);   // false
arr.includes('c', 100); // false
```

#### Mini reto

### [Go to Step 5 >>>>](https://github.com/node-girls/es6-and-beyond/blob/master/seccion-5-object-assign-modules.md)