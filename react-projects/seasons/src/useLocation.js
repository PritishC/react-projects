import { useState, useEffect } from 'react';

export default () => {
	const [lat, setLat] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	// Invoke useEffect only once in the entire lifecycle of this component, so [] as second arg.
	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			(position) => setLat(position.coords.latitude), // success
			(err) => setErrorMessage(err.message) // error callback
		);	
	}, []);

	// Return an array as is the community convention, because it allows for array destructuring.
	return [lat, errorMessage];
};