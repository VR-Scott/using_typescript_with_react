// TypeScript Tips

// Get the type of a variable:

// You can get the type of a variable using the typeof keyword:

let user = {
    name: 'John',
    email: 'john@example.com'
};
 
type User = typeof user;
 
/*
type User = {
    name: string;
    email: string;
}
*/
 
const add = function(a: number, b: number) {
  return a + b;
};
 
type AddType = typeof add;
 
/*
type AddType = (a: number, b: number) => number
*/



// Type inference:

// You don't have to set the types explicitly all the time. TypeScript infers types where it's possible:

let a = 1; // is equivalent to let a: number = 1;
     
function log<T>(message: T) {}
log(1); // is equivalent to log<number>(1)

// We didn't have to set T on the log function explicitly
// (e.g., log<number>(1)), because TypeScript can infer
// T from the type of the value we pass as the argument to log.


// Unknown:

// TypeScript includes the type called unknown.
// We can use this type to describe a value which we don't know.
// For example, a value returned from a network call:

let data: unknown = getSomeDataFromSomeAPICall();
     
if (typeof data === 'string') {
  // data is a string.
} else if (Array.isArray(data)) {
  // data is an array.
} else if (typeof data === 'object') {
  // data is an object.
}

// Now you'd ask: "Why don't use any in this case?".
// The differences are:

// 1. TS forces you to determine the type of the unknown value
// before you can work with it:

let anyValue: any = 1;
let unknownValue: unknown = 1;
 
anyValue.helloWorld(); // No error.
unknownValue.helloWorld(); // you'll get a TS error.

// 2. You cannot assign unknown to anything but itself or any,
// while you can assign any to anything:

let anyValue: any = 1;
let unknownValue: unknown = 1;
 
let str: string;
 
str = anyValue; // No error.
str = unknownValue; // you'll get a TS error.

// These constraints make sure that you verify the unknown value before working with it, 
// which is important to reduce the possibility of a runtime error.

// Type assertion (you can't simply assert that a value can have any type you want)

// You can't assert a value to be of type which doesn't overlap
// with the actual type of the value:

let b = '1' as number; // Error, you can't say that a string is a number.
     
interface User2 {
  name: string;
  email: string;
}
 
function saveUser(user: User) {}
 
saveUser(<User2>{ helloWorld: '' }); 
// Error, this object doesn't have the required properties of the User interface.

// A workaround for asserting a value to be of type which doesn't overlap with
// the value's actual type is to assert that the value is unknown
// first: saveUser(<User>(<unknown>{ helloWorld: '' })).
// But, do your best to avoid this workaround,
// because it simply makes your code unsafe.

// Overall, try to avoid assertions as much as possible,
// use them only when they are necessary, like the user-defined type guards:

interface Cat {
    meow(): void;
  }
   
  interface Dog {
    bark(): void;
  }
   
  function isCat(pet: Cat | Dog): pet is Cat {
    return (<Cat>pet).meow !== undefined;
  }
   
  function greet(pet: Cat | Dog) {
    if (isCat(pet)) {
      pet.meow();
    } else {
      pet.bark();
    }
  }