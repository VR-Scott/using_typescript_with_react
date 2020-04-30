// Some Type + Utility Type = New Type
//             (transformation)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var updateStarship = function (id, starship) { };
updateStarship(1, {
    name: 'Explorer'
});
// Required:
// Required: Generic type that takes 1 generic type as Param <T> which is an Interface
//Required makes all optional properties from <T> Required.
//Readonly:
//Readonly: Generic type that takes 1 generic type as Param <T> which is an Interface
//Readonly makes all properties from <T> Readonly. (can't override the properties)
//Record:
// Create maps(obj store values under keys)
// Record: Generic type that takes 2 generic type Params <K, T>
// 1st is the type of key
// 2nd is type of Value
var starships = {
    Explorer1: {
        name: "Explorer1",
        enableHyperjump: true
    },
    Explorer2: {
        name: "Explorer2",
        enableHyperjump: false
    }
};
var JohnsDrink;
JohnsDrink = 'Coffee';
var Janesdrink;
// function paintStarship(
//     id: number,
//     colour: NonNullable<StarshipProps['colour']>
// ) {}
// paintStarship(1, 'pink');
// ReturnType<T>
// type HelloWorldReturnType = ReturnType<typeof helloWorld>; //string
function paintStarship(id, colour) {
    return {
        id: id,
        colour: colour
    };
}
function Deletable(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.deleted = false;
            return _this;
        }
        class_1.prototype["delete"] = function () { };
        return class_1;
    }(Base));
}
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var DeletableCar = Deletable(Car);
var DeletableUser = Deletable(User);
var Profile = /** @class */ (function () {
    function Profile(user, car) {
        this.user = new DeletableUser(user);
        this.car = new DeletableUser(car);
    }
    return Profile;
}());
var profile = new Profile('Griffin', 'GriffMobiel');
var myObject = {
    sayHello: function () {
        return this.helloWOrld();
    }
};
myObject.sayHello = myObject.sayHello.bind({
    helloWOrld: function () {
        return 'Hello World!';
    }
});
console.log(myObject.sayHello());
