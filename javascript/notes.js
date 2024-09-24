// The purpose of this document is to create code snippets for my session notes

// const form = "querySelector to the data-js #";

// form.addEventListener("submit", (event) => {
//     // to prevent default behaviour of form to create network request for submitted data
//     event.preventDefault();
//     // standard object to store data of form created upon submit in an object
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);
// }

// const person = {
//   name: "Max Paddington",
//   age: 21,
//   isStudent: false,
//   adress: {
//     street: "Paddington Street",
//     houseNumber: 23,
//     city: "London",
//   },
// };

// // Access porperties of an object:

// person.age; // 21
// person["name"]; // "Max Paddington"

// person.adress.city; // "London"
// person.adress["city"]; // same

// // Ading & deleting properties

// person.score = 1;
// delete person.score;

// const shoppingList = ["apple", "tomato"];

// // Accessing data in arrays

// shoppingList[0]; // "apple"

// // Declaring and accessing data in complex arrays

// const nestedArray = ["a", 1, ["a", "new", "sentence"], false];
// nestedArray[2][1]; // "new"

// const peopleArray = [
//   {
//     name: "John",
//     age: 22,
//   },
//   {
//     name: "Alex",
//     age: 33,
//   },
// ];

// const user = {
//   userId: "1234",
//   mail: "test@mail.com",
//   shoppingCart: ["tomato", "banana", "chocolate"],
// };

// peopleArray[1].name; // "Alex"
// user.shoppingCart[0]; // tomato

function greetCoach() {
  console.log("hello coach");
}

// Higher Order Function = fn, die andere fn als Argument erwartet

function doSomethingXtimes(number, functionToExecute) {
  for (let i = 0; index < number; index++) {
    functionToExecute();
  }
}

// fn call

doSomethingXtimes(4, greetCoach);

// fn call mit neuer fn (braucht man => fat arrow fn)

doSomethingXtimes(10, function (param) {
  console.log(param);
});
doSomethingXtimes(10, () => {
  console.log("anonymFn");
});

// forEach ist eine Higher Order fn, die eine Funktion als Argument erwartet
// Sie ruft diese Funktion auf und übergibt ihr jedes Element als Argument
// forEach return nichts (void function)
// wir führen mit jedem array element ienne Seiteneffekt aus

const result2 = games.forEach((element) => {
  console.log(element);
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = element.toUpperCase();
  document.body(card);
});

// (element) meint jedes Objekt aus dem arr mit dem games

// MAP manipuliert jedes Element, Das neue Array mit den manipulierten Elementen wird returnt.
// map nimmt aus einem array und ermöglicht, die genommenen Daten zu manipulieren. Dabei werden die Ursprungsdaten nicht 

const strings = ["aa", "bb"];

const upperCaseString = strings.map(element) => {
  // return element.toUpperCase();
  // um nur die Damen
  return element.name;
};
// upperCaseString ist das neu ausgegebene, manipulierte array


const gameNames = games.map(element) => {
  // um nur die Namen aus den Objects im array zu holen
  return element.name;
};
console.log{gameNames};

// FITLER checkt jedes ELement nach einer Bedingung
// Wenn die fn true returnded,
// wird jedes Element in neues array gepackt
// fitler manipuliert nichts

const gamesBefore2000 = games.filter(
  (game)=>{
    if (game.publishingYear < 2000){
      return true;
    } else {
      return false;
    }
  }
)
console.log(gamesBefore2000);

const gamesDeviceIsPS2 = games.filter(
  (game)=>{
    if (game.devices.includes("PS2"))
      // (game.devices) === "PS2")
      // notation war grundsätzlich nicht falsch, aber mit === komme ich nicht weiter
      // brauche hier die .includes methode
      // if (!game.devices.includes("PS2")) returned falschen Wert
      {
      return true;
    } else {
      return false
    }
  }
)

// andere Schreibweise

const gamesForPS2 = games.filter((game) => {
  return game.devices.includes("PS2")
  // große Fehlerquelle ist hier oft, dass das return vergessen wird
});

// return value ist ein array

//  FIND prüft die Elemente auf eine Bedingung
// Wein ein Element die Beding erfüllt, wird dieses returned
// und es wird nicht weiter gesucht
// effizient, wenn man nur bis zu gegeben Punkt suchen will

const searchResult = games.find((game) => {
  return game.name === "Title";
});

// Bonusfrage: was war nochmal implicit return statement?

const searchResult = games.find((game) => 
game.id === 8);


