import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = (formProps) => {
		const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
		// redux-form automates the implementation of forms with redux.
		// It does not know anything about the way we're designing our app and how we're designing DOM elements.
		// We specify onChange and value as usual, to create a controlled input.
		// return <input onChange={formProps.input.onChange} value={formProps.input.value} />
		// ES6 syntax that takes all the properties on the `input` object and assigns them as props to the input element.
		return (
			<div className={className}>
				<label>{formProps.label}</label>
				<input { ...formProps.input } />
				{this.renderError(formProps.meta)}
			</div>
		);
	}

	// Generally submit callbacks take `event` as arg, but this is a redux-form situation.
	onSubmit = (formValues) => {
		// redux-form requires us to wrap the onSubmit callback with handleSubmit.
		// redux-form handles the preventDefault for us, so we don't need this!
		// event.preventDefault();
		// The parent component (StreamCreate or StreamEdit) will pass down a prop callback called onSubmit.
		this.props.onSubmit(formValues);
	}

	render() {
		return (
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				{ /* label is not a redux-form prop, it is our custom prop */ }
				<Field label="Enter title" name="title" component={this.renderInput}/>
				<Field label="Enter description" name="description" component={this.renderInput}/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	// The errors object is passed down to the renderInput method.
	if (!formValues.title) {
		errors.title = "Enter a valid title";
	}
	if (!formValues.description) {
		errors.description = "Enter a valid description";
	}

	return errors;
};

export default reduxForm({
	form: 'streamForm',
	validate
})(StreamForm);

// StreamForm does not need to call an action creator, so no second argument to connect().
// And that way, connect() itself is not required since we're not passing any arguments to it.