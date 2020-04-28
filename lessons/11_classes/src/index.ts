class Robot {
    _colour: string;

    static availableColours = ['blue', 'pink'];
    static isColourAvailable(colour: string) {
        return Robot.availableColours.includes(colour);
    }

    // can declare Members in constructor

    //private can only be accessed from class,
    //protected can only be accessed from class or subclass
    // protected name: string;
    // can also be readonly
    // protected readonly name: string;

    // can't name setter same name as Property
    constructor(protected _name: string, colour: string) {
        this._colour = colour;
    }

    askName() {
        console.log(`My name is ${this.name}`);
    }

    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters`);
    }

    set colour(colour: string) {
        //can't access static members via this.
        // Only using the class directly eg. Robot.
        if (!Robot.isColourAvailable(colour)) {
            throw new Error(`Colour ${colour} is not available`);
        }
        this._colour = colour;
    }

    set name(value: string) {
        this._name = 'Mr_' + value;
    }

    get name() {
        return this._name + '_San';
    }

}

class FlyingRobot extends Robot {
    jetpackSize: number;
    //overide parent constructor
    // have to call super when overriding a constructor in child class
    constructor(name: string, colour: string, jetpackSize: number) {
        //super refers to constructor of parent class
        super(name, colour);
        this.jetpackSize = jetpackSize;
    }

    move(distance: number) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }

}

const robot = new Robot('Bob', 'pink');
robot.askName();

const flyingRobot = new FlyingRobot('Amy', 'pink', 6);
flyingRobot.move(10);

flyingRobot.name = 'Sarah';
console.log(`My name is ${flyingRobot.name}`);