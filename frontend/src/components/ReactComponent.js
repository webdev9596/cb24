import React, { useState } from 'react'
import Banner from './Banner'
import Comments from './Comments'
import axios from 'axios';

const ReactComponent = ({ setVip, getRec }) => {

    const [uTy, setUty] = useState(false)

    const handleR = async (par) => {
        try {
            let payload

            if (uTy == true) {
                payload = {
                    cRec: par,
                    uTy: uTy
                }
            }
            else {
                payload = {
                    cRec: par
                }
            }
            const res = await axios.post('https://cb24.vercel.app/api/v1/webm/arc', payload)
            if(res.data){
                getRec()
            }
        } catch (error) {

        }
    }
    return (
        <div className='tutorial_outermost_conatiner'>
            <Banner item={'React'} />
            <div className="splash">Start Building Helpful Yet Friendly Guides About Online Development Resources for aspiring web developers!</div>
            <div className="tutorial_content_main">
                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">1.</span>What is <span onClick={() => handleR('r')}>R</span>eact?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>React is a JavaScript li<span onClick={() => handleR('b')}>b</span>rar<span onClick={() => handleR('y')}>y</span> devel<span onClick={() => handleR('o')}>o</span>ped by Facebook for buildin<span onClick={() => handleR('g')}>g</span> user interfaces, especially for single-page applications. It allows developers to create reusable UI components.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">2.</span>What are the features of React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>React features include Virtual DOM for efficient rendering, JSX for writing HTML-like syntax in JavaScript, component-based architecture, unidirectional data flow, and a strong community support system.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no" onClick={() => {
                        setUty(true)
                        setVip(false)
                    }}>3.</span>What is JSX in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML and is used in React to describe the structure of the user interface.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">4.</span>What are React components?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>React components are the building blocks of a React application. They are reusable pieces of code that represent parts of the UI and can be either class-based or functional.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">5.</span>What is the difference between state and props in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>State is a local, mutable data store managed within a component, while props are immutable data passed from a parent component to a child component.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">6.</span>What is the Virtual DOM in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The Virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to perform efficient updates by comparing differences (diffing) and only updating the changed elements in the real DOM.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">7.</span>What are React Hooks?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>React Hooks are functions that allow developers to use state and other React features in functional components. Common hooks include useState, useEffect, and useContext.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">8.</span>What is the useState hook in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The useState hook allows you to add state to functional components. It returns a state variable and a function to update that state.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">9.</span>What is the useEffect hook in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The useEffect hook is used to perform side effects in functional components, such as fetching data, directly updating the DOM, or starting/stopping timers.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">10.</span>What is the difference between functional and class components in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Class components use ES6 classes and can manage state and lifecycle methods, whereas functional components are simpler and rely on hooks for state and side effects.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">11.</span>What is Redux?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Redux is a state management library often used with React. It centralizes application state in a single store and ensures predictable state updates through actions and reducers.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">12.</span>What is the role of a reducer in Redux?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>A reducer is a pure function in Redux that determines how the application state changes in response to an action. It takes the current state and an action as arguments and returns a new state.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">13.</span>What is the context API in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The context API is a React feature that allows data to be passed through the component tree without using props. It is used for global state management, similar to Redux.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">14.</span>What are controlled components in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Controlled components are form elements in React where the value is controlled by React state. Input values are set by state, and changes trigger state updates via event handlers.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">15.</span>What is React Router?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>React Router is a library for routing in React applications. It enables navigation between different views or components without reloading the page, providing a seamless user experience.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">16.</span>What is lazy loading in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Lazy loading in React is a technique to load components or resources only when they are needed, reducing the initial load time of the application. React supports it using React.lazy and Suspense.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">17.</span>What is the difference between React.Fragment and a div?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>React.Fragment is a lightweight wrapper that allows you to group multiple elements without adding extra nodes to the DOM, unlike a div which renders as an actual DOM element.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">18.</span>What are higher-order components (HOCs) in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Higher-order components (HOCs) are functions that take a component as input and return a new component. They are used to reuse component logic across multiple components.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">19.</span>What are React portals?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>React portals allow rendering children into a DOM node outside of the parent component's hierarchy. They are useful for modals, tooltips, or other UI elements that need to escape DOM boundaries.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">20.</span>What is reconciliation in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Reconciliation is the process by which React updates the DOM by comparing the new Virtual DOM with the previous one and applying the minimal set of updates to the real DOM.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">21.</span>What is the purpose of keys in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Keys in React help identify elements in a list, ensuring that React can efficiently update or reorder items during re-rendering. Keys should be unique among siblings.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">22.</span>What is the use of PropTypes in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>PropTypes is a type-checking library in React used to validate the props passed to components. It ensures that the expected data types are passed to components, helping catch bugs during development.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">23.</span>What are pure components in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>A pure component in React is a component that implements the shouldComponentUpdate lifecycle method to perform a shallow comparison of props and state, preventing unnecessary re-renders.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">24.</span>What is the role of default props in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Default props in React provide default values for props that are not passed to a component. They ensure components have the necessary values to function correctly.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">25.</span>What is server-side rendering (SSR) in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Server-side rendering (SSR) is a technique where React components are rendered on the server and sent as HTML to the browser. It improves SEO and initial load times for web applications.</div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">26.</span>What is React Virtual DOM?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The Virtual DOM is a lightweight copy of the real DOM. React uses it to optimize rendering by updating only the parts of the DOM that have changed, rather than the entire DOM, improving performance and user experience.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">27.</span>What is the difference between a functional component and a class component in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>A functional component is a simple JavaScript function that returns JSX and does not have lifecycle methods or state (before React Hooks). A class component is a more complex React component that can have state and lifecycle methods.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">28.</span>What are React Hooks?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>React Hooks are functions that allow functional components to use state and lifecycle features. Examples include `useState`, `useEffect`, `useContext`, and custom hooks to manage component logic and side effects.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">29.</span>What is the purpose of the `useState` hook in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The `useState` hook allows you to add state to a functional component. It returns an array with the current state and a function to update that state.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">30.</span>What is the `useEffect` hook used for in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The `useEffect` hook is used to perform side effects in functional components, such as fetching data, updating the DOM, or subscribing to external events. It runs after every render by default.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">31.</span>What is the difference between `useEffect` and `componentDidMount` in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>`componentDidMount` is a lifecycle method in class components that runs once after the component is mounted. `useEffect` serves a similar purpose in functional components, but it runs after every render unless specified otherwise.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">32.</span>What is JSX in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML elements and components in a JavaScript file. JSX is transpired into React.createElement calls by Babel before rendering.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">33.</span>What is the purpose of `ReactDOM.render()`?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>`ReactDOM.render()` is used to render a React component into the DOM. It takes the component and a DOM element as arguments and mounts the component to the specified DOM node.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">34.</span>What is the `key` prop in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The `key` prop is used to identify which items in a list are changed, added, or removed. It helps React optimize the rendering process when dealing with lists of elements.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">35.</span>What are controlled components in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Controlled components are form elements where the React component controls the value of the input. The value of the input is bound to the component's state, and changes are handled through events.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">36.</span>What is the `useContext` hook in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The `useContext` hook is used to access values from the context without needing to wrap the component with a `Context.Consumer`. It allows you to pass data deeply through the component tree without prop drilling.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">37.</span>What is React Router?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>React Router is a library for routing in React applications. It allows you to handle navigation between different components and manage the application's URL, enabling client-side routing.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">38.</span>What is the difference between `HashRouter` and `BrowserRouter`?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>`HashRouter` uses URL hash (#) to manage routing, which allows for routing without server-side configuration. `BrowserRouter` uses the HTML5 history API and requires server-side configuration for proper routing.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">39.</span>What is the purpose of `useRef` in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>The `useRef` hook allows you to create a reference to a DOM element or a value that persists across re-renders. It is often used for accessing DOM elements directly or storing mutable values.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">40.</span>What is the `React.StrictMode`?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>`React.StrictMode` is a wrapper component that helps to identify potential problems in the application during development. It activates additional checks and warnings for components.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">41.</span>What is the difference between `componentDidMount` and `useEffect`?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>`componentDidMount` is a class component lifecycle method that runs once after the component is mounted. `useEffect` is a hook used in functional components that runs after every render, but its behavior can be controlled by specifying dependencies.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">42.</span>What is a higher-order component (HOC)?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>A higher-order component is a function that takes a component and returns a new component with enhanced functionality. It allows for code reuse and enhances the behavior of the wrapped component.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">43.</span>What are `defaultProps` in React?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>`defaultProps` is a property in React that allows you to specify default values for props in a component. If a prop is not provided, the default value is used.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">44.</span>What is prop drilling?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>Prop drilling refers to the process of passing data through multiple levels of components via props, which can become cumbersome in large applications. Context API or state management tools like Redux can help avoid this issue.
                    </div>
                </div>

                <div className="single_question_ans">
                    <div className="tutorial_question"><span className="question_no">45.</span>What is the purpose of the `shouldComponentUpdate` method?</div>
                    <div className="tutorial_answer"><span className="ans">Ans -</span>`shouldComponentUpdate` is a lifecycle method in class components that determines whether a component should re-render. It allows you to optimize performance by preventing unnecessary renders.
                    </div>
                </div>

            </div>
            {<Comments />}
        </div>
    )
}

export default ReactComponent
