### Variables: var, let, const

Antes de ES6, la única forma que teníamos de declarar variables era con `var`. ES6 introdujo `let` y `const`. Así que ahora podemos declarar variables de estas tres formas:

```js
var name = “Fabiola”; ☝️
let weather = “cold”; ✌️
const radius = “2.5”; 💪
```

Sin embargo, `var`, `let` y `const` tienen ciertas diferencias que debemos conocer. Para ello debemos tener muy claro dónde viven nuestras variables (o dónde está guardado su valor) y cómo las encuentra nuestro programa cuando las necesita.

Nuestro código pasa por tres pasos para ser ejecutado (esto a muuuy grandes rasgos).

- El intérprete de JavaScript lee nuestro programa de arriba a abajo línea por línea
- Separa los valores para analizar y entender lo que está leyendo (declara las varialbes)
- Asigna valores
- Ejecuta el código

Cuando está leyendo nuestro código busca las variables y funciones y “las eleva” reservando un espacio en memoria para encontrarlas cuando las necesite para su ejecución. A esto es a lo que llamamos `hoisting` (en español es elevar o subir).

Cuando empezamos a escribir en un documento de JavaScript, estamos en el `scope o ámbito global`. Si declaramos una variable será global.

(Nota: Se dice que el scope global es malo, generalmente porque pueden repetirse el nombre de las variables, pero no es así. Lo usamos, por ejemplo, para crear módulos o APIs.)

```js
//global scope
var name = 'Fabiola';
```

En este ejemplo, la variable name “vive” en el scope global.

Si lo pensamos como una conversación podríamos decir:

- Interprete de JS (engine): Hey scope, conoces el valor de name?
- Scope: oh sí! Está en el scope global, aquí lo tienes!

Si declaramos una función creamos con ella lo que conocemos como `lexical scope`.
El código definido localmente dentro de los corchetes de una función no es accesible en el scope global (a menos que sea expuesto).

```js
//Global scope aquí afuera
function myFunction() {
  //Lexical scope aquí dentro
}
```

Ejemplo:

```js
//Global scope aquí afuera
function tuNombre() {
  //Local scope aquí dentro
  var name = 'Fabiola';
  console.log(name);
}

console.log(name);
//ReferenceError: name is not defined
```

- Interprete de JS (engine): Hey scope, conoces el valor de name?
- Scope: nop… no tengo noticias de ese valor .

Cada función tiene su propio scope. Si definimos una función dentro otra, ésta definirá también su propio scope el cual, estará vinculado con el de la función que la contiene.

Los scopes tiene una jerarquía, un scope anidado tiene acceso al scope padre pero no viceversa.

Cuando JavaScript busca resolver el valor de las variables, empieza por el contexto más anidado y va buscando hacia afuera hasta que encuentra la variable, función u objeto que estaba buscando.

Hay que recordar que el scope chain es como las ondas que se crean en el agua. Nunca va de fuera hacia adentro.

```js
var sayHi = 'Hi 🙋';

var scope1 = function() {
  //globalScope accesible aquí
  console.log(sayHi);
  var scope2 = function() {
    //globalScope accesible y aquí
    console.log(sayHi);
    var scope3 = function() {
      //globalScope accesible y aquí también!
      console.log(sayHi);
    };
  };
};

var myFunction = function() {
  //Local scope aquí dentro
  var name = 'Fabiola';
  var myOtherFunction = function() {
    //Otro local scope aquí dentro
    console.log(`My name is ${name}`);
  };
  console.log(name);

  myOtherFunction();
};
myFunction();
```

### Mini challenge

Vamos a jugar un poco con este [JavaScript Visualizer](https://tylermcginnis.com/javascript-visualizer/) creado por Tyler Mcginnins. Sigue el link y en la sección de la derecha busca `Scope chain`, baja la velocidad a _slow_ clica en _step_ para ver cómo se va ejecutando el código.

Dicho lo anterior. Vamos a ver las diferencias entre `var`, `let` y `const`.

`var` nos permite mutar el valor de una variable en cualquier punto de la cadena del `scope`.

```js
var name = 'Marina';

function miNombreEs() {
  //Local scope aquí dentro
  var name = 'Fabiola';
  console.log(name);
}

console.log(name);

miNombreEs();

var name = 'Ana Cristina';
console.log(name);
```

Lo que aporta `let` es que crea un `scope` y evita que podamos sobre escribir valores fuera de su `scope`.

```js
let name = 'Marina';

function miNombreEs() {
  //Local scope aquí dentro
  let name = 'Fabiola';
  console.log(name);
}

console.log(name);

miNombreEs();

let name = 'Ana Cristina';
console.log(name); //Uncaught SyntaxError: Identifier 'name' has already been declared
```

`const` fue pensado para asignar valores que no queremos mutar y que sabemos que son constantes.

```js
const booksUrl = 'http://listOfBooks';
const apiKey = '9kifu877';

booksURL = 'http://otherBooks'; //SyntaxError: redeclaration of const booksUrl
```

Ojo: `const` nos previene de poder reasignar valores pero podemos mutar objetos 😥

```js
const fruits = ['pera', 'mango'];

fruits[2] = 'papaya';
fruits; //Array(3) [ "pera", "mango", "papaya" ]

const contact = {
  name: 'Naye',
  city: 'Madrid'
};

contact.city = 'Valencia';
contact.birthday = 'May 3';
```

### Mini challenge

¿Qué veremos en la consola al ejecutar el siguiente código?

```js
var a = 1;
let b = 2;

if (a === 1) {
  var a = 5;
  let b = 8;
  console.log(a);
  console.log(b);
}

console.log(a);
console.log(b);
```

```js
function foo() {
  const a = 2;

  function bar() {
    console.log(a);
  }

  bar();
}
const a = 1;
foo();
```

```js
function bar(b) {
  console.log(a);
}
function foo() {
  const a = 5;
  bar(10);
}
foo();
```

```js
let a;
function bar(b) {
  console.log(a);
}

function foo() {
  const a = 7;
  bar(9);
}

foo();
```

```js
let a;

function foo() {
  const a = 7;

  function bar(b) {
    console.log(a);
  }

  bar(9);
}
foo();
```

### [Go to Step 2 >>>>](https://github.com/node-girls/es6-and-beyond/blob/master/seccion-2-arrow-function.md)