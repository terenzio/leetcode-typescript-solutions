// Array Iteration Example
let myArray = [10, 20, 30];

for (let value of myArray) {
    console.log(value);   //10 20 30
}

/** An array can be written like this **/

const numbers: number[] = [1, 2, 3, 4]
const names: string[] = ['Snake', 'Ocelot', 'Otacon', 'Naomi']

/** Also can be written using a generic array type, Array<elemType> **/

let list: Array<number> = [1, 2, 3, 4]
let list2: Array<string> = ['Snake', 'Ocelot', 'Otacon', 'Naomi']