import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component {
	onSearchSubmit(term) {
		// Makes more sense to let the search API request be made by the
		// App component. The SearchBar component's job is to handle rendering
		// and feedback on user input.
		// Pass this method to the search bar component as a prop
		console.log(term);
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
			</div>
		);	
	}
}

export default App;