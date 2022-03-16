# BASICS

## DOM
The **Document Object Model** (_DOM_) is the tree representation of the objects or nodes that are part of the structure and content of a document on the web

## Accessibility

1. make the structure always semantic:
 - use the correct elements, for the purpose
 - declare html language at the head
 - declarative links
 - use headings, paragraphs and lists
 - use tags like header, nav, article, main, footer, aside, figure
 - alt attr for images
 - label for input elements
 - meaningful text
 - aria tags
    - aria-label = gives a descriptive label to readt out by the screenreader
    - aria-required = screen readers hints the user that a specific input needs to be filled
    - aria-hidden = something that the screen reader won't read
  -  Contrast, text is easy to read, so the background and font color have a good contrast level

always keep in mind on screen readers access the app for the people that rely on them


# CSS

###  universal selector
selector that matches any element type's name instead of selecting elemens of particular type

### Box model
content > padding > border > margin

### Class and ID Selectors
- .className, can point to one or more items
- .idName, points to an individual item

### CSS specificity
is a rank that decided style declaration to be used to an element.
- Global selector `* {}`: 0 points
- Type selector `div {}` / Pseudo-elements `::selection`: 1 points
- Class selector `.class {}` / pseudo-class `:hover {}` / attr selector `[href='#']`: 10 points
- ID selector `#id {}`: 100 points
- Inline attributes `<hr style="...styles" />`: 1.000 points
- !Important rule: 10.000 points

### Pseudo-elements
**pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s)
- `::after`
- `::before`
- `::placeholder`

### Pseudo-classes
**_pseudo-class_** is a keyword added to a selector that specifies a special state of the selected element(s).
- `:hover`
- `:visited`
- `:nth-child`
- `:first-child`
- `:first-of-type`

### Display
La propiedad `display` hace dos cosas. Lo primero es determinar si la caja a la que se aplica actúa como en línea o en bloque.

#### Flexbox
`display: flex` hace de la caja una caja a nivel de bloque, y también convierte a sus hijos en elementos flexibles.
Flexbox es un mecanismo de diseño para diseños unidimensionales, es decir, disposición en un solo eje, ya sea horizontal o vertical. De forma predeterminada, flexbox alineará los elementos hijos del elemento uno al lado del otro, en la dirección en línea, y los estirará en la dirección del bloque para que todos tengan la misma altura.

### Grid
Grid es similar en muchos aspectos a **flexbox**, pero está diseñado para controlar diseños de varios ejes en lugar de diseños de un solo eje (espacio vertical u horizontal).

### z-index
is used to specify the stack order of elements that overlap each other

### Translate
is acss transform property, on changing, browser reflow or repaint are not triggered
GPU is used for this kind of transformations

### Position

- Fixed
- Static
- Absolute
- Relative
- Sticky

###Preporccesors and Postprocessor
Sass - Less - stylus

more scalable code, they can define variables, mixins, functions
and the syntax allows to wrap an element rules and also nesting selectors, later this is compiled to normal css rules

PostCss
Plugin to parse the css and add vendor prefixes to css, also it adds pollyfills to support the targeted browsers

### BEM
it is a methodology for naming conventions for css classes
Block - Element - Modifier

this improves the css, making it more clean, and it is a way to prevent collisions and repeating names for the clases

## CSS for react apps

###  Global CSS
a global file that applies to the entire app

cons:
- naming gets hard when the app grows  (even using BEM)
- is commonly end in a large css bundle

###  CSS modules
it is scoped to individual components

to share styles from another component:

```css
.page {
	color: red;
	composes: className from "./shared.css";
}
```

pros:
- it does provide a way to avoid same classes names
- no collisions
- they can reduce the bundle size if code splitting is used

cons:
- plain css so js can not change it dynamically

###  Preprocessors
sass, stylus, less

pros:
- it can define variables, mixins, functions
- code more concise

cons:
- decoplued from js


