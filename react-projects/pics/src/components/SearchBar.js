import React from 'react';

/* Setting state in the callback to onChange prop is 
 * an alternative method to handling feedback on user input.
 * Such an element is called a _controlled_ element, as opposed
 * hooking up a callback function like onInputChange that explicitly
 * handles user input, which is an uncontrolled element.
 * In an uncontrolled element, to get the value of the element,
 * we would have to check the DOM and fetch the value. In a controlled
 * element we could fetch the value using React's methods at any
 * instant of time. Using state as the single source of truth centralizes
 * control over all elements and takes it away from the DOM.
 * Series of events -:
 * 1. User types in input
 * 2. Arrow function callback gets invoked
 * 3. We call setState() with the new value
 * 4. Component re-renders
 * 5. Input is told what its value is (coming from value={state.term})
 */


class SearchBar extends React.Component {
	state = { term: ''};
	/*

		constructor() {
			super();

			Legacy way of fixing the `this` binding problem.
			this.onFormSubmit = this.onFormSubmit.bind(this);
		}
		onInputChange(event) {

		}
	*/

	// Another way of fixing the binding problem is to use
	// arrow functions. One special feature of arrow functions
	// is that they automatically bind `this`.
	// Another way is passing the callback as an arrow function.
	// {(event) => this.onFormSubmit(event)}
	onFormSubmit = (event) => {
		// Prevent the browser from submitting the form automatically
		// refreshing the page on pressing Enter.
		event.preventDefault();

		// To access props passed down from App to SearchBar,
		// use `this`.
		this.props.onSubmit(this.state.term);

		// Note that the value of `this` inside a class is supposed to
		// refer to the instance of the class from within which we've called
		// that function of the class. But if we use `this` inside onFormSubmit,
		// we will stumble on an error where `this` is undefined, if onFormSubmit
		// is defined as a regular function.
		// This is because while this.onFormSubmit is provided as a callback,
		// the internal code treats onFormSubmit as a regular function without
		// any `this` binding.
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						{/* onChange is a prop that takes a reference to a function */}
						{/*<input type="text" onChange={this.onInputChange}/>*/}
						<input type="text" value={this.state.term}
							onChange={(e) => this.setState({term: e.target.value})} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;