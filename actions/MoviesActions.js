import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES } from './ActionTypes';

export const searchMovie = (text) => {
    return {
        type: 'SEARCH_MOVIE',
        text
    }
};


export const fetchMovie = (text) => {
    return {
        type: 'FETCH_MOVIE',
        payload: text
    }
};


export const fetchMovies = (text) => {
    return {
        type: 'FETCH_MOVIES',
        payload: text
    }
};