### CSS in JS

styled components, jss, emotion

it encapsulates the css inside the js, without the need to require an external css file, it has some props as:
-  Local scope, preventing conflicts and overrides
- Encapslation, all css for an specific component is in one place
- Reusability
- Dynamic - we can use js to manipulate the styles

###  Utility class libraries
tailwind, windi

pros:
- the prodive a huge collection of utility classes that will help to rapidtly build out a ui

cons:
- extra config is necessary
- no pre-build components

###  CSS frameworks
boostrap, bulma, foundation

pros:
- pre-build components

cons:
- large bundle size

###  Component Library
React boostrap, material design, mantine

pros:
- pre-build components (css and functional)

# JS

## Scope
Scope in JavaScript refers **to the current context of code**,

Global scope
lexical scope
block scope

## const / let / var

there are three ways to declare a variable:

- **const:** it is a constant value, its value can not change in any moment, it has a block scope.
- **let:** it is a variable that can change its value, it has a block scope.
- **var:** it is a variable that can change its value, it has a local scope (function scope).

## Hoisting

In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

**Note:** JavaScript only hoists declarations, not the initializations.

## Closures

Basically it is a function that has access to the variables that are out of its scope, it has access to the lexical scope event when it is executed outside of its scope.

```js
function  outerFunc() {
  let  outerVar = 'I am outside!';
  function  innerFunc() {
    console.log(outerVar); // => logs "I am outside!"
  }
  return  innerFunc;
}

function  exec() {
  const  myInnerFunc = outerFunc();
  myInnerFunc();
}

exec();
```

## Callbacks

functions that are passed as parameters

## HOCs
Higher Orders Functions are functions that perform operations on other functions.
In this definition,  _operations_  can mean taking one or more functions as an argument OR returning a function as the result.

## Promises
Promise is **a placeholder for a value that will be available in the future**, allowing us to handle the result of an asynchronous task once it has completed or encountered an error.

## Nullish Operator
The  **nullish coalescing operator (`??`)**  is a logical operator that returns its right-hand side operand when its left-hand side operand is  `null` or  `undefined`, and otherwise returns its left-hand side operand.

This can be seen as a special case of the  [logical OR (`||`) operator, which returns the right-hand side operand if the left operand is  _any_  falsy value, not only  `null`  or  `undefined`. In other words, if you use  `||`  to provide some default value to another variable  `foo`, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g.,  `''`  or  `0`). See below for more examples.

### Falsy Values

`false` - The keyword  `false`
`0` - The  `Number`  zero (so, also  `0.0`, etc., and  `0x0`).
`-0` -The  [`Number`]  negative zero (so, also  `-0.0`, etc., and  `-0x0`).
`0n` - The  `BigInt`  zero (so, also  `0x0n`). Note that there is no  `BigInt`  negative zero — the negation of  `0n`  is  `0n`.
`""`,  `''`,  ` `` ` - Empty string value
null - the absence of any value.
undefined - the primitive value.
NaN

```js
const foo = null ?? 'default string';
console.log(foo);
```

## Bubbling

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

### event.target
A handler on a parent element can always get the details about where it actually happened.
The most deeply nested element that caused the event is called a  _target_  element, accessible as  `event.target`.

Note the differences from  `this`  (=`event.currentTarget`):

-   `event.target`  – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
-   `this`  – is the “current” element, the one that has a currently running handler on it.

The standard  DOM Events describes 3 phases of event propagation:

1.  Capturing phase – the event goes down to the element.
2.  Target phase – the event reached the target element.
3.  Bubbling phase – the event bubbles up from the element.


## Event Loop
The event loop is a constantly running process that monitors both the callback queue and the call stack.
If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack. If the callback queue is empty, nothing will happen.

in a shallow view it is composed by:

- Call Stack
- WEB API calls
- Microtask Queue
- Queue task

### queueMicrotask()

