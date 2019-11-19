### Arrow function () =>

Las **`arrow functions`** de ES6 son una nueva manera de expresar las funciones de siempre, de un modo resumido.

Aunque son comúnmente conocidas como arrow functions, también podrás oír hablar de ellas con su denominación en español, funciones flecha, o como "fat arrow functions", ya que para formar la flecha se usa una línea doble, del signo matemático igual "=".


#### Cómo expresar una función con las arrow functions

En vez de usar la palabra clave function se utiliza el símbolo de la flecha y los paréntesis donde se colocan los parámetros de la función también se mueven de lado, colocados antes de la flecha.

```javascript
let mifuncion = () => {
  //código de la función
}

mifuncion()
```

#### Parámetros de las funciones flecha

El tratamiento de los parámetros se realiza como hasta ahora, excepto cuando tengamos un único parámetro. En este último caso, podemos ahorrarnos los paréntesis.


```javascript
let saludo = (nombre, tratamiento) => {
  alert('Hola ' + tratamiento + ' ' + nombre)
}

saludo('Miguel', 'sr.');
```

```javascript
let cuadrado = numero => {
  return numero * numero;
}
```

### Ausencia de las llaves de la función

Existe otro caso especial, en el que podemos también ahorrarnos algún carácter extra, en este caso las llaves de apertura y cierre de la función. Sería cuando solamente tenemos una línea de código en nuestra función.

La función del saludo la podrías ver así también:

```javascript
let saludo = (nombre, tratamiento) => alert('Hola ' + tratamiento + ' ' + nombre);
```

#### Ausencia de la palabra return

Si tenemos una única línea de código y la función devuelve un valor, también nos podríamos ahorrar la palabra `return`, además de las llaves como se dijo antes.

```javascript
let cuadrado = numero => numero * numero;
```

#### Evitar generar un nuevo contexto en this

Cuando usas funciones callback éstas generan un nuevo contexto sobre la variable `this`. En estos casos, para poder acceder al `this` anterior se hacían cosas como `var that = this`, o quizás hayas usado el `.bind(this)` para bindear el contexto.

Código anterior a ES6:
```javascript
var objTest = {
  retardo: function() {
    setTimeout(function() {
      this.hacerAlgo();
    }, 1000);
  },

  hacerAlgo: function() {
    alert('hice algo');
  }
}

objTest.retardo();
```

En la función setTimeout() estamos enviando un callback que genera un nuevo contexto, por tanto, no puedes acceder a this dentro de esa función. O mejor dicho, sí puedes acceder, pero no te devolverá lo que quizás se espere, que sería el propio objeto objTest. Es por eso que al ejecutar ese código te saldría un error: `Uncaught TypeError: this.hacerAlgo is not a function`.

Simplemente es que this ya no es el propio objeto y por tanto no existe el método que estás buscando.

La solución en ES5 pasaría por bindear this o cachear la referencia a this en una variable local que sí exista en el ámbito de la función callback. Sin embargo, en ES6 y con las funciones flecha lo podríamos resolver de una manera mucho más elegante.

```javascript
let objTest = {
  retardo: function() {
    setTimeout( () => {
      this.hacerAlgo();
    }, 1000);
  },

  hacerAlgo: function() {
    alert('hice algo');
  }
}

objTest.retardo();
```

Ahora la función enviada como callback a setTimeout() está definida con una arrow function y por tanto no genera contexto nuevo en la variable this. Es por ello que al intentar invocar a this.hacerAlgo() no generará ningún error y se ejecutará perfectamente ese método hacerAlgo().







