"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = __importDefault(require("./multiply"));
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
const a = 5;
const b = 9;
console.log(`${a} * ${b} = ${multiply_1.default(a, b)}`);