A **microtask** is a short function which is executed after the function or program which created it exits _and_ only if the JavaScript execution stack is empty, but before returning control to the event loop being used by the user agent to drive the script's execution environment.

**Note:** Microtask are the type os task generated by the promises, or async/await calls.
**Note:** Microtask must be used carefully, as they are in the top of importance, even before render, so it they have a long work or many of them are created, event loop will be blocked until all of them have finished.
```js
const hello = 'hola'
console.log('var', hello)

function test() {
  console.log('test function')
  setTimeout(() => {
    console.log('timeout callback')
  }, 0)
}

test()
queueMicrotask(() => {
	console.log('this is the microtask')
});
```

```js
const messageQueue = [];

let sendMessage = message => {
  messageQueue.push(message);

  if (messageQueue.length === 1) {
    queueMicrotask(() => {
      const json = JSON.stringify(messageQueue);
      messageQueue.length = 0;
      fetch("url-of-receiver", json);
    });
  }
};
```

## Arrow functions
**As mentioned earlier, the arrow function doesn’t have its own `this` value, It uses the `this` value of the enclosing lexical scope.**

ES6 way to declare a function, anyway dispact the fact its enhanced sintax, there are some cases in which an arrow function should not be used.  An arrow function doesn’t have its own `this` value and the `arguments` object. Therefore, you should not use it as an **event handler**, a **method of an object literal**, a **prototype method**,  when you have a **function that uses the `arguments` object.**, or as a  **constructor function**.

## Prototype
The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

### Prototypal inheritance
JavaScript doesn’t use  **classical inheritance**. Instead, it uses  **prototypal inheritance**.
In prototypal inheritance, an object “inherits”  properties  from another object via the  prototype linkage.

### This
`this` is a reserved word  that references the object of which the function is a property. In other words, the `this` references the object that is currently calling the function.

**Note:** Objects does not bind the this keyword, normal functions do.

for constructor functions there are two ways to make sure the new keyword is being used:
```js
function Car(brand) {
	if (!(this  instanceof Car)) {
		throw  Error('Must use the new operator to call the function');
	}
	this.brand = brand;
}
```
ES6: allows to use that new.target

```js
function Car(brand) { 
	if (!new.target) {
		throw  Error('Must use the new operator to call the function');
	}
	this.brand = brand;
}
```

Also the this keyword in some cases can be bound explicity, by using .bind, .call, .apply

```js
const animal = {
  getAnimalName(age) {
    return `the animal is a ${this.name} and its ${age} years old`
  }
}

console.log(animal.getAnimalName.bind({ name: 'Lyon'}, 10)())
```

## Promises
A Promise is a function that is for a value not necessarily known at the creation moment. It allows associating handlers that will act asynchronously over the actual value in case of success or the failure reason in case of failure.

```js
let ownPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("¡Success promise!");
  }, 250);
});

ownPromise.then((successMessage) => {
    console.log("¡correct! " + successMessage);
}).catch(err => {
	console.log(err)
});
```

## Async / await
`async`/`await` keywords that build on top of promises, allowing you to write asynchronous code that looks more like synchronous code and more readable. Technically speaking, the `async` / `await` is syntactic sugar for promises.

## Cookies
A cookie is a small piece of text sent to your browser by a website you visit. It helps the site remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.

Cookies are quite limited compared to some modern alternatives to storing data in the browser like `localStorage` or `sessionStorage`.

```js
document.cookie = 'dark_mode=true; expires=Fri, 26 Feb 2021 00:00:00 GMT' // expires on a specific date
```

```js
document.cookie = 'dark_mode=true; max-age=604800 path=/about' // expires 1 week from now
```

To delete a cookie in JavaScript, just set the  `expires`  attribute to a date that's already passed:

```js
document.cookie = 'dark_mode=true; expires=Sun, 14 Feb 2021 00:00:00 GMT';
```

## Local and Session storage

