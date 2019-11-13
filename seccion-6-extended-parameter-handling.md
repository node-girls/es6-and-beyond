### Extended Parameter Handling

####  Parámetros por defecto

Imaginemos que tenemos una función que recibe dos parámetros:

```javascript
function add(a, b) {
  return a + b;
 }
```
 
Si llamamos a la función pasando únicamente un valor `add(2)` esto nos fallará ya que espera dos valores y, en el caso de no pasarle uno de ellos lo tratará como `undefined` y por tanto nos retornará `NaN`.
 
Por eso, a veces puede resultar útil establecer un valor por defecto en los parámetros.

```javascript
function add(a, b = 0) {
  return a + b;
}
```
 
De esta forma, si solo pasamos un valor, el segundo parámetro siempre cogerá el valor por defecto, en este caso 0 pero si le pasáramos uno en la llamada de la función tendría este en cuenta.

¡Vamos a probarlo! ¿Qué vemos en consola si hacemos `add(5)`? ¿Y si hacemos `add(2, 3)`?

####  Parámetros Rest

A veces no tenemos claro cuántos argumentos le vamos a pasar a una función y esto nos complica la forma de declararla. Sin los parámetros Rest, lo que podíamos hacer antes era obtener estos parámetros con el objeto `arguments`. Lo malo de `arguments` es que no es realmente un array y por tanto no podemos utilizar ciertos métodos de array.

Con es6 tenemos la posibilidad de poner con `...` el resto de parámetros que vengan en la función y nos los meterá en un array.

Vamos a verlo con un ejemplo:

```javascript
function example(a, ...b) {
  console.log(a); // esto siempre nos muestra el valor con el que llamamos a la función
  console.log(b) // si no se le pasan parámetros extra nos devolverá un array vacío
}
```

Hagamos la prueba llamando a la función example con un parámetro y otra prueba con varios.
¿Qué devuelve `example(22)`? ¿Y `example(22, 21, 45, 2)`?

####  Spread operator

El spread operator nos genera una lista de valores a partir de un array. Sería como el caso contrario del parámetro Rest.
Vamos a verlo con un ejemplo para que quede más claro.

```javascript
const frutas = ["naranja", "mandarina", "pomelo", "pera", "manzana"];
const frutaVerdura = ["lechuga", "brócoli", ...frutas];
```

Si hacemos `console.log(frutaVerdura)` lo que veremos es:
`["lechuga", "brócoli", "naranja", "mandarina", "pomelo", "pera", "manzana"]`

También puede ser útil en las llamadas a funciones.


```javascript
function add(a, b, c) {
  console.log(a + b + c);
}
const sales = [30, 35, 25];

add(...sales);
```
