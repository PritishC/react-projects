import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
	constructor(props) {
		super(props);

		this.videoRef = React.createRef();
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchStream(id);
		// Attempt to fetch stream and also attempt to build player. If the stream is not present
		// yet, don't do anything.
		this.buildPlayer();
	}

	componentDidUpdate() {
		// If our component fetches the stream successfully and re-renders, attempt to
		// build player again. Fixes the ref problem.
		this.buildPlayer();
	}

	componentWillUnmount() {
		// Stop trying to receive info from the stream if the video player is not shown, i.e., if
		// we move away from the page etc.
		this.player.destroy();
	}

	buildPlayer() {
		if (this.player || !this.props.stream)
			return;

		const { id } = this.props.match.params;
		this.player = flv.createPlayer({
			type: 'flv',
			url: `http://localhost:8000/live/${id}.flv`
		});
		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
	}

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>;
		}

		const { title, description } = this.props.stream;

		/* We need a ref to the HTML5 <video> element using the React refs system.
		 * This is all part of FLV.js installation procedure.
		 * We also need to take care of the ref not appearing until the fetch stream
		 * request completes. Until then the loading div will appear, and our ref will
		 * have been initialized by then to `null`. This is undesirable, because the
		 * component re-render that follows from the request''s completion does not
		 * set the ref properly after.
		 */
		return (
			<div>
				<video ref={this.videoRef} style={{ width: "100%" }} controls></video>
				<h1>{title}</h1>
				<h5>{description}</h5>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);