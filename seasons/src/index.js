import React from 'react';
import ReactDOM from 'react-dom';


/* App lifecycle -:
 * 1. JS file loaded by the browser
 * 2. App component gets created - the constructor function is called
 * 3. The state object is assigned to inside the constructor
 * 4. We call geolocation service
 * 5. App returns JSX, gets rendered to HTML
 * 6. We use result of geolocation
 * 7. We update the state object using `setState()`
 * 8. React calls render() a second time
 * 9. render() returns updated JSX
 * 10. React takes the JSX and updates screen content
 * Functional components cannot have state, and so we can't use latitude and longitude values given
 * by the geolocation object. Functional components cannot "pause" the rendering process or re-render
 * the component.
 */

 /* Rules of class components -:
  * Must be a JS class (not like classes in other languages; uses prototypal inheritance)
  * Must extend React.Component
  * Must define a `render` method that must return some JSX
  */

 /* About state -:
  * Only usable with class components (could be used with functional components using the hooks system)
  * Props may be confused with state
  * `state` is a JS object that contains data relevant to the component
  * Updating `state` on a component causes the component to almost instantly re-render
  * State must be initialized when a component is created
  * `state` can *only* be updated using the function `setState()`
  */

class App extends React.Component {
	// constructor() is JS specific. render() is required by React.
	constructor(props) {
		// Good place to initialize state
		// super() will call the superclass constructor
		super(props);

		// Initialization is the only time we explicitly assign this.state.
		// All other times, we use setState().
		this.state = {
			lat: null,
			errorMessage: ""
		};

		// Best to call getCurrentPosition() once on app start, as render() is
		// called several times in the course of the app lifecycle.
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					lat: position.coords.latitude
				});
			}, // success callback
			(err) => {
				// We need not update every property on the state object
				this.setState({
					errorMessage: err.message
				});
			} // error callback
		);
	}
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>;
		}

		return <div>Loading!</div>;
	}
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);