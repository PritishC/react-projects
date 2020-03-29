// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// CommonJS version of import: const React = require('react');


// Create a react component
// Browsers don't understand JSX natively; Babel handles JSX to React function
// translation.
const App = () => {
    // JSX can reference JS variables
    // const buttonText = ['Hi', 'There'];
    // JS objects are *not* allowed to be referenced inside JSX directly.
    // We need to specify a property of the object instead of the object itself.
    // buttonText.text instead of buttonText.
    const buttonText = { text: 'bruh' };
    const style = { backgroundColor: 'blue', color: 'white' };
    return (
        <div>
          {/* JSX uses className instead of class, and htmlFor instead of for */}
          <label className="label" htmlFor="name">Enter name bruh:</label>
          <input id="name" type="text" />
          {/* Internal styling is done differently in JSX
           * the first pair of curly braces indicates JSX interpolation
           * the second pair of curly braces indicates a JS object
           * background-color is camel cased into backgroundColor, like we used
           * to in Angular.
           */}
          <button style={style}> {buttonText.text} </button>
        </div>
    );
};


// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root') // Reference to <div> in index.html which
                                    // has ID root
)
