 //? utility types are predefined generic types that can perform common type transformations in typescript. these types are built into typescript and are used to manipuloate other types and create new types. utility types can create new types by applying tranformations to existing types. they are a powerful feature of typeScript adn help avoid code duplication and make it easier ot write generic code.

 //? how do utility types works behind the scenes
 //? all these utiilty functions are prebuild typescript mapped types and conditional types or combination of these two.. these are library or function that are build inside typescript withoout thinking about implementation from scratch.

 //mapped types
 //Partial type implementation
 type Partial<T>={
    [P in keyof T]?:T[P];
 }

 //conditional types
 //Exclude type implementation

 type Exclude<T,U>=T extends U? never:T;
