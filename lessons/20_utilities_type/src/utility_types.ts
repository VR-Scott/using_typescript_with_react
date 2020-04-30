// Some Type + Utility Type = New Type
//             (transformation)


// Partial

// Partial: Generic type that takes 1 generic type as Param <T> which is an Interface
//Partial makes all properties from <T> optional(?)

// interface A {
//     x: number;
//     y: number;
// }

// Partial<A> = {
//     x?: number;
//     y?: number;
// }

interface Starship {
    name: string;
    enableHyperjump: boolean;
}

const updateStarship = (id: number, starship: Partial<Starship>) => {};

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

const starships: Record<string, Starship> = {
    Explorer1: {
        name: "Explorer1",
        enableHyperjump: true
    },
    Explorer2: {
        name: "Explorer2",
        enableHyperjump: false
    }
};


// Pick:
// allows to creat a type based on other type
// with only Props from other type that we want

interface A {
    x: number;
    y: number;
    z: number;
}

// Pick<A, "x" | "z"> = {
//     x: number;
//     z: number;
// }

type StarshipNameOnly = Pick<Starship, "name">


// Omit:
// Opposite of Pick
// tell which props to emit

interface A {
    x: number;
    y: number;
    z: number;
}

// Omit<A, "x" | "z"> = {
//     y: number;
// }

type StarshipWithoutName = Omit<Starship, "name">


// Exclude<T, U>:
// Allow subtract 1 union type(U) from another(T)

// type A = string | string[] | undefined;
// Exclude<A, undefined> = string | string[]

type AvailableDrinks = 'Coffee' | 'Tea' | 'Orange Juice' | 'Lemonade';

let JohnsDrink: AvailableDrinks;
JohnsDrink = 'Coffee';

type DrinksJaneDoesntLike = 'Coffee' | 'Orange Juice';
// let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
// JanesDrink = 'Lemonade';


// Extract:

// Opposite of Exclude
type DrinksJaneLikes = 'Tea' | 'Lemonade' | 'Mohito';
let Janesdrink: Extract<AvailableDrinks, DrinksJaneLikes>;


// NonNullable<T>
// takes 1 generic type <T>, Should be a Union

// type A = string | string[] | null | undefined;
// NonNullable<A> = string | string[];

interface StarshipProps {
    colour?: 'blue' | 'red' | 'pink';
}

// function paintStarship(
//     id: number,
//     colour: NonNullable<StarshipProps['colour']>
// ) {}

// paintStarship(1, 'pink');


// ReturnType<T>
// type HelloWorldReturnType = ReturnType<typeof helloWorld>; //string

function paintStarship(
    id: number,
    colour: NonNullable<StarshipProps['colour']>
) {
    return {
        id,
        colour
    };
}

type PaintStarshipReturn = ReturnType<typeof paintStarship>;


// InstanceType<T>

// Takes 1 type para <T>, should be type of static side of class

type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance; 

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
    return class extends Base {
        deleted: boolean = false;
        delete() {}   
    }
}

class Car {
    constructor(public name: string) {}
}

class User {
    constructor(public name: string) {}
}

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableUserInstance = InstanceType<typeof DeletableUser>;
type DeletableCarInstance = InstanceType<typeof DeletableCar>;

class Profile {
    user: DeletableUserInstance;
    car: DeletableCarInstance;

    constructor(user: string, car: string) {
        this.user = new DeletableUser(user);
        this.car = new DeletableUser(car);
    }
}

const profile = new Profile('Griffin', 'GriffMobiel');

// ThisType<T>

interface MyObject{
    sayHello(): void;
}

interface MyObjectThis{
    helloWOrld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
    sayHello(){
        return this.helloWOrld();
    }
};

myObject.sayHello = myObject.sayHello.bind({
    helloWOrld() {
        return 'Hello World!';
    }
});

console.log(myObject.sayHello());