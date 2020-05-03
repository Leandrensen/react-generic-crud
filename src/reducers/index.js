const songsReducer = () => {
    return [
        { title: 'Welcome to The Jungle', duration: '6:66' },
        { title: 'Africa', duration: '6:66' },
        { title: 'Winds of Change', duration: '6:66' },
        { title: 'Paranoid', duration: '6:66' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};
