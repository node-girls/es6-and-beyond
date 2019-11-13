### Template literals

Las template literals nos permiten combinar strings con expresiones evitando tener que ir concatenando con el '+'.
Por ejemplo, imaginemos que tenemos en una variable el nombre de un usuario:

`const user = 'María';`

Ahora queremos añadir el nombre del usuario a un string.
Normalmente haríamos:

`console.log("Hola " + user + " !");`

Con los template literals quedaría de la siguiente forma:

`console.log(`Hola ${user}!`);`

También es posible hacer saltos de línea.

`console.log(`Hola ${user}! 
Qué tal?`);`
