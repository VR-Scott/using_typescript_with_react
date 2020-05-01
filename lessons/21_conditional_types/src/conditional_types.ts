// Conditional type is a type which selects 1 of 2 possible types. given some condition.
// if type T is accignable to type U choice type X else choose type Y.

type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value: T) {
    const someOtherFunction = (someArg: T extends boolean ? 'TYPE A' : 'TYPE B') => {};
    return someOtherFunction;
}

const result = someFunction('');
const result2 = someFunction(true);