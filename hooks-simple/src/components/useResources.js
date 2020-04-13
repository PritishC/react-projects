import { useState, useEffect } from 'react';
import axios from 'axios';

// Extracted the hooks logic into a re-usable function, that can be implemented by
// multiple components. Also solves the problem of multiple requests being sent
// each time we spam-click a particular button.
const useResources = resourceType => {
	const [resources, setResources] = useState([]);

	const fetchResource = async (resource) => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/${resourceType}`
		);

		setResources(response.data);
	};

	// Between subsequent renders of our component, if the elements inside the second
	// argument to useEffect (the array) are different, then the arrow function that is
	// provided as first argument callback is called. So this functions as both Mount and
	// Update lifecycle methods.
	// Note that the comparison React makes to check if the second argument has changed is
	// a reference equality check, not a deep equality check, similar to what we saw Redux
	// do for its reducers.
	// Async logic cannot be put directly inside the callback as useEffect must return a function
	// or nothing - applying the `async` keyword prevents that.
	useEffect(() => {
		fetchResource(resourceType);
	}, [resourceType]);

	return resources;
};

export default useResources;