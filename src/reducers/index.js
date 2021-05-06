import { ADD_MOVIES } from '../actions';

const initialMovieState={
    list:[],
    favorites:[]
};

export default function movies(state = initialMovieState, action) {
    if (action.type === ADD_MOVIES) {
        console.log("action called")
        return {
            ...state,
            list:action.movies
        };
    }
    return state;
};