LocalStorage and sessionStorage are part of Web Storage API, they allow to store data in the browser, very similar as cookies do.

#### Local Storage
It stores information that will remain stored for an indefinite time, no matter if the browser is closed.

```js
localStorage.setItem("Nombre", 'Andres');
```

```js
localStorage.getItem("Nombre");
```

```js
localStorage.removeItem("Nombre");
```

#### Session Storage
Stores the session data and those are removed when the browser is closed.

```js
sessionStorage.setItem("Nombre", 'Andres');
```

```js
sessionStorage.getItem("Nombre");
```

```js
sessionStorage.removeItem("Nombre");
```

## Critical rendering path

The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen. Optimizing the critical render path improves render performance.The critical rendering path includes the  Document Object Model (DOM),  CSS Object Model  (CSSOM), render tree and layout.

1. The document object model is created as the HTML is parsed. The HTML may request JavaScript, which may, in turn, alter the DOM. 

2. The HTML includes or makes requests for styles, which in turn builds the CSS object model. 
- Painting an unstyled page, and then repainting it once styles are parsed would be bad user experience. For this reason, CSS is render blocking, to optimize the CSSOM construction, remove unnecessary styles, minify, compress and cache it, and split CSS not required at page load into additional files to reduce CSS render blocking.
3. The browser engine combines the two to create the Render Tree. 
 - The render tree only captures visible content. The head section (generally) doesn't contain any visible information, and is therefore not included in the render tree. If there's a display: none; set on an element, neither it, nor any of its descendants, are in the render tree.
4. Layout determines the size and location of everything on the page. 

- Layout performance is impacted by the DOM -- the greater the number of nodes, the longer layout takes. Layout can become a bottleneck, leading to jank if required during scrolling or other animations. While a 20ms delay on load or orientation change may be fine, it will lead to jank on animation or scroll. Any time the render tree is modified, such as by added nodes, altered content, or updated box model styles on a node, layout occurs.

To reduce the frequency and duration of layout events, batch updates and avoid animating box model properties.
5. Once layout is determined, pixels are painted to the screen.

Optimizing the critical rendering path improves the time to first render. Understanding and optimizing the critical rendering path is important to ensure reflows and repaints can happen at 60 frames per second, to ensure performant user interactions and avoid jank.

### Optimizing for CRP

Improve page load speed by prioritizing which resources get loaded, controlling the order in which they are loaded, and reducing the file sizes of those resources. Performance tips include:
 1. minimizing the number of critical resources by deferring their download, marking them as async, or eliminating them altogether.
 2. optimizing the number of requests required along with the file size of each request
 3. optimizing the order in which critical resources are loaded by prioritizing the downloading critical assets, shorten the critical path length.

## NPM

### semver

MAJOR.MINOR.PATCH

1. The MAJOR version, when there is a new incompatible change
2. THE MINOR version, when there is new functionallity compatible with previous versions
3. PATCH, when a bugfix is introduced 

# React

## State and Lifecycle

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
The three phases are: **Mounting**, **Updating**, and **Unmounting**.

### Mounting

Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

1.  `constructor()`
*The `constructor()` method is called before anything else, when the component is initiated, and it is the natural place to set up the initial `state` and other initial values.*
*The `constructor()` method is called with the `props`, as arguments, and you should always start by calling the `super(props)` before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (`React.Component`).*
2.  `getDerivedStateFromProps()`
*The  `getDerivedStateFromProps()`  method is called right before rendering the element(s) in the DOM.*
*This is the natural place to set the  `state`  object based on the initial  `props`.*
*It takes  `state`  as an argument, and returns an object with changes to the  `state`.*
3.  `render()`
*The `render()` method is required, and is the method that actually outputs the HTML to the DOM.*
4.  `componentDidMount()` 
*The  `componentDidMount()`  method is called after the component is rendered.*
*This is where you run statements that requires that the component is already placed in the DOM.*

