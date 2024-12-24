export const typescriptQuestions = [
    {
        question: "1. What is TypeScript?",
        answer: "TypeScript is a strongly typed, object-oriented programming language developed and maintained by Microsoft. It is a superset of JavaScript, which means all valid JavaScript code is also valid TypeScript code. TypeScript adds features like static typing, interfaces, and advanced tooling capabilities to JavaScript. It compiles to plain JavaScript, making it compatible with any browser or JavaScript engine. Developers use TypeScript to write more predictable and maintainable code."
    },
    {
        question: "2. How is TypeScript different from JavaScript?",
        answer: "TypeScript is a superset of JavaScript, which means it includes all JavaScript features along with additional ones such as static typing, interfaces, and classes. TypeScript helps catch errors during development by providing type checking, while JavaScript is dynamically typed and errors may occur at runtime. TypeScript code must be compiled to JavaScript, whereas JavaScript can be directly executed by browsers or JavaScript engines."
    },
    {
        question: "3. What are the benefits of using TypeScript?",
        answer: "TypeScript offers several benefits, including: improved code quality through static typing, better tooling and autocomplete support in IDEs, early detection of errors during development, support for modern JavaScript features, and the ability to use interfaces and classes for better code organization. These features make it easier to build, debug, and maintain large-scale applications."
    },
    {
        question: "4. What is static typing in TypeScript?",
        answer: "Static typing in TypeScript means that variable types are known at compile time, allowing developers to define the type of data a variable can hold. For example, `let count: number = 5;` ensures `count` can only hold numeric values. This helps detect errors early, improves code readability, and reduces runtime bugs compared to dynamically typed languages like JavaScript."
    },
    {
        question: "5. How do you declare a variable in TypeScript?",
        answer: "Variables in TypeScript are declared using the `let`, `const`, or `var` keywords, similar to JavaScript. However, you can explicitly specify the type of the variable using a colon followed by the type. For example: `let name: string = 'John';` or `const isActive: boolean = true;`. If the type is not specified, TypeScript uses type inference to determine it."
    },
    {
        question: "6. What are TypeScript interfaces?",
        answer: "TypeScript interfaces define a contract or a structure for an object, describing the properties and their types that the object must have. They help enforce type checking and make code more predictable. For example: `interface User { name: string; age: number; }` defines a `User` interface, and objects conforming to this interface must have a `name` and an `age` property of the specified types."
    },
    {
        question: "7. How do you define a function in TypeScript?",
        answer: "Functions in TypeScript can be defined with type annotations for parameters and the return value. For example: `function add(a: number, b: number): number { return a + b; }`. In this case, both `a` and `b` must be numbers, and the function must return a number. TypeScript ensures type safety and prevents incorrect usage during development."
    },
    {
        question: "8. What are TypeScript generics?",
        answer: "Generics in TypeScript allow you to write reusable and type-safe components or functions that work with multiple types. They use type variables to capture the type provided by the user. For example: `function identity<T>(arg: T): T { return arg; }` works with any type, and the type is determined when the function is called. Generics make code more flexible and reusable."
    },
    {
        question: "9. What is the `any` type in TypeScript?",
        answer: "The `any` type in TypeScript allows a variable to hold any type of value, bypassing type checking. It is useful when the type is unknown during development or when migrating JavaScript code to TypeScript. For example: `let value: any = 'Hello'; value = 42;`. However, excessive use of `any` defeats the purpose of TypeScript's type safety and should be minimized."
    },
    {
        question: "10. What are TypeScript enums?",
        answer: "Enums in TypeScript are a way to define a set of named constants. They can be numeric or string-based. For example: `enum Direction { North, East, South, West }` creates a numeric enum where `North` is 0, `East` is 1, and so on. String enums can be created as `enum Color { Red = 'RED', Green = 'GREEN' }`. Enums improve code readability and maintainability by giving meaningful names to constant values."
    },
    {
        question: "11. What is type inference in TypeScript?",
        answer: "TypeScript uses type inference to automatically determine the type of a variable based on its value. For example, `let count = 10;` infers that `count` is of type `number`. While explicit type annotations are optional in such cases, they can still be used to make the code more readable. Type inference reduces boilerplate and ensures type safety."
    },
    {
        question: "12. What are type aliases in TypeScript?",
        answer: "Type aliases in TypeScript allow you to create custom type names using the `type` keyword. They are useful for simplifying complex types. For example: `type Point = { x: number; y: number; };` creates a type alias `Point`, which can then be used instead of rewriting the object structure repeatedly. Type aliases improve code readability and maintainability."
    },
    {
        question: "13. How does TypeScript handle null and undefined?",
        answer: "In TypeScript, `null` and `undefined` are considered distinct types. By default, variables cannot hold `null` or `undefined` unless explicitly allowed using the union type. For example: `let value: string | null = null;`. To enable stricter null checks, you can use the `strictNullChecks` option in the TypeScript configuration. This ensures better handling of null and undefined values and reduces potential runtime errors."
    },
    {
        question: "14. What is the difference between `interface` and `type` in TypeScript?",
        answer: "Both `interface` and `type` can be used to define object structures, but `interface` is specifically designed for extending and merging. For example, interfaces can be extended using `extends`, while types can use intersections. `type` is more versatile as it can represent primitives, unions, and tuples. Choose based on the specific use case: interfaces for objects and classes, and types for other scenarios."
    },
    {
        question: "15. What is the `readonly` modifier in TypeScript?",
        answer: "The `readonly` modifier ensures that a property of an object cannot be reassigned after its initialization. For example: `interface User { readonly id: number; name: string; }`. Here, `id` can only be assigned during object creation and cannot be modified later. This is useful for defining immutable data structures and preventing accidental changes."
    },
    {
        question: "16. What is the `unknown` type in TypeScript?",
        answer: "The `unknown` type is a safer alternative to `any`. While `unknown` allows storing any value, it requires explicit type checks before performing operations on the value. For example: `let value: unknown; if (typeof value === 'string') { console.log(value.toUpperCase()); }`. This ensures better type safety compared to `any`."
    },
    {
        question: "17. How can you enforce optional properties in TypeScript?",
        answer: "Optional properties in TypeScript can be defined using the `?` symbol. For example: `interface User { name: string; age?: number; }`. Here, `age` is optional, meaning objects of type `User` may or may not include it. This is useful for scenarios where certain properties are not always required."
    },
    {
        question: "18. How do you handle function overloading in TypeScript?",
        answer: "Function overloading in TypeScript allows you to define multiple function signatures with the same name but different parameter types. For example: `function add(a: number, b: number): number; function add(a: string, b: string): string;`. The implementation combines these signatures and handles the logic. Overloading provides type safety for functions with varying input types."
    },
    {
        question: "19. What is the `never` type in TypeScript?",
        answer: "The `never` type represents values that never occur. It is used for functions that throw errors or have infinite loops, ensuring they never return. For example: `function throwError(message: string): never { throw new Error(message); }`. This type helps catch logical errors in the code, as it signals unreachable code paths."
    },
    {
        question: "20. What is the purpose of the `as` keyword in TypeScript?",
        answer: "The `as` keyword is used for type assertions in TypeScript, allowing you to specify a more specific type for a value. For example: `let value: any = 'Hello'; let strLength = (value as string).length;`. Type assertions are useful when you are confident about the type of a value and want to override TypeScript's type inference."
    },
    {
        question: "21. How do you use union types in TypeScript?",
        answer: "Union types in TypeScript allow a variable to hold multiple types. They are defined using the `|` symbol. For example: `let value: string | number; value = 'Hello'; value = 42;`. This is useful when a variable can hold more than one type, such as API responses with varying formats."
    },
    {
        question: "22. What are tuple types in TypeScript?",
        answer: "Tuples in TypeScript are arrays with a fixed number of elements and specific types for each position. For example: `let person: [string, number] = ['John', 30];`. This ensures that the array structure is predictable and type-safe, making tuples ideal for representing ordered data like coordinates or key-value pairs."
    },
    {
        question: "23. What is a declaration file in TypeScript?",
        answer: "A declaration file, with a `.d.ts` extension, provides type information for JavaScript libraries so they can be used in TypeScript projects. For example, when using a library like Lodash, you can install its declaration file to enable type checking and autocompletion in your TypeScript code. Declaration files improve developer productivity and code safety."
    },
    {
        question: "24. What is the purpose of the `typeof` operator in TypeScript?",
        answer: "The `typeof` operator in TypeScript is used to obtain the type of a variable at runtime. For example: `let name = 'John'; let typeOfName = typeof name;`. It is particularly useful in type guards to perform runtime type checks and ensure safe operations on variables."
    },
    {
        question: "25. How does TypeScript support async/await?",
        answer: "TypeScript fully supports async/await syntax, allowing asynchronous operations to be written in a synchronous manner. The `async` keyword before a function ensures it returns a `Promise`, and the `await` keyword pauses execution until the Promise resolves. For example: `async function fetchData() { const data = await fetch('api/data'); console.log(data); }`. TypeScript adds type checking for better error detection in asynchronous code."
    },
    {
        question: "26. What is type narrowing in TypeScript?",
        answer: "Type narrowing refers to refining the type of a variable during runtime using type guards. For example: `if (typeof value === 'string') { console.log(value.toUpperCase()); }`. This helps TypeScript infer the type of a variable in different code branches, ensuring type safety and preventing runtime errors."
    },
    {
        question: "27. How do you enable strict mode in TypeScript?",
        answer: "Strict mode in TypeScript is enabled by setting `strict: true` in the `tsconfig.json` file. It enforces stricter type checking rules, such as preventing implicit `any`, enabling strict null checks, and more. Strict mode ensures better code quality and reduces runtime errors by catching potential issues during development."
    },
    {
        question: "28. What is the `abstract` keyword in TypeScript?",
        answer: "The `abstract` keyword in TypeScript is used to define abstract classes and methods. Abstract classes cannot be instantiated directly and serve as a base class for other classes. Abstract methods have no implementation and must be overridden in derived classes. For example: `abstract class Shape { abstract draw(): void; }`. This helps enforce a consistent structure in derived classes."
    }
];
