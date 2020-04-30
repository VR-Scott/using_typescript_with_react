// Declaration 1
// Declaration 2 => Single declaration
// Declaration 3

// Interface 1 + Interface 2 = Merged Interface

// Namespace 1 + Namespace 2 = Merged Namespace

// Modules are augmented (modified)


// Merging Interfaces

// represents that interface is somewhere inaccesible to us
//////////////////////////////////////////////
interface Cart {
   calculateTotal(): number; 
}
/////////////////////////////////////////////

interface Cart {
    x: number
}

// would like to overload calculateTotal()
interface Cart {
    calculateTotal(options: { discountCode: number }): number;
}

let myCart : Cart = {
    x: 1,
    // ? allows the argument to be optional as calculateTotal doesn't need to have the options
    calculateTotal(options?: { discountCode: number }) {
        if (options && options.discountCode) {
            //apply discount
        }
        return 1;
    }
}




//Merging Namespaces


// represents that Namespace is somewhere inaccesible to us
//////////////////////////////////////////////
namespace MyNamespace {
    export const x: number = 10;
    export interface SomeInterface {
        y: number;
    } 
 }
 /////////////////////////////////////////////

 namespace MyNamespace {
     export const getX = () => x;
     export interface SomeInterface {
         x: number;
     }
 }

 MyNamespace.x;
 MyNamespace.getX;

 const someInterface: MyNamespace.SomeInterface = {
     x: 1,
     y: 2
 };


//  using Namespaces to add to a function
 function someFunction() {
     return 10;
 }

 namespace someFunction {
     export const someProperty = 10;
 }

 someFunction.someProperty;

 //Using namespaces to add static members to enums

 enum Vegetables {
     Tomato = 'tomato',
     Onion = 'onion'
 }

 namespace Vegetables {
     export function makeSalad() {
         return Vegetables.Tomato + Vegetables.Onion;
     }
 }

 const salad = Vegetables.makeSalad();



//  Using namespace to add static members to class we can't access directly

class Salad {}

namespace Salad {
    export const availableDressings = ['olive oil', 'yoghurt'];
}

Salad.availableDressings.includes('olive oil');

//can only use the exported members


// Augmenting Modules
import * as React from 'react';
import {renderToString} from 'react-dom/server';
declare module 'react' {
    interface Component {
        helloWorld(): string;
    }
    // can only modify we can't add custom exports
}

React.Component.prototype.helloWorld = function () {
    return 'Hello World!';
};

class MyComponent extends React.Component {
    render() {
    return <div>{this.helloWorld()}</div>
    }
}

console.log(renderToString(<MyComponent />))