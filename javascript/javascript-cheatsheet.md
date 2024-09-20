# General

## General approach to problem solving with JS

If there is already a function or method you don't know yet:

Do research to find out

- what it is
- what it does
- how it is used for

Addendum 15.09.24:

- when it comes to solving challenges, try to think as simple as simple as possible to get the job done with a clean and working solution

# functions

- functions können in eventListener stehen und so ausgelöst werden. Sie könne auf diese Art auch input values als params aufnehmen (vgl. 11_js-functions/js-functions_pizza-analyzer)
- Template literals _`${result}px`_ können verwendet werden, um Integer Eregbnisse in strings umzuwandeln, zB um sie als Maßeinheiten für HTML und CSS verfügbar zu machen

# Data Types

## Unstructured Data Types

### Strings

```JS
const name = "Alex";
const stringConcatenation = "Hello " + name + ", good to see you!";
```

String Concatentaion using **template literals**

```JS
const stringConcatenation = "Hello " + name + ", good to see you!";
const withTemplateString = `Hello ${name}, good to see you!`;
```

## Structured Data Types

### Arrays

Arrays are structured data types that couple the values they are holding to an index (think of a spreadsheet in EXCEL for example)

```JS
const shoppingList = ["apple", "tomato"];

// Accessing data in arrays

shoppingList[0]; // "apple"

// Declaring and accessing data in complex arrays

const nestedArray = ["a", 1, ["a", "new", "sentence"], false];
nestedArray[2][1]; // "new"
```

### Objects

Structured datatypes which couple their values not to an index (as arrays do), but to a unique key (key value pairs).

```JS
const person = {
  name: "Max Paddington",
  age: 21,
  isStudent: false,
  adress: {
    street: "Paddington Street",
    houseNumber: 23,
    city: "London",
  },
};

// Access porperties of an object:

person.age; // 21
person["name"]; // "Max Paddington"

person.adress.city; // "London"
person.adress["city"]; // same

// Ading & deleting properties

person.score = 1;
delete person.score;
```

#### Arrays & Objects nested into each other

```JS
const peopleArray = [
  {
    name: "John",
    age: 22,
  },
  {
    name: "Alex",
    age: 33,
  },
];

const user = {
  userId: "1234",
  mail: "test@mail.com",
  shoppingCart: ["tomato", "banana", "chocolate"],
};

// Accessing Data from nested objects/arrays

peopleArray[1].name; // "Alex"
user.shoppingCart[0]; // tomato
```

#### 📋 Repertoire an häufig gebrauchten objects

⭐️ Das ist Standard Code für die Erstellung eines objects innerhalb eines eventListeners für eine Form, um die Formulardaten zu speichern

```JS
const form = "querySelector to the data-js #";

form.addEventListener("submit", (event) => {
    // to prevent default behaviour of form to create network request for submitted data
    event.preventDefault();
    // standard object to store data of form created upon submit in an object
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
}
```

# Loops

- Am besten ist es, wenn man die Veränderung im Codeblock des Loops ausführen lassen
- i (_iterator_) sind eine sehr kurze let, grenzen Einstiegspunkt bzw. Endpunkt der Schleife vor
- Loops sind sehr beliebt bei Coding Challenges in Bewerbungsprozessen

Klassische Loops

1. while loop
2. for loop

   Moderne Loops(shorthand Varianten vvon _for_)

   1. for … of
   2. for … in

## while loops

- eignen sich gut, um durch zu loopen, bis eine bestimmte Bedingung erreicht ist
- eignet sich daher gut um zu loopen, wenn noch nicht ganz klar ist, wie lange gelooped werden soll
- wird so lange ausgeführt, bis condition **'true'**

### Beipsiel: _Array durch iterieren bis_

```JS
const array = ["blue"; "green"; "red", "purple"];
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i = i + 1;
}
```

## for loop

- i werden innerhalb der Schleife deklariert
- macht ähnliche Dinge wie _while_, aber ist andere Syntax
- dieser Loop ist der klassische iterator, endet mit Endbedingung
- wird ausgeführt bis condition **'false'**

