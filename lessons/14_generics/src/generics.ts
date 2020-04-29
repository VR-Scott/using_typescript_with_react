//Generic Functions
function genericFunction<T>(x: T): T {
    return x;
}

const genericArrowFunction = <T>(x: T): T => x;

//Generic Interfaces
interface GenericInterface<T> {
    (a: T): T;
    someProp: T;
}

interface GenericInterface {
    <U>(a: U): U;
    someProp: T;
}

//generic Classes
class GenericClass<P> {
    constructor(public props: P) {}

    getProps(): P {
        return this.props;
    }
}

interface Expirable {
    expiryDate: Date;
}

interface ChocolateCake extends Expirable {}
interface VanillaCake extends Expirable {}

const chocoCakes = [
    {expiryDate: new Date()}
];

const vanillaCakes = [
    {expiryDate: new Date}
];

// const getExpiredItems = <Item extends Expirable>(items: Array<Item>) => {
//     const currentDate = new Date().getTime();
//     return items.filter(item => item.expiryDate.getDate() < currentDate);
// };

// can use interfaces to describe functions:
interface GetExpiredItemsFunction {
    <Item extends Expirable>(items: Array<Item>): Array<Item>;
}

const getExpiredItems: GetExpiredItemsFunction = items => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expiryDate.getDate() < currentDate);
};

//it inferes
// const expiredChocoCakes = getExpiredItems(chocoCakes);
// const expiredVanillaCakes = getExpiredItems(vanillaCakes);

// can also specify
const expiredChocoCakes = getExpiredItems<ChocolateCake>(chocoCakes);
const expiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCakes);

interface ShoppingCart <ItemId, Item> {
    items: Array<Item>,
    addItem(this: ShoppingCart<ItemId, Item>, item: Item): void;
    getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId): Item | undefined;
}

interface Item {
    id: number;
    price: number;
}
const cart: ShoppingCart<number, Item> = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
}