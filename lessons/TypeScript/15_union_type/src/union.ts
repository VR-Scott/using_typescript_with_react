
//Type Guarding:

// function someFn(myArgument: number | string | boolean) {
//     if (typeof myArgument === 'string') {
//         let x = myArgument.toUpperCase();
//     } else if (typeof myArgument === 'number') {
//         myArgument.toFixed();
//     } else {

//     }
// }


// Custom Typeguard:

// interface Dog {
//     bark(): void;
//     walk(): void;
// }

// interface Cat {
//     meow(): void;
//     walk(): void;
// }

// function isDog(someObj: Dog | Cat): someObj is Dog {
//     return (<Dog>someObj).bark !== undefined;
// }

// function callMyPet(pet: Dog | Cat) {
//     // both types have the walk function so we can use it
//     pet.walk();
//     // Not very neat:
//     // if ((<Dog>pet).bark) {
//     //     (<Dog>pet).bark();
//     // } else {
//     //     (<Cat>pet).meow();
//     // }

//     // rather make and use custom typeguard:
//     if (isDog(pet)) {
//         pet.bark();
//     } else {
//         pet.meow();
//     }
// }

class Foo {
    foo: number | undefined;
    commonProp: string | undefined;
}

class Bar {
    bar: number | undefined;
    commonProp: string | undefined;
}

function fooBarFunction(obj: Foo | Bar) {
    if (obj instanceof Foo) {
        obj.foo
    } else {
        obj.bar
    }
}