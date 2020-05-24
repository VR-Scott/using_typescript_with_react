//Fuctions (optional and default parameters)

// can make parameter optional by adding ? after name.
// can give parameter a default Value by = and value after the type.
function sum (a: number = 0, b?: number): number {
    return a + (b || 0);
}

sum(1);

//use => for return type instead of :
type MyFunc = (a: number, b: number) => number;
const sum2: MyFunc = (a, b) => a + b;

// Unknown # of parameters

function sumEverything(arg1: string, arg2: boolean, ...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
}

// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}