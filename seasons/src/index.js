import React from 'react';
import ReactDOM from 'react-dom';


/* App lifecycle -:
 * 1. JS file loaded by the browser
 * 2. App component gets created
 * 3. We call geolocation service
 * 4. App returns JSX, gets rendered to HTML
 * 5. We use result of geolocation
 * 6. Re-render the component
 * Functional components cannot have state, and so we can't use latitude and longitude values given
 * by the geolocation object. Functional components cannot "pause" the rendering process or re-render
 * the component.
 */

 /* Rules of class components -:
  * Must be a JS class (not like classes in other languages; uses prototypal inheritance)
  * Must extend React.Component
  * Must define a `render` method that must return some JSX
  */

class App extends React.Component {
	render() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => console.log(position), // success callback
			(err) => console.log(err)
		);
		return <div>Latitude: </div>;
	}
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);