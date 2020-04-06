import React from 'react';
// Webpack detects index.js inside the actions directory and
// that removes the need of writing '../actions/index'.
// The curly brace import is to import a named export.
// import { selectSong } from '../actions';

import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList></SongList>
				</div>
				<div className="column eight wide">
					<SongDetail></SongDetail>
				</div>
			</div>
		</div>
	);
};

export default App;

/* Our reducers will be - Song list reducer and Selected song reducer.
 * Our action creators will be - Select song action creator.
 * Reducers will be a part of the central store of Redux.
 * The react-redux library provides two components - Provider and Connect.
 * The Redux store will be passed as a prop to Provider.
 * All components that require access to the central store are hooked to Connect.
 * A Provider instance will be passed down to App as a prop.
 * A Connect instance will be passed down to SongList as a prop and can communicate with the Provider through the context system.
 * https://monosnap.com/file/ZNZY922X9Fu09vSQX8DckdyxLyAyzX
 */