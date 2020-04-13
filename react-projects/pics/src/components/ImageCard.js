import React from 'react';

/* Steps to get ImageCard to display nicely with proper fit
 * Let ImageCard render itself and its image
 * Reach into the DOM and figure out the height of the image
 * Set the image height on state to get the component to re-render
 * When re-rendering, assign a 'grid-row-end' to make sure image takes appropriate space
 */

 /* React refs are a system to give us direct access to a DOM element
  * that is rendered by a component. We create refs in the constructor,
  * assign them to instance variables, then pass to a particular JSX
  * element as props.
  */

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0};

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		// If I do console.log on this.imageRef.current.clientHeight here, the value comes out
		// as zero because the image has not yet been fetched and rendered on the screen.
		// So we use an event listener.
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;

		// 10 instead of 150: net result is that each image will take up many more spans than before.
		const spans = Math.ceil(height / 10);
		// ES2015 syntax where { spans: spans } is { spans }
		this.setState({ spans })
	}

	render() {
		const {description, urls} = this.props.image;

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;