The  `render()`  method is required and will always be called, the others are optional and will be called if you define them.

### Updating

The next phase in the lifecycle is when a component is  _updated_.

A component is updated whenever there is a change in the component's  `state`  or  `props`.

React has five built-in methods that gets called, in this order, when a component is updated:

1.  `getDerivedStateFromProps()`
2.  `shouldComponentUpdate()`
*In the  `shouldComponentUpdate()`  method you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is  `true`.*
3.  `render()`
*The `render()` method is of course called when a component gets _updated_, it has to re-render the HTML to the DOM, with the new changes.*
4.  `getSnapshotBeforeUpdate()`
 *the `getSnapshotBeforeUpdate()` method you have access to the `props` and `state`  _before_ the update, meaning that even after the update, you can check what the values were _before_ the update.*
5.  `componentDidUpdate()`
*The `componentDidUpdate` method is called after the component is updated in the DOM.*

### Unmounting

The next phase in the lifecycle is when a component is removed from the DOM, or  _unmounting_  as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:

1.   `componentWillUnmount()`
*The `componentWillUnmount` method is called when the component is about to be removed from the DOM. It can be used as a cleaner function*

### Error Boundaries

Error boundaries are React components that **catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI** instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them

**Note:** Error boundaries do  **not**  catch errors for:
-   Event handlers
-   Asynchronous code (e.g.  `setTimeout`  or  `requestAnimationFrame`  callbacks)
-   Server side rendering 

it has two lifecycle methods: 
- `getDerivedStateFromError()` to render a fallback UI after an error has been thrown.
- `componentDidCatch()` to log error information.

## List - Keys

Keys help React identify which items have changed, are added, or are removed.

sometimes the index of a map is used, but this should be used as last resort and only if the list is not going to change. If index is used and the items change (an element is removed or inserted, the list is not sorted or filtered) react is comparing the original tree with the subsequent tree making use of each item keys, but as the list has changed those keys does not correspond correctly and the list will be mutated incorrectly.

## Forms

### Controlled components
An input form element whose value is controlled by React in this way is called a “controlled component”.

### Controlled components
In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input, so uncontroller components is where form data is handled by the DOM itself.

here a ref can be ceated to access the inputs data:

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
   }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.input.current.value);      	
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## VirtualDOM

The Virtual DOM was a strategy that appeared to solve the modifications or mutations that the DOM suffers when using a web or mobile application. Rendering the entire document tree is too costly as applications become more complex; by mutations, we can understand any change that the DOM can undergo: an insertion/modification/deletion of an element or its properties.

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM, this process is called reconciliation.

### Is the Shadow DOM the same as the Virtual DOM?

No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs

## Render
The rendering process is divided into two phases:
- Render Phase
- Commit Phase

#### First Render
1. React will start at the root of the component tree and goes deeper to the inner components
2. While traversing react will call the createElement() method for each component, turning JSX into React elements (all of them will compose the Virtual Dom).
3. Once the Virtual Dom is ready, it is handed over to the commit phase
4. in the commit phase, react elements are applied to the DOM using the react-dom package

#### Re-render
1. React will start at the root of the component tree and goes deeper to the inner components, to find the components that have been flagged as updated components
***Note:** A component can flag itself by calling the useState setter function or the useReducer dispatch function*
2. Then for the flagged components react will call the createElement() method turning JSX into React elements (all of them will compose the new Virtual Dom).
3. Once the new Virtual Dom is ready, react will diff it to the previous Virtual DOM (Reconcilliation)
4. A list is created with all the changes that need to be made to the dom
5. list of changes is handed over to the commit phase, where changes are actually applied to the DOM

Rendering is a process that is triggered by a change of state in some component of your application.

**Note: *Updates are caused by a parent re-render, state change, or context change*.**

