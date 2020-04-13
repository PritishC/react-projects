import React from 'react';

// The difference between context and props is that the props system is for'
// parent to direct child communication, while the context system allows for
// parent to arbitrarily nested deep child communication.
// Sources of data into a context object: Default Value OR Provider component (parent of current component)
// Sources of data out of a context object: this.context OR Consumer component
// Pass a value into the call below to create Default Values.
const Context = React.createContext('english');

// The LanguageStore component will now contain all the business logic of our application.
// It will be a parent to the UserCreate and LanguageSelector components.
export class LanguageStore extends React.Component {
	state = {
		language: 'english'
	};

	onLanguageChange = (language) => {
		this.setState({language});
	};

	render() {
		// All children (components wrapped inside the provider) will have access to the context object.
		return (
			<Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default Context;