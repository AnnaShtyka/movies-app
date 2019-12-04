/* eslint-disable default-case */
import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES } from './ActionTypes';




const initialState = {
    movies: [],
    movie: [],
    text: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            };

    }
}