### Bestandteile for loop

```JS
for (initilization; condition; afterthought) statemet;
```

_bzw._

```JS
for (initilization; condition; afterthought) {
  statement;
  statement;
}
```

- **initilization**: diese expression, kann auch eine variable sein, wird 1 bis -n mal ausgeführt
- **condition**: ist die Begrenzung für die Ausfühung, also so lange diese condition **'true'** ist, wird gelooped
- **afterthought**: wird nach dem loop statement ausgeführt
- **statement**: wird ausgeführt solange **condition** = true;

### Beipsiel: _Array durch iterieren bis_

damit fängt man von Anfang an, die iteration ist maximal so lang wie der array selbst, i++

```JS
const array = ["blue"; "green"; "red", "purple"];
for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}
```

## for … in loop

- idR shorthand notation, um durch alle keys eines object zu iterieren

### Beipsiel: iterieren durch object

```JS
const user = {
  name: "Alex",
  age = 11,
  isAdmin = false,
}
for (const key in user) {
  console.log(key + ": " + user[key]);
}
```

## for … of loop

- shorthand quotation, um durch items eines array zu loopen

### Beipsiel: iterieren durch array

```JS
const fruits = ["apple", "banana", "melon"];

for (const fruit of fruits) {
  console.log(fruit);
}

// 'apple'
// 'banana'
// 'melon'
```

# Conditions

## Comparison Operators

| Operator  | Effect                                                                           |
| --------- | -------------------------------------------------------------------------------- |
| A `===` B | strict equal: is `true` if both values are equal (including their type).         |
| A `!==` B | strict not equal: is `true` if both values are not equal (including their type). |
| A `>` B   | strictly greater than: is `true` if A is greater than B.                         |
| A `<` B   | strictly less than: is `true` if A is less than B.                               |
| A `>=` B  | greater than or equal: is `true` if A is greater than or equal B.                |
| A `<=` B  | less than or equal: is `true` if A is less than or equal B.                      |

## Logical Operators

| Operator                      | Effect                                                 |
| ----------------------------- | ------------------------------------------------------ |
| `!`A                          | `not`: flips a `true` value to `false` and vice versa. |
| A <code>&#124;&#124;</code> B | `or`: is `true` if either A `or` B is true.            |
| A `&&` B                      | `and`: is `true` if both A `and` B is true.            |

## Control Flow if/else

- Prüfkriterium in **const** in der function lagern, wenn es ein komplexeres statement bzw. eine JS method ist
- bei comparison operations muss Prüfkriterium (ggf. in **const**) immer in beiden Teilen der Vergleichsoperation aufgerufen werden

# DOM (Document Object Model)

## Allgemein

API, die Dokumente in HTML und XML basierten markup languages repräsentiert und die Interaktion über Programmiersprachen mit diesen ermöglicht.

👉🏻 Damit quasi die erste API, mit der ich jetzt als Entwickler schon arbeite.

DOM steht für ein Dokumentenmodell, mittels dem der Browser ein Dokument in besagten Sprachen als node-tree (Dokument mit knotenpunkartiger Verzweigung) lädt.

Über **event listeners** kann man Punkte im node des DOM ansteuern und beeinflussen.

## Event listeners

### const für event listeners

Mann muss zunächst _const_ definieren, in denen man über _querySelector_ html elements im DOM anspricht und diese mit den variables verknüpft.

Beispiel:

```JS
const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
```

Das sind die _const_ für eine App, bei der man mit click auf die xyButton_s die class der Box maniqpuliert und damit die bcg ändert.

### Arten von event listeners

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

# Debugging

Es gibt verschiedene console. functions, die zum Debugging verwendet werden können.

## console.assert()

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

## console.log()

Als Debbugging-Tool ist hilfreich, um nachzuvollziehen, ob etwas wie beabsichtigt getriggert wurde, weil upon trigger der log in die console geprinted wird.
