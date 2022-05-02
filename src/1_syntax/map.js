"use strict";
// TypeScript Map is a new data structure introduced in ES6. A Map allows storing key-value pairs (i.e. entries),
// similar to the maps in other programming languages e.g. Java HashMap.
// As Map is a collection, meaning it has a size, an order and we can iterate over its keys and values.
// 1. Creating a Map ---------------------------------------
let myMap1 = new Map();
// Creating map with initial key-value pairs
let myMap2 = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);
// 2. Add, Retrieve, Delete Entries from Map  ---------------------------------------
let nameAgeMapping = new Map();
//1. Add entries
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);
//2. Get entries
let age = nameAgeMapping.get("John"); // age = 40
//3. Check entry by Key
nameAgeMapping.has("Lokesh"); // true
nameAgeMapping.has("Brian"); // false
//4. Size of the Map
let count = nameAgeMapping.size; // count = 3
//5. Delete an entry
let isDeleted = nameAgeMapping.delete("Lokesh"); // isDeleted = true
//6. Clear whole Map
nameAgeMapping.clear(); //Clear all entries
// 3. Iterating over Map ---------------------------------------
let nameAgeMapping2 = new Map();
nameAgeMapping2.set("Lokesh", 37);
nameAgeMapping2.set("Raj", 35);
nameAgeMapping2.set("John", 40);
//1. Iterate over map keys
for (let key of nameAgeMapping2.keys()) {
    console.log(key); //Lokesh Raj John
}
//2. Iterate over map values
for (let value of nameAgeMapping2.values()) {
    console.log(value); //37 35 40
}
//3. Iterate over map entries
for (let entry of nameAgeMapping2.entries()) {
    console.log(entry[0], entry[1]); //"Lokesh" 37 "Raj" 35 "John" 40
}
//4. Using object destructuring
for (let [key, value] of nameAgeMapping2) {
    console.log(key, value); //"Lokesh" 37 "Raj" 35 "John" 40
}