-   It will collect from the root of your App all the components that requested a re-render because their state or their props changed.
-   It will invoke these components
    1.  If you use  `function components`  it will invoke the function itself, something like  `Header(props)`.
    2.  If you use  `class components`  it will invoke  `YourComponent.render()`.

Even when the process's name is rendering, at this point, the DOM has not been modified or altered,

## Reconciliation

Once the re-rendering has happened, React has the context of two versions of the `React.createElement` output, the version executed before the state change occurred, and the version executed after the state has changed.

At this point two objects are describing the UI, React through a heuristic algorithm will be able to determine which elements need to be represented again, looking for the minimun number operations to be done to transform one tree into another. React uses a (heuristic) diffing algorithm of the order O(n) based on two assumptions:

1.  Two elements of different types will produce different trees.
2.  The developer can hint at which child elements may be stable across different renders with a  `key`  prop.

## Diffing alogrithm base

**1. Elements Of Different Types:**
Elements that changed type must be recreated, and all of its children too.
*When tearing down a tree, old DOM nodes are destroyed. Component instances receive `componentWillUnmount()`. When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive `UNSAFE_componentWillMount()` and then `componentDidMount()`. Any state associated with the old tree is lost.*
    
**2. DOM Elements Of The Same Type:**
Changes within the attributes of an element are replaced, without unmounting the element.
    
**3. Component Elements Of The Same Type**
When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls `UNSAFE_componentWillReceiveProps()`, `UNSAFE_componentWillUpdate()` and `componentDidUpdate()` on the underlying instance.
    
**4. Recursing On Children**
Updates within child elements that use  `key`  as attributes are compared and only new items are represented.

After React calculated all the changes that should be made in the application tree, `react-dom` appears for the browser and `react-native` for the mobile platforms, which make the modifications to the browser or mobile app API. Synchronously React will clean up the past layout effects, run the new layout effects, then the browser will paint the DOM, after that, React will clean up the past effects and mount the new ones;

## Stale closure
The stale closure problem occurs when a closure captures outdated variables.

An efficient way to solve stale closures is to correctly set the dependencies of React hooks. Or, in the case of a stale state, use a functional way to update the state.

```js
useEffect(() => {
  setInterval(() => { 
    // this anonymus function (closure) will capture the value of count
    // at first render, and because the missing dependency it will always
    // be the same, and it will be loggin 0, no matter if count has changed
    console.log(count)
  }, 1000);
}, []) // here the count var is a missing dependency
```

```js
const  getCounter = () => {
  function fetchData() {
      getData().then((res) => {
      setCount(count  +  1) // count was caputured on a specific render, so if the user click continously the count value will be outdated
    })
  }
  fetchData()
}
```

## PATTERNS

## HOCs

A higher-order component (HOC) is an advanced technique (pattern) in React for reusing component logic. Concretely, **a higher-order component is a function that takes a component and returns a new enhanced component.**

They are an abstraction that allows us to define some logic in a single place and share it across many components. This is where higher-order components excel.
some popular libraries use this patter, `connect(compoent)` from react-redux, `withRouter(component)` from react-router.

## Render Props
The term “render prop” refers to a (patter) technique for sharing code between React components using a prop whose value is a function.
A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic, some libraries that use render props include React Router, Downshift and Formik.

Using a render prop can negate the advantage that comes from using `React.PureComponent`if you create the function inside a `render` method. This is because the shallow prop comparison will always return `false` for new props, and each `render` in this case will generate a new value for the render prop.

## Context
Context provides a way to pass data through the component tree without having to pass props down manually at every level, helping to solve the issue of prop drilling.

Creating a context involves three steps:

1. Create the context
 ```js
const awesomeContext = React.createContext(defaultValue)
 ```
2. Provide the context value
```jsx
<awesomeContext.Provider value={stateToBeShared}>
 // components that are going to consume the context
<awesomeContext.Provider />
 ```
