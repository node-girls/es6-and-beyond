### Objetos y módulos (export/import)

#### Property Shorthand (acortador de propiedades)

Si la propiedad tiene el mismo nombre que el valor podemos usar sólo una declaración

```js
var x = 0;
var y = 0;
obj = { x, y };
//ES5 obj = {x: x, y: y}
```

#### Computed Property Names (nombres computados de propiedades)

Usando [] podemos tener valores 'dinámicos' como propiedades en los objetos

```js
let item = 'tshirt';
let param = 'size';

let customize = {
  [item]: 'red',
  [param]: 'small'
};

console.log(customize);
```

#### Method Properties (métodos)

```js
obj = {
  foo (a, b) {
    …
  },
  bar (x, y) {
    …
  },
}

/*ES5
obj = {
  foo: function (a, b) {
    …
  },
  bar: function (x, y) {
    …
  },
}
*/
```

#### Object.keys

Este método nos devuelve las propiedades de un objeto como strings en un array

```js
const car = {
  name: 'Ferrari',
  color: 'red',
  speed: 3,
  move(x) {
    return `${this.speed}` * x;
  }
};

console.log(Object.keys(car)); //[ 'name', 'color', 'speed', 'move' ]
```

#### Object.values

Este método nos devuelve los valores de las propiedades en un objeto como strings en un array

```js
const bestActresses = {
  2018: 'Olivia Colman',
  2017: 'Frances McDormand',
  2016: 'Emma Stone',
  2015: 'Brie Larson',
  2014: 'Julianne Moore'
};

console.log(Object.values(bestActresses));
// ['Olivia Colman','Frances McDormand','Emma Stone','Brie Larson','Julianne Moore']
```

Si lo usamos sobre un string obtendremos un objeto

```js
let oscarWinner2019 = 'Rami Malek';

console.log(Object.values(oscarWinner2019));
//['R', 'a', 'm','i', ' ', 'M','a', 'l', 'e','k']
```

#### Object.entries

Este método nos devuelve un array de arrays que contiene los pares `[key, value]`

```js
const bestActresses = {
  2018: 'Olivia Colman',
  2017: 'Frances McDormand',
  2016: 'Emma Stone',
  2015: 'Brie Larson',
  2014: 'Julianne Moore'
};

console.log(Object.entries(bestActresses));
/*
[
  [ '2014', 'Julianne Moore' ],
  [ '2015', 'Brie Larson' ],
  [ '2016', 'Emma Stone' ],
  [ '2017', 'Frances McDormand' ],
  [ '2018', 'Olivia Colman' ]
]
*/
```

Si lo usamos sobre un array obtenemos nos dará un array de arrays con pares `[key, value]` en el que el key es el índice del elemento

```js
let actresses = ['Olivia', 'Frances', 'Emma'];

console.log(Object.entries(actresses)); //[ [ '0', 'Olivia' ], [ '1', 'Frances' ], [ '2', 'Emma' ] ]
```

#### Object.assign

El método Object.assign() se usa para copiar valores de las propiedades enumerables de uno o más objetos a otro objeto.
Su principal uso sería hacer una copia de un objeto.

```js
const copia = Object.assign({}, original);
```

```js
const objOne = { a: 1, b: 2 };
const objTwo = { b: 4, c: 5 };

const combineObjects = Object.assign(objOne, objTwo);

console.log(objOne); // { a: 1, b: 4, c: 5 }

console.log(objTwo); // { b: 4, c: 5 };
console.log(combineObjects); // { a: 1, b: 4, c: 5 }
```

Dijimos que podíamos copiar más de un objeto

```js
var obj1 = { a: 'a', b: 'a', c: 'a' };
var obj2 = { b: 'b', c: 'b' };
var obj3 = { c: 'c' };

var allObj = Object.assign({}, obj1, obj2, obj3);
console.log(obj); // { a: 'a', b: 'b', c: 'c' }
```

Observa como las propiedades que ya existen en el objeto original se sobreescriben con las que tenga el objeto que estamos copiando.

Si usamos valores primitivos los valores serán envueltos en un objeto pero ojo! cualquiero valor que no sea un string será ignorado!

```js
var uno = 'uno';
var dos = 2;
var tres = true;

var obj = Object.assign({}, uno, dos, tres);
console.log(obj); //{ '0': 'u', '1': 'n', '2': 'o' }
```
