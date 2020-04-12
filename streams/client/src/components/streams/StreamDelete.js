import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions() {
		/* If we wrap the buttons inside a <div>, it throws off our styling and makes
		 * the buttons appear right next to each other. However, if we don't encase the
		 * buttons inside a <div>, React throws an error saying that sibling elements in
		 * JSX must have a parent. For this, we use a React.Fragment element, which acts
		 * as an invisible tag, does not affect the visuals in anyway but takes the place
		 * of our div. <React.Fragment> === <>.
		 */
		return (
			//<React.Fragment>
			<>
				<button onClick={() => this.props.deleteStream(this.props.match.params.id)}
					className="ui button negative">Delete</button>
				<Link to="/" className="ui button">Cancel</Link>
			</>
			//</React.Fragment>
		);
	}

	renderContent() {
		if (!this.props.stream) {
			return "Are you sure about dat?";
		}

		return `Are you sure you want to delete the stream with title?: ${this.props.stream.title}`;
	}

	render() {
		return (
			<Modal title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()} onDismiss={() => history.push('/')}></Modal>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);