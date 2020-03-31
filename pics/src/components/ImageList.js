import React from 'react';

const ImageList = (props) => {
	{/* Add a key prop to each item in a list of elements,
		for performance reasons. The key should be unique.
		The key prop is added to the root element in each item
		of the list of items. */}
	// Instead of `image`, we can write `{description, id, urls}` to
	// get only those properties in the `image` object.
	const images = props.images.map(({ description, id, urls }) => {
		// return <img alt={image.description} key={image.id} src={image.urls.regular} />;
		return <img alt={description} key={id} src={urls.regular} />;
	});

	return <div>{images}</div>;
};

export default ImageList;