import { combineReducers } from 'redux';
import songsReducer from './songsReducer';
import selectedSongReducer from './selectedSongReducer';

//The keys on this objects are going to be they keys on our state object
//Basicamente este combineReducers es el que arma el "state" con las keys, y los resultados de lo que devuelven los reducers que le pasas a las keys
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