3. Consume the contex value
- for functional components
```jsx
<awesomeContext.Consumer value={stateToBeShared}>
 {(valueToBeUsed) => (
	<p>I´m using the context {valueToBeUsed}</p>
 )}
<awesomeContext.Consumer />
 ```
- for classes components
 ```js
class ComponentUsingContext {
   static contextType = awesomeContext
   render() {
   return (
	<p>I´m using the context {this.context.valueToBeUsed}</p>
   )
  }
}
 ```

**Note:** By default context will re-render all of its children when the state has been updated, not just the component that are consuming the context value, anyway memoizing in between components would help with this to make only context consuming components are the ones that are re-render.


## useState

When calling the setter of useState hook, a new value is needed (this includes objects and arrays, the must be a new reference)

### useState and Render
- The setter function from a useState hook will cause the component to re-render
- The Exception is when update a State Hook to the same value as the current state.
     - Same value after the initial render? The component will not re-render
     - Same value after re-renders? React will render that specific component one more time and then bails out from any subsequent renders


## useReducer
When calling the dispatch function of useReducer hook, a new value is needed (this includes objects and arrays, the must be a new reference)

### useState and Render
- The dispatch function from a useReducer hook will cause the component to re-render
- The Exception is when update a State Hook to the same value as the current state.
     - Same value after the initial render? The component will not re-render
     - Same value after re-renders? React will render that specific component one more time and then bails out from any subsequent renders


# Redux

## State
_State_ (also called the _state tree_) in the Redux API it usually refers to the single state value that is managed by the store and returned by `getState()`. It represents the entire state of a Redux application, which is often a deeply nested object.

## Store

```js
type Store = {
  dispatch: Dispatch
  getState: () => State
  subscribe: (listener: () => void) => () => void
  replaceReducer: (reducer: Reducer) => void
}
```

A store is an object that holds the application's state tree. There should only be a single store in a Redux app, as the composition happens on the reducer level.

## Actions
An  _action_  is a plain object that represents an intention to change the state. Actions are the only way to get data into the store. Any data, whether from UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions.

Actions must have a  `type`  field that indicates the type of action being performed, also is commonly used the `payload` key, that will carry any data related to the action.

## Action Creator
An  _action creator_  is a function that creates an action. Do not confuse the two terms, an action is a payload of information, and an action creator is a factory that creates an action.
Calling an action creator only produces an action, but does not dispatch it. You need to call the store's `dispatch` function to actually cause the mutation.

## Reducer
A _reducer_ (also called a _reducing function_) is a function that accepts a state and an action, them it calculates a new state given the previous state and an action.
They must be _pure functions_—functions that return the exact same output for given inputs. They should also be free of side-effects.

## Dispatching Function
A  _dispatching function_  (or simply  _dispatch function_) is a function that accepts an action or an  async action; it then may or may not dispatch one or more actions to the store.

We must distinguish between dispatching functions in general and the base  `dispatch`function provided by the store instance without any middleware.

The base dispatch function  _always_  synchronously sends an action to the store's reducer, along with the previous state returned by the store, to calculate a new state. It expects actions to be plain objects ready to be consumed by the reducer.

Middleware  wraps the base dispatch function. It allows the dispatch function to handle  async actions  in addition to actions. Middleware may transform, delay, ignore, or otherwise interpret actions or async actions before passing them to the next middleware. See below for more information.

## Middleware

```js
const MiddlewareAPI  =  { dispatch:  Dispatch,  getState:  ()  =>  State  }
```

It is an intermediate layer between the dispatch of an action and the moment it reaches the reducer. It often turns async actions into actions.

Middleware is composable using function composition. It is useful for logging actions, performing side effects like routing, or turning an asynchronous API call into a series of synchronous actions.

## Redux flow

1.  An action is created
2. An action creator is created
3. A view calls the action creator and dispatches the returned action
4. The root reducer is called, and it receives the current state new action (type, payload)
5. Root reducers returns a new state
6. The updated state is returned to the view


