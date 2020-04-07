import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return <div>Bruh</div>;
	}
}

// If the first argument is null, that means no state is being
// handled by the given component.
export default connect(null, { fetchPosts })(PostList);