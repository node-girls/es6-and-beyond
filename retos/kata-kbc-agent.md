### Kata Agente DBC

Eres una agente de la DBC (Destroy Bad Coders) y no una cualquiera sino la mejor por lo que tienes muchísimas peticiones para contratar tus servicios. Por este motivo necesitas crear una función que acepte automáticamente las misiones según tus criterios morales ya que no aceptarás misiones cuyo objetivo sea destruir buenas personas o si la forma de destrucción es inmoral.

Tu función recibirá dos parámetros: `action` y `target`. Si aceptas la misión deberás devolver `true` y en caso contrario `false`.

Una misión no será aceptable cuando:
- sea inmoral, esto se dará cuando quieran que tortures, mates o asesines. Esto vendrá en la `action` (torture, kill, murder).
- quieran que destruyas a una buena persona. Como llevas mucho tiempo dedicándote a esto has ido elaborando poco a poco una lista de buenas personas.
La lista es la siguiente: Lily-Mai Pace, Mohsin Horne, Mason Redfern, Aayan Bone, Fabio Church, Juno Gardiner.

Igual que en el caso anterior, has creado una lista de malas personas que has ido conociendo a lo largo del tiempo.
La lista es la siguiente: Beth Griffith, Patrick Chandler, Dianne Haney, Malakai Joseph.

Buenas suerte agente!

* Recuerda que para poner en práctica esto lo tendrás que hacer a través de repl.it, codepen o similar.

```javascript
function newMission(action, target) {
    // your code here
}
```

Tu función tendrá que superar estas pruebas:

```javascript
// This is an immoral mission
console.log('The mission validator should return false: ', newMission('kill', 'Beth Griffith'));

// This is a mission targetting a good person
console.log('The mission validator should return false: ', newMission('capture', 'Lily-Mai Pace'));

// This is a good mission
console.log('The mission validator should return true: ', newMission('capture', 'Dianne Haney'));

// This is an uknown target
console.log('The mission validator should return false: ', newMission('capture', 'Ally Jones'));
```