# General

This .md is to collect snippets of info, concepts, code
I'll collect info I learned after I made mistakes

## General approach to problem solving with JS

If there is already a function or method you don't know yet:

Do research to find out

- what it is
- what it does
- how it is used for

Addendum 15.09.24:

- when it comes to solving challenges, try to think as simple as simple as possible to get the job done with a clean and working solution

## DOM (Document Object Model)

### Allgemein

API, die Dokumente in HTML und XML basierten markup languages repräsentiert und die Interaktion über Programmiersprachen mit diesen ermöglicht.

👉🏻 Damit quasi die erste API, mit der ich jetzt als Entwickler schon arbeite.

DOM steht für ein Dokumentenmodell, mittels dem der Browser ein Dokument in besagten Sprachen als node-tree (Dokument mit knotenpunkartiger Verzweigung) lädt.

Über **event listeners** kann man Punkte im node des DOM ansteuern und beeinflussen.

### Event listeners

#### const für event listeners

Mann muss zunächst _const_ definieren, in denen man über _querySelector_ html elements im DOM anspricht und diese mit den variables verknüpft.

Beispiel:

```JS
const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
```

Das sind die _const_ für eine App, bei der man mit click auf die xyButton_s die class der Box maniqpuliert und damit die bcg ändert.

#### Arten von event listeners

```JS
const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
let output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  if (age > 9 && age < 18) {
    output = document.querySelector("output");
    output.textContent = "You are a teen";
  } else {
    output = document.querySelector("output");
    output.textContent = "You are not a teen";
  }
```

-> hier habe ich zum Beispiel eine App gebaut, die in einem _output_ Element auf Grundlage der Dateneingabe im _input_ Element den Text im DOM verändert.

- _addEventListener_ wird gebraucht, um das element im DOM über die API zu triggern
- _const age = Number(input.value);_ (nicht DOM im engeren Sinne, eher JS intern) deklariert eine Variable, die den value von #input in eine Number umwandelt
- _output = document.querySelector("output")_ wird gebraucht, um das element im DOM über die API zu auszuwählen für den nächsten Schritt
- _output.textContent = "You are not a teen";_ wird gebraucht, um das im DOM ausgewählte element mit neuem content zu überschreiben

## Debugging

Es gibt verschiedene console. functions, die zum Debugging verwendet werden können.

### console.assert()

```javascript
console.assert();
```

ist ein vielseitiges debugging tool, dem man viele Kriterien zur Prüfung geben kann.

Ein einfaches Beispiel ist die Überprüfung mathematischen Gleichungen, wenn sie in einer Funktion return-ed werden:

```javascript
function add(a, b) {
  return a + b;
}

console.assert(
  add(1, 1) === 2,
  `add(1,1) should be 2, instead got ${add(1, 1)}`
);
```

Damit lassen sich aber auch Logiken jeglicher Art nachvollziehen.

### console.log()

Als Debbugging-Tool ist hilfreich, um nachzuvollziehen, ob etwas wie beabsichtigt getriggert wurde, weil upon trigger der log in die console geprinted wird.
