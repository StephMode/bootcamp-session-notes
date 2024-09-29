// 

const group1 = ["ab", "cd", "ef"];
const group2 = ["aa", "bb", "cc"];

const allStundetns = [...group1, ...group2];

const anotherGroup = [...group1];
// das ist ein neuer array

const yetAnotherGroup = group1;
// das ist ein Verweis, also kein neuer array


// rest params

function contestResults(gold, silver, ...everyoneElse) {
    console.log(`Gold goes to: ${gold}`);
    console.log(`Silver goes to: ${silver}`);
    console.log(`Thx to: ${...everyoneElse}`);
};

const everyoneElse = ["Yoshi", "Toad", "Bowser"]

contestResults("Mario", "Luigi", everyoneElse);


// destructuring arrays




// destructuring objects


const user = {
    firstName: "Franz",
    lastName: "Kafka",
    born: 1870,
    isAuthor: true,
    works: ["The Trial", "The Castle", "The Metamorphosis"],
}

const {firstName, lastName, isAuthor, works[0]} = user;