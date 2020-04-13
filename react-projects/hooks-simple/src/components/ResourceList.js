import React from 'react';
import useResources from './useResources';

// We generally make requests from the App component when creating class based components.
// Here we do the opposite; we make the request from the child component. However, since this
// child is a class based component, we will run into some "trouble" that can purportedly be
// fixed by hooks and functional components.

/*
class ResourceList extends React.Component {
	state = {
		resources: []
	};

	async componentDidMount() {
		// called only once; we need to run the request on state update of App also
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

		this.setState({
			resources: response.data
		});
	}

	async componentDidUpdate(prevProps) {
		// We can't place the above request code directly in componentDidUpdate, as setState will trigger infinite calls to
		// componentDidUpdate, which means infinite calls to componentDidUpdate.
		// We can use prevProps (previous props) that the component updated with to prevent this.

		if (prevProps.resource !== this.props.resource) {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

			this.setState({
				resources: response.data
			});
		}
	}

	render() {
		return (
			<div>{this.state.resources.length}</div>
		);
	}
}*/

const ResourceList = ({ resource }) => {
	// useState hook to use component level state
	// useEffect hook to use component lifecycle methods
	// `resource` appears in props
	const resources = useResources(resource);

	return (
		<ul>
			{resources.map(record => (<li key={record.id}>{record.title}</li>))}
		</ul>
	);
};

export default ResourceList;