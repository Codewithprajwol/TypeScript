// t✅ { (): void }
// This means: "ex is a callable object type`" — like a function object that can be called.

// This is useful when you want to add properties to a function:

// ts
// Copy
// Edi
// type CallableWithProps = {
//   (): void;
//   description: string;
// };

// const myFunc: CallableWithProps = Object.assign(() => {
//   console.log("called!");
// }, { description: "This is a callable object" });

// myFunc(); // logs: "called!"
// console.log(myFunc.description); // "This is a callable object"//you can do someting like to put both function and properties of that function
