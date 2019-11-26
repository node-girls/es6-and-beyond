### Kata Suma la diferencia

Tu objetivo es sumar la diferencia entre los pares consecutivos de un array en orden ascendente.

Por ejemplo: `sumDifference([2, 1, 10])` Devolverá 9

Primero ordenamos de forma ascendente el array `[1, 2, 10]`

Y luego sumamos las diferencias: (2 - 1) + (10 - 2) = 1 + 8 = 9

Si el array tiene solo un número deberás devolver 0.

* Recuerda que para poner en práctica esto lo tendrás que hacer a través de repl.it, codepen o similar.

```javascript
function sumDifference(array) {
    // your code here
}
```

Tu función tendrá que superar estas pruebas:

```javascript
console.log('Should return 34: ', sumDifference([-17, 17]));
console.log('Should return 0: ', sumDifference([]));
console.log('Should return 0: ', sumDifference([1]));
console.log('Should return 0: ', sumDifference([3,3,3]));
console.log('Should return 51: ', sumDifference([-3,26,19,26,4,26,-1,-25,-7,22,26,-18,-3,26,8,-16,12,-19,-12,19]));
console.log('Should return 19: ', sumDifference([-2,5,-10,7,9,-3,-3,3,5,8,2,1,8]));
```