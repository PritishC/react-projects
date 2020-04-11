import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		this.props.editStream(this.props.match.params.id, formValues);
	};

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>;
		}

		// props.match.params.id holds our :id variable from the URL
		// Also, since the StreamForm instance is wrapped inside ReduxForm, we can pass special props
		// down to ReduxForm. One of them is `initialValues`, which populates the form with initial
		// values for each field.
		// We pick only the title and description fields since they're the only ones relevant when
		// editing the stream.
		return (
			<div>
				<h3>Edit a Stream</h3>
				<StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')}
					onSubmit={this.onSubmit}></StreamForm>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	// ownProps is the same props object that shows up in the StreamEdit component.
	// We need it to get the stream ID so that we can return the correct stream.
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);