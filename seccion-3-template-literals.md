### Template literals

Las template literals nos permiten combinar strings con expresiones evitando tener que ir concatenando con el '+'.
Por ejemplo, imaginemos que tenemos en una variable el nombre de un usuario:


```javascript
const user = 'María';
```

Ahora queremos añadir el nombre del usuario a un string.
Normalmente haríamos:


```javascript
console.log("Hola " + user + " !");
```

Con los template literals quedaría de la siguiente forma:

```javascript
console.log(`Hola ${user}!`);
```

También es posible hacer saltos de línea.


```javascript
console.log(`Hola ${user}! 
Qué tal?`);
```

### [Go to Step 4 >>>>](https://github.com/node-girls/es6-and-beyond/blob/master/seccion-4-metodos-arrays.md)