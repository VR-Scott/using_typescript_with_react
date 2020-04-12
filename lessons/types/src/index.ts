import multiply, { multiplyByTwo as mBy2, HelloWorld } from './multiply'
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

//Object
type primitiveTypes = boolean | number | string | symbol | null | undefined; 

console.log(uppercaseFirstLetter('hello'));
uppercaseFirstLetter(null);

const a = 5;
const b = 9;

console.log(`${a} * ${b} = ${multiply(a, b)}`);