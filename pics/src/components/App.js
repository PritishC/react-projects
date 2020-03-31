import React from 'react';
import unsplash from '../api/unsplash'; // import with name unsplash
import SearchBar from './SearchBar';


class App extends React.Component {
	state = { images: [] };
	// Use the async-await syntax instead of the `then` promise syntax.
	// Make onSearchSubmit an arrow function so that `this` inside it
	// refers to an instance of App, instead of the `props` object of
	// an instance of the SearchBar component (see: onFormSubmit).
	onSearchSubmit = async (term) => {
		// Makes more sense to let the search API request be made by the
		// App component. The SearchBar component's job is to handle rendering
		// and feedback on user input.
		// Pass this method to the search bar component as a prop
		const response = await unsplash.get('search/photos', {
			params: {
				query: term
			}
		});

		this.setState({
			images: response.data.results
		});
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				Found: {this.state.images.length} images	.
			</div>
		);	
	}
}

export default App;