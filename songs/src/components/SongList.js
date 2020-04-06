import React from 'react';
import { connect } from 'react-redux';
// The action creator is passed to the connect function
import { selectSong } from '../actions';

class SongList extends React.Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary"
							onClick={() => this.props.selectSong(song)}>
							Select
						</button>
					</div>
					<div className="content">
						{song.title}
					</div>
				</div>
			);
		});
	}
	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

// Called with the state in the redux store
// The object returned will show up as props in the SongList component.
// Runs everytime state changes (for e.g. when Select button is clicked).
const mapStateToProps = (state) => {
	console.log(state);
	return {
		songs: state.songs
	};
};

// connect is passed the mapStateToProps function and
// seems to return a function, which takes SongList as a param.
// connect will pass selectSong action creator and pass it to
// SongList as props. Also, connect automatically calls dispatch()
// on the actions returned by the action creators we pass to connect.
export default connect(mapStateToProps,
	// selectSong: selectSong
	{ selectSong }
)(SongList);