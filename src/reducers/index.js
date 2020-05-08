import { combineReducers } from 'redux';

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

//The keys on this objects are going to be they keys on our state object
//Basicamente este combineReducers es el que arma el "state" son las keys y los resultados de lo que devuelven los reducers que le pasas a las keys
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
