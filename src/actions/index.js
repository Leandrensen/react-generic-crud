import { SIGN_IN, SIGN_OUT } from './types';

//Action creator
export const selectSong = (song) => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song,
    };
};

export const signIn = (googleUserId) => {
    return {
        type: SIGN_IN,
        payload: googleUserId,
    };
};

export const signOut = () => {
    window.gapi.auth2
        .getAuthInstance()
        .signOut()
        .then(function () {
            console.log('User signed out.');
        });

    return {
        type: SIGN_OUT,
    };
};
