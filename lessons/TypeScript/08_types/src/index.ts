//types:

//Boolean:
let bool: boolean = false;

//Number:
let num: number = 1 + 0b1 + 0o1 + 0x1

//String
const hello: string = 'Hello';
const world: string = "World";
const helloWorld = `
${2 + 2}
${hello}
${world}
`;
// string using ` can span multiple lines

//Null and Undefined
let n: null = null;
let u: undefined = undefined;

let someNumber: number = null;

function uppercaseFirstLetter(str: string | null) {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}

console.log(uppercaseFirstLetter('hello'));
uppercaseFirstLetter(null);

//Object can be any non-primitive types
// like array [], an object {} or map new Map();
//these are primitive types
type primitiveTypes = boolean | number | string | symbol | null | undefined;

const myArrObj : object = [];
const myObj : object = {};
const myMapObj : object = new Map();

//Void describes the absence of a value
function log(message: string): void {
    console.log(message);
}
//this function doesn't return anything thus :void

//Array represents a list of elements of some type.
let array1: string[] = ['x', 'y'];
let array2: Array<string> = array1;

//Tuple Array w/ fixed # of elemnts
let tuple: [string, number] = ['str', 1]

//Enum way to give more friendly same to set of numbers
enum Colour {
    Red = 'red',
    Green = 5,
    Blue = 99
}

let myFavouriteColour: Colour = Colour.Blue;
console.log(Colour.Red, Colour.Green, Colour.Blue);
console.log(Colour[99]);// if you did Colour['red'] get undefined.


//Any type of value don't know.
let Any: any;
Any = 'a string';
Any = 1;
Any = true;

//Type assertions like type cast

const email = document.getElementById('');

if (email) {
    email.addEventListener('change', e => {
        const input = e.currentTarget as HTMLInputElement;
        //can also but not in .tsx
        // const input = <HTMLInputElement>e.currentTarget;
        console.log(input.value);
    });
}