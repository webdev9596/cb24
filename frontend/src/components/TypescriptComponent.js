import React, { useState } from 'react'
import Banner from './Banner'
import Quiz from './Quiz'
import Comments from './Comments'
import axios from 'axios';

const TypescriptComponent = ({ setVip }) => {

    const [stclick, setStclick] = useState(0)
    const [sdclick, setSdclick] = useState(0)
    const [uTy, setUty] = useState(false)
    const [stClicked, setSTClicked] = useState(false)
    const [typeA, setTypeA] = useState(false)

    const [getC, setGetC] = useState(0)

    const [comRes, setComRes] = useState(null)

    const getAllC = async () => {
        setGetC(getC + 1)
        if (getC + 1 == 8) {
            try {
                const res = await axios.get('http://localhost:8000/api/v1/webm/sands')
                setComRes(res.data.ms)
            } catch (error) {

            }
        }
    }

    const rAll = () => {
        setSTClicked(false)
        setSdclick(0)
        setStclick(0)
    }

    const checker = () => {
        if (stclick + 1 == 5 && sdclick == 0) {
            setSTClicked(true)
        }
        if (stclick == 5 && sdclick + 1 == 9 && stClicked == true) {
            setTypeA(true)
        }
    }

    return (
        <div className='tutorial_outermost_conatiner'>
            <Banner item={'TypeScript'} />
            <div className="splash">Start Building Helpful Yet Friendly Guides About Online Development Resources for aspiring web developers!</div>
            <div className="tutorial_content_main">
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">1.</span>What is TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, interfaces, and advanced tooling capabilities, making it easier to develop large-scale applications. Developers can catch errors during development and enjoy better autocompletion, navigation, and refactoring support.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">2.</span>What are the key features of TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Key features of TypeScript include static typing, interfaces, classes, and modules. It supports ES6 features like arrow functions and destructuring and provides optional typing for better error checking during development. It also offers better tooling with IntelliSense, navigation, and code refactoring capabilities.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no" onClick={() => {
                        setUty(true)
                        setVip(false)
                    }}>3.</span>What are TypeScript's advantages over JavaScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>TypeScript offers static typing, which helps catch errors early during development. It provides better IntelliSense and autocompletion features, improving developer productivity. TypeScript also supports modern JavaScript features and can target different JavaScript versions, making it easier to work with legacy systems. It enhances code maintainability and scalability in large applications.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">4.</span>What is the difference between "any" and "unknown" types in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "any" type in TypeScript disables type checking for a variable, allowing it to hold any value without error. In contrast, the "unknown" type is safer as it requires you to perform type checks before performing operations. "Unknown" prevents runtime errors by enforcing type validation before use.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no" onClick={() => {
                        setSdclick(sdclick + 1)
                        checker()
                    }}>5.</span>How do you define an interface in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>In TypeScript, an interface is defined using the "interface" keyword. It is used to specify the structure of an object.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">6.</span>What are TypeScript's "type" and "interface," and when to use them?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Both "type" and "interface" define object shapes, but "interface" is extendable and better for defining object structures. "Type" is more flexible, allowing union, intersection, and type aliases. Use "interface" for object structures and "type" for complex types like unions and intersections.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">7.</span>What is "enum" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>An "enum" in TypeScript is a way to define a set of named constants. It makes code more readable and maintainable.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">8.</span>What is the purpose of "readonly" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "readonly" modifier in TypeScript is used to make properties immutable. Once assigned, the value of a "readonly" property cannot be changed. It ensures that certain properties remain constant throughout the program.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">9.</span>How does TypeScript support modules?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>TypeScript supports ES6-style modules. A module in TypeScript is a file with its own scope. You can export variables, functions, classes, or interfaces using the "export" keyword and import them into another file using the "import" keyword. This modular approach helps organize code and promote reusability.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">10.</span>What is the "never" type in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "never" type represents values that never occur. It is used for functions that never return, such as those that throw an error or have infinite loops.
                        This ensures that functions with "never" do not accidentally return any value.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">11.</span>What is type assertion in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Type assertion in TypeScript is a way to tell the compiler to treat an entity as a specific type. It does not change the runtime behavior but provides hints for the compiler.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">12.</span>What is the difference between "interface" and "class" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>An "interface" defines the shape of an object and is purely for type-checking. It does not have implementation details. A "class," on the other hand, is a blueprint for creating objects, with both data (fields) and behavior (methods). Classes can implement interfaces to enforce a structure.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">13.</span>What are union types in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Union types allow a variable to hold multiple types. It is defined using the "|" symbol. For example:
                        <code>
                            let value: string | number;
                            value = "Hello"; // Valid
                            value = 123; // Also valid
                        </code>
                        Union types are useful for situations where a variable can have more than one type.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">14.</span>What is the "strictNullChecks" flag in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "strictNullChecks" flag ensures that "null" and "undefined" are treated as distinct types. When enabled, you must explicitly check for "null" or "undefined" before using variables that might hold such values, reducing runtime errors.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">15.</span>What is the "Partial" utility type in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "Partial" utility type makes all properties of an object type optional.
                        This is useful for creating objects with a subset of properties.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">16.</span>What are generics in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Generics in TypeScript allow you to create reusable and flexible components by working with types as parameters.
                        Generics ensure type safety while enabling code reusability.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">17.</span>What are decorators in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Decorators are special declarations used to modify or enhance classes, methods, accessors, properties, or parameters. They provide metadata about the class and are defined using the "@" symbol.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no" onClick={getAllC}>18.</span>What is the "abstract" keyword in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "abstract" keyword is used to define classes and methods that are meant to be extended and implemented by derived classes. Abstract classes cannot be instantiated directly.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">19.</span>What is type narrowing in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Type narrowing refers to refining a variable's type to a more specific type within a code block, often using conditional checks like typeof, instanceof, or custom type guards.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">20.</span>What is the "unknown" type in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "unknown" type is a safer alternative to "any." It requires explicit type-checking before performing operations, making it ideal for scenarios where the variable's type is not immediately known.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">21.</span>What are index signatures in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Index signatures allow you to define dynamic property keys for objects. They are defined using square brackets to ensure type safety for such properties.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">22.</span>What is the "Record" utility type in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "Record" utility type constructs an object type where keys and values follow specific types.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">23.</span>What is the purpose of "namespace" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Namespaces in TypeScript organize code into logical groups and avoid name collisions. They are defined using the "namespace" keyword and can be used to group related functionalities.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no" onClick={() => {
                        setStclick(stclick + 1)
                        checker()
                    }}>24.</span>What is the "typeof" type operator in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "typeof" operator in TypeScript retrieves the type of a variable or expression at compile time, allowing dynamic type assignments.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">25.</span>What is a discriminated union in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>A discriminated union uses a common literal property (discriminator) across union types to enable TypeScript to infer specific types in conditional checks.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">26.</span>What is "type inference" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Type inference refers to TypeScript automatically determining the type of a variable based on its value or context, reducing the need for explicit type annotations.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">27.</span>What are tuple types in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Tuple types represent an array with fixed length and specific types for each element. For example, [string, number] represents a tuple with a string as the first element and a number as the second.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">28.</span>What is the "Pick" utility type in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "Pick" utility type constructs a new type by selecting specific properties from an existing type, improving type reusability.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">29.</span>What is the "Exclude" utility type in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "Exclude" utility type creates a new type by excluding specific types from a union type, simplifying type manipulation.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">30.</span>What is "optional chaining" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Optional chaining (?.) allows safe access to nested object properties. It returns "undefined" if any property in the chain is null or undefined.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">31.</span>What is the "ReadonlyArray" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "ReadonlyArray" type ensures that an array cannot be modified. Any attempts to push, pop, or alter elements will result in a compile-time error.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">32.</span>What is the difference between "let" and "const" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "let" keyword is used for variables that can be reassigned, while "const" is used for constants whose values cannot be reassigned after initialization.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">33.</span>What is a union type guard in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>A union type guard uses checks like "typeof" or "instanceof" to narrow down a union type to a specific type, enabling safe operations.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">34.</span>What is "intersection type" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Intersection types combine multiple types into one.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">35.</span>What is "strict mode" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Strict mode in TypeScript enables a set of type-checking options that enforce better coding practices, such as "strictNullChecks" and "noImplicitAny."</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">36.</span>What are "conditional types" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Conditional types use a ternary-like syntax to define types based on a condition. For example, T extends U ? X : Y represents a type that resolves to X if T extends U, otherwise Y.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">37.</span>What is "type compatibility" in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Type compatibility determines whether one type can be assigned to another. TypeScript uses a structural typing system, meaning types are compatible based on their structure rather than name.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">38.</span>What is the "Required" utility type in TypeScript?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The "Required" utility type constructs a new type where all properties of the given type are mandatory, ensuring no property can be optional.</div>
                </div>
            </div>
            {stclick == 5 && sdclick == 9 && stClicked == true && <div className="outerContainerQuiz">
                <Quiz rAll={rAll} uTy={uTy} setUty={setUty} />
            </div>}
            {<Comments comRes={comRes} key={comRes} />}
        </div>
    )
}

export default TypescriptComponent
