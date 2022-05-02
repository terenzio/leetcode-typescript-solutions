// In TypeScript, we can iterate through iterable objects (including array, map, set, string,
// arguments object and so on) using various for loops.

// TypeScript supports 3 kind of for loops:
// for loop (traditional for-loop)
// for..of loop
// for..in loop

// Syntax
// for (first expression; second expression; third expression) {
//     // statements inside loop will be executed for each iteration
// }

// 1.1. Traditional for loop =============================
// Execute a code block 5 times
for (let counter = 0; counter < 5; counter++) {
    console.log ("Value of counter: " + counter);
}

//1.2. for..of loop =============================
// Syntax
// for (let val of iterable) {
//     //Statements
// }

// This loop helps in iterating over iterable objects such as list, set, map or string. With the help of this loop,
// we do not need to manage a counter variable explicitly.

// Loop over array items
let myArray = [10, 20, 30];

for (let value of myArray) {
    console.log(value);   //10 20 30
}

// Loop over string characters
let str = "Hello World";

for (var ch of str) {
    console.log(ch);   //H e l l o  W o r l d
}


// 1.3. for..in loop =============================
// Syntax
// for (let val in collection) {
//     //Statements
// }
// Loop over array items with index and value
let myArray2 = [10, 20, 30];

for (let index in myArray2) {
    console.log(index);    //Prints indexes
    console.log(myArray2[index]);   //Prints values
}
