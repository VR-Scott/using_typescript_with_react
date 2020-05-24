"use strict";
// Declaration 1
// Declaration 2 => Single declaration
// Declaration 3
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
let myCart = {
    x: 1,
    // ? allows the argument to be optional as calculateTotal doesn't need to have the options
    calculateTotal(options) {
        if (options && options.discountCode) {
            //apply discount
        }
        return 1;
    }
};
//Merging Namespaces
// represents that Namespace is somewhere inaccesible to us
//////////////////////////////////////////////
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.x = 10;
})(MyNamespace || (MyNamespace = {}));
/////////////////////////////////////////////
(function (MyNamespace) {
    MyNamespace.getX = () => MyNamespace.x;
})(MyNamespace || (MyNamespace = {}));
MyNamespace.x;
MyNamespace.getX;
const someInterface = {
    x: 1,
    y: 2
};
//  using Namespaces to add to a function
function someFunction() {
    return 10;
}
(function (someFunction) {
    someFunction.someProperty = 10;
})(someFunction || (someFunction = {}));
someFunction.someProperty;
//Using namespaces to add static members to enums
var Vegetables;
(function (Vegetables) {
    Vegetables["Tomato"] = "tomato";
    Vegetables["Onion"] = "onion";
})(Vegetables || (Vegetables = {}));
(function (Vegetables) {
    function makeSalad() {
        return Vegetables.Tomato + Vegetables.Onion;
    }
    Vegetables.makeSalad = makeSalad;
})(Vegetables || (Vegetables = {}));
const salad = Vegetables.makeSalad();
//  Using namespace to add static members to class we can't access directly
class Salad {
}
(function (Salad) {
    Salad.availableDressings = ['olive oil', 'yoghurt'];
})(Salad || (Salad = {}));
Salad.availableDressings.includes('olive oil');
//can only use the exported members
// Augmenting Modules
const React = __importStar(require("react"));
const server_1 = require("react-dom/server");
React.Component.prototype.helloWorld = function () {
    return 'Hello World!';
};
class MyComponent extends React.Component {
    render() {
        return React.createElement("div", null, this.helloWorld());
    }
}
console.log(server_1.renderToString(React.createElement(MyComponent, null)));
