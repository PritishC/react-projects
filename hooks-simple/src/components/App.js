import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
	// Below syntax is array destructuring. We've done object destructuring before.
	// const [currentValue, setValueCallback] = useState(initialValue)
	const [resource, setResource] = useState('posts');

	return (
		<div>
			<UserList />
			<div>
				<button onClick={() => setResource('posts')}>Posts</button>
				<button onClick={() => setResource('todos')}>Todos</button>
			</div>
			<ResourceList resource={resource}/>
		</div>
	);
}

export default App;