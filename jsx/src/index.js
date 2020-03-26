// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// CommonJS version of import: const React = require('react');


// Create a react component
const App = function() {
    return <div>Hi there</div>;
};
/*
 * const App = () => {
 *   return <div>Hi there</div>;
 * };
 */


// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root') // Reference to <div> in index.html which
                                    // has ID root
)
