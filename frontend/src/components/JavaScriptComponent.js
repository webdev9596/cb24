import React from 'react'
import Banner from './Banner'
import Comments from './Comments'

const JavaScriptComponent = () => {
    return (
        <div className='tutorial_outermost_conatiner'>
            <Banner item={'JavaScript'} />
            <div className="splash">Start Building Helpful Yet Friendly Guides About Online Development Resources for aspiring web developers!</div>
            <div className="tutorial_content_main">
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">1.</span>What is JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>JavaScript is a dynamic, interpreted programming language that enables interactive web pages. It is primarily used for client-side scripting, although with Node.js, it can also run server-side. JavaScript enables tasks like form validation, dynamic content updating, animations, and asynchronous operations with promises and async/await. It is integral to modern web development and works alongside HTML and CSS.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">2.</span>What are the different data types in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>JavaScript supports several data types, including Primitive types like Undefined, Null, Boolean, Number, BigInt, String, and Symbol. It also supports non-primitive types like Object (which includes Arrays, Functions, and Dates). Primitive types are immutable and passed by value, while non-primitive types are mutable and passed by reference, allowing modifications to their properties.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">3.</span>What is the difference between let, var, and const?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The difference lies in their scope, hoisting behavior, and mutability. `var` is function-scoped and can be redeclared, while `let` is block-scoped and cannot be redeclared within the same block. `const` is also block-scoped but requires that the variable be assigned a value at declaration and cannot be reassigned, although its object properties can be modified.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">4.</span>What are closures in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Closures in JavaScript refer to a function having access to its own scope, the scope in which it was defined, and the global scope. This allows a function to "remember" the environment in which it was created, even after it is executed outside its original context. Closures are commonly used to create private variables and implement data encapsulation.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">5.</span>What is the difference between `==` and `===`?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The `==` operator compares values for equality but performs type coercion if the values are of different types, while `===` compares both the value and the type without type coercion. For example, `5 == '5'` would return `true`, while `5 === '5'` would return `false` because one is a number and the other is a string.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">6.</span>What is a promise in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states: Pending, Resolved (Fulfilled), and Rejected. Promises allow handling asynchronous code more cleanly by chaining `.then()` and `.catch()` methods to deal with success and error cases, avoiding callback hell.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">7.</span>What is the event loop in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The event loop in JavaScript is responsible for handling asynchronous operations like I/O tasks, events, and timers. It continuously checks the call stack and the event queue. When the call stack is empty, it pushes the first task from the event queue onto the stack for execution. This mechanism allows JavaScript to execute non-blocking code in a single-threaded environment.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">8.</span>What is a callback function in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>A callback function is a function that is passed as an argument to another function and is executed once the task in the outer function is completed. It is commonly used for handling asynchronous operations, like in event handling or when working with promises. Callbacks allow code to be executed after a certain task finishes, avoiding blocking the main thread.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">9.</span>What is the `this` keyword in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The `this` keyword refers to the context in which a function is executed. In global scope, `this` refers to the global object (window in browsers). Inside an object method, `this` refers to the object itself. The value of `this` can change depending on how a function is called (e.g., in event handlers or with `call`, `apply`, or `bind`).</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">10.</span>What are JavaScript callbacks and promises?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>JavaScript callbacks and promises are both methods used to handle asynchronous operations. A callback is a function passed as an argument to be executed after the task completes. However, callbacks can lead to "callback hell" in complex scenarios. Promises provide a cleaner way to handle async operations, allowing the chaining of `.then()` for success and `.catch()` for error handling.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">11.</span>What are JavaScript modules?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>JavaScript modules allow splitting code into smaller, reusable pieces, improving maintainability and avoiding global namespace pollution. There are two types of modules: ES6 modules (using `export` and `import`) and CommonJS (using `module.exports` and `require`). Modules can encapsulate code and share functionality across different parts of an application.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">12.</span>What are template literals in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Template literals in JavaScript are a way to embed expressions within string literals. They are enclosed by backticks (`` ` ``), and expressions can be embedded using `expression` syntax. Template literals support multi-line strings, string interpolation, and easier inclusion of variables, making string manipulation cleaner and more readable.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">13.</span>What are arrow functions in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Arrow functions are a concise way to write function expressions in JavaScript. Arrow functions do not have their own `this`, meaning they inherit the `this` value from the surrounding context, which makes them useful in certain situations, such as inside callbacks. They also do not have the `arguments` object and are generally shorter than traditional function expressions.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">14.</span>What is hoisting in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Hoisting is JavaScript's default behavior of moving declarations (but not initializations) to the top of their containing scope during the compilation phase. This means variables declared with `var` or functions declared with `function` are accessible before their actual declaration in the code. However, `let` and `const` are hoisted differently, where they are in a "temporal dead zone" until initialized.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">15.</span>What are `null` and `undefined` in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>`null` is a special value representing the absence of any object value, whereas `undefined` represents an uninitialized variable or an object property that doesn't exist. Although both represent "no value," `null` is an intentional assignment, while `undefined` typically occurs automatically in uninitialized variables or missing function arguments.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">16.</span>What is an Immediately Invoked Function Expression (IIFE)?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>An Immediately Invoked Function Expression (IIFE) is a function that is defined and executed immediately after its creation. It is commonly used to create a local scope and avoid polluting the global namespace. An IIFE is wrapped in parentheses, followed by another pair of parentheses to invoke it right away. It is often used in JavaScript for creating modules and closures.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">17.</span>What is the difference between `apply()`, `call()`, and `bind()`?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>`apply()`, `call()`, and `bind()` are methods used to set the value of `this` in JavaScript functions. `apply()` and `call()` invoke the function immediately, with `apply()` passing arguments as an array and `call()` passing arguments individually. `bind()`, on the other hand, returns a new function with the specified `this` context and arguments, but it doesn't invoke the function immediately.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">18.</span>What are generators in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Generators are a special type of function in JavaScript that can yield multiple values over time, allowing for iteration. A generator function is defined using the `function*` syntax and uses the `yield` keyword to return values one by one. Generators are particularly useful for handling asynchronous operations and large datasets because they allow pausing and resuming execution.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">19.</span>What is the spread operator in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The spread operator (`...`) is used to expand or unpack elements of an array or object. It allows for easy copying of elements, merging arrays, or spreading object properties into another object. For example, `let arr2 = [...arr1]` creates a shallow copy of `arr1`.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">20.</span>What is the rest parameter in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The rest parameter (`...`) allows you to represent an indefinite number of arguments as an array. It is used in function declarations to collect remaining arguments into a single array. For example, in the function `function sum(...numbers)`, `numbers` will collect all the arguments passed to `sum` into an array, allowing you to work with them as a group.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">21.</span>What is the `setTimeout()` function in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The `setTimeout()` function is used to execute a specified piece of code after a given delay in milliseconds. It takes two arguments: the callback function to execute and the delay in milliseconds.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">22.</span>What is the `setInterval()` function in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The `setInterval()` function is used to repeatedly execute a function at specified intervals in milliseconds. It takes two arguments: the callback function to be executed and the interval duration.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">23.</span>What is event delegation in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Event delegation is a technique in JavaScript where an event listener is attached to a parent element instead of individual child elements. The event listener captures events from child elements through event bubbling. This approach improves performance and allows handling dynamically added elements. For example, you can attach a single click event to a parent `ul` element to handle clicks on any `li` element.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">24.</span>What is the difference between synchronous and asynchronous JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Synchronous JavaScript executes operations sequentially, meaning each task must complete before moving on to the next one, blocking the thread. Asynchronous JavaScript, on the other hand, allows tasks to run independently of the main thread, enabling multiple operations to happen concurrently. This is essential for non-blocking operations like API calls, timers, and events, improving the performance of web applications.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">25.</span>What are the `map()` and `forEach()` methods in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The `map()` method creates a new array by applying a provided function to each element of the original array, while `forEach()` simply executes a provided function for each element without returning a new array. `map()` is useful when you need to transform data, while `forEach()` is typically used for iterating over arrays without modifying the original data.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">26.</span>What is the difference between `slice()` and `splice()` in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Both `slice()` and `splice()` are used for manipulating arrays, but they behave differently. `slice()` is used to create a shallow copy of a portion of an array without modifying the original array. It takes two arguments: the start index and the end index. `splice()`, on the other hand, modifies the original array by adding, removing, or replacing elements, and can take additional arguments for how many elements to remove or add.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">27.</span>What is the purpose of `localStorage` and `sessionStorage`?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>`localStorage` and `sessionStorage` are both web storage objects that allow storing data on the client side. `localStorage` persists data even when the browser is closed, while `sessionStorage` stores data only for the duration of the page session, meaning it is cleared when the browser is closed. Both offer key-value storage, but `localStorage` is more suitable for long-term data storage.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">28.</span>What are promises chaining in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Promise chaining allows multiple promises to be executed one after the other. Each `.then()` method returns a new promise, allowing you to chain multiple `.then()` calls to handle sequential asynchronous operations. If any promise in the chain fails, the error is caught by the `.catch()` method at the end of the chain. Chaining helps to write more readable and maintainable asynchronous code.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">29.</span>What are higher-order functions in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Higher-order functions in JavaScript are functions that can take other functions as arguments or return functions as results. They are used to abstract repetitive logic, improve code modularity, and handle callbacks and functional programming patterns. Examples include functions like `map()`, `filter()`, and `reduce()`, which take functions as arguments to perform operations on arrays.</div>
                </div>
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">30.</span>What is the `reduce()` method in JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The `reduce()` method in JavaScript applies a function to an accumulator and each element in an array (from left to right) to reduce it to a single value. It is commonly used for tasks like summing up values or combining data. The method takes two arguments: a callback function and an initial value for the accumulator.</div>
                </div>

            </div>
            {<Comments />}
        </div>
    )
}

export default JavaScriptComponent
