
// Set is a new data structure introduced in ES6, similar to Map. A typescript Set allows us to store distinct values
// in a List similar to other programming languages e.g. Java, C#.

// 1. Creating Set -------------------------------------------------------------------------------
// let directions = new Set<string>();

// Set with initial values
let directions = new Set<string>(['east', 'west']);

// /Iterate over set entries
for (let x of directions) {
    console.log(x);     //Prints 1 2 3 4 5 6
}

// Iterate set entries with forEach
directions.forEach(function(value) {
    console.log(value);               //Prints 1 2 3 4 5 6
});


// 2. Add, Retrieve and Delete Values from Set ---------------------------------------------------
//Create a Set
let diceEntries = new Set<number>();

//Add values
diceEntries.add(1);
diceEntries.add(2);
diceEntries.add(3);
diceEntries.add(4).add(5).add(6);   //Chaining of add() method is allowed

//Check value is present or not
diceEntries.has(1);                 //true
diceEntries.has(10);                //false

//Size of Set
diceEntries.size;                   //6

//Delete a value from set
diceEntries.delete(6);              // true

//Clear whole Set
diceEntries.clear();                //Clear all entries



// 3. Iterating over a Set  ---------------------------------------------------
let diceEntries2 = new Set<number>();

//Added 6 entries into the set
diceEntries2.add(1).add(2).add(3).add(4).add(5).add(6);

//Iterate over set entries
for (let currentNumber of diceEntries2) {
    console.log(currentNumber);     //Prints 1 2 3 4 5 6
}

// Iterate set entries with forEach
diceEntries2.forEach(function(value) {
    console.log(value);               //Prints 1 2 3 4 5 6
});