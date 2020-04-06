// Action creator
export const selectSong = (song) => {
	// return action
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};

// named exports allow us to export many different functions from a single file.