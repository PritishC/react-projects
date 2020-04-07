import React from 'react';
import PostList from './PostList';

/* General Data loading with Redux
 * 1. Component gets rendered on screen
 * 2. Component's `componentDidMount` method gets called
 * 3. Call action creator inside the mount method
 * 4. Action creator will have axios code which makes API request
 * 5. API responds with data
 * 6. Action creator returns an action with fetched data on the `payload` property
 * 7. A reducer sees the action and returns the data off the payload
 * 8. As a new state object was generated, react-redux will cause our React app to be re-rendered
 */

const App = () => {
	return (
		<div className="ui container">
			<PostList></PostList>
		</div>
	);
};

export default App;