"use strict";
//types:
//Boolean:
let bool = false;
//Number:
let num = 1 + 0b1 + 0o1 + 0x1;
//String
const hello = 'Hello';
const world = "World";
const helloWorld = `
${2 + 2}
${hello}
${world}
`;
// string using ` can span multiple lines
//Null and Undefined
let n = null;
let u = undefined;
let someNumber = null;
function uppercaseFirstLetter(str) {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}
console.log(uppercaseFirstLetter('hello'));
uppercaseFirstLetter(null);
const myArrObj = [];
const myObj = {};
const myMapObj = new Map();
//Void describes the absence of a value
function log(message) {
    console.log(message);
}
//this function doesn't return anything thus :void
//Array represents a list of elements of some type.
let array1 = ['x', 'y'];
let array2 = array1;
//Tuple Array w/ fixed # of elemnts
let tuple = ['str', 1];
//Enum way to give more friendly same to set of numbers
var Colour;
(function (Colour) {
    Colour["Red"] = "red";
    Colour[Colour["Green"] = 5] = "Green";
    Colour[Colour["Blue"] = 99] = "Blue";
})(Colour || (Colour = {}));
let myFavouriteColour = Colour.Blue;
console.log(Colour.Red, Colour.Green, Colour.Blue);
console.log(Colour[99]); // if you did Colour['red'] get undefined.
//Any type of value don't know.
let Any;
Any = 'a string';
Any = 1;
Any = true;
//Type assertions like type cast
const email = document.getElementById('');
if (email) {
    email.addEventListener('change', e => {
        const input = e.currentTarget;
        //can also but not in .tsx
        // const input = <HTMLInputElement>e.currentTarget;
        console.log(input.value);
    });
}
