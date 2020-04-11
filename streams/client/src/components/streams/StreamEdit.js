import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>;
		}

		// props.match.params.id holds our :id variable from the URL
		return <div>{this.props.stream.title}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	// ownProps is the same props object that shows up in the StreamEdit component.
	// We need it to get the stream ID so that we can return the correct stream.
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);