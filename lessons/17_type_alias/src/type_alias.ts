type Alias1 = string | string[] | null;
type Alias2 = { a: number } & { b: number };
type Alias3<T> = T[];

// semantic differenc between using alias to describe shape of an obj and an interface
// Alias is a name that refs the shape of the object.
// Interface creates a new type
// Rather use Interfaces to describe shapes of Obj because that is what they are for

// Use type aliases for complex types like Union or intersection
type Alias4 = {
    a: number;
    b: number;
};