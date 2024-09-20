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

peopleArray[1].name; // "Alex"
user.shoppingCart[0]; // tomato
