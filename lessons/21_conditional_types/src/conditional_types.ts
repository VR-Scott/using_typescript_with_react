// Conditional type is a type which selects 1 of 2 possible types. given some condition.
// if type T is accignable to type U choice type X else choose type Y.

type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value: T) {
    type A = T extends boolean 
    ? 'TYPE A' 
    : T extends string 
    ? 'TYPE B' 
    : T extends number 
    ? 'TYPE C'
    : 'TYPE D';
    const someOtherFunction = (
        someArg: T extends boolean ? 'TYPE A' : 'TYPE B') => {
            const a: 'TYPE A' | 'TYPE B' = someArg;
        };
    return someOtherFunction;
}

const result = someFunction('');
const result2 = someFunction(true);

//Distributive property of conditional type.
// never decribes a type that never happens.
type StringOrNot<T> = T extends string ? string : never;

// never can be used to filter union types
type AUnion = string | boolean | never;

// type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

/*
'a' extends 'a' | 'b' ? never : 'a' => never
'b' extends 'a' | 'b' ? never : 'b' => never
'c' extends 'a' | 'b' ? never : 'c' => 'c'
*/

// for type to be distributive it must be as is and not wrapped or modified.

type MyType<T> =
 T extends string | number ? T : never;
type MyResult = MyType<string | number | boolean>;

// Infer
type InferSomething<T> = T extends infer U ? U : any;
type Inferred = InferSomething<'I am a string'>;

// type InferSomething2<T> = T extends { a: infer A; b: number } ? A : any;
// type Inferred2 = InferSomething2<{ a: 'infer A'; b: number }>;

type InferSomething2<T> = T extends { a: infer A; b: infer B } ? A & B : any;
type Inferred2 = InferSomething2<{
    a: {somAProp: 1};
    b: {someBprop: 'B'}

}>;

type MyFuncReturnVal = ReturnType<() => true>;

// Utility types implemented using conditional types:

// type Exclude<T, U> = T extends U ? never : T;
// type Extract<T, U> = T extends U ? T : never;
// type NonNullable<T> = T extends null | undefined ? never : T;
// type ResultType<T extends (...args: any) => any> = T extends (
//     ...args: any
// ) => infer R
//     ? R
//     : any;
// type InstanceType<T extends new (...args: any) => any> = T extends new (
//     ...args: any
// ) => infer R
//     ? R
//     : any;