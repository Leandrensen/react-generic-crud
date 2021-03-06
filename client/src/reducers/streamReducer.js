import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
    const { payload } = action;

    switch (action.type) {
        case CREATE_STREAM:
            return { ...state, [payload.id]: payload };
        case FETCH_STREAM:
            return { ...state, [payload.id]: payload };
        case EDIT_STREAM:
            return { ...state, [payload.id]: payload };
        case DELETE_STREAM:
            return _.omit(state, payload); // here we are using lodash library function called 'omit'
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(payload, 'id') }; // here we are using lodash library function called 'mapKeys'
        default:
            return state;
    }
};
