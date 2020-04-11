import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	}

	render() {
		// This isn't exactly inheritance, more like the composition design pattern.
		// We are placing the StreamForm component inside the render() of the StreamCreate,
		// and will do the same in StreamEdit.
		return (
			<div>
				<h3>Create a Stream</h3>
				<StreamForm onSubmit={this.onSubmit}></StreamForm>
			</div>
		);
	}
	
}

export default connect(null, { createStream })(StreamCreate);