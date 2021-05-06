import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITE } from '../actions';

const initialMovieState = {
    list: [],
    favorites: []
};

export default function movies(state = initialMovieState, action) {
    // if (action.type === ADD_MOVIES) {
    //     console.log("action called")
    //     return {
    //         ...state,
    //         list:action.movies
    //     };
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favorites: [action.movie, ...state.favorites]
            }
        case REMOVE_FAVOURITE:
            let filteredArray = state.favorites.filter(
                movie=> movie.title!==action.movie.title
            )
           
            console.log("filtered array",filteredArray)
            return {
                ...state,
                favorites: filteredArray
            }
        case SHOW_FAVOURITE:
          
            return {
                ...state,
                showFavorite:action.val
            }
        default:
            return state;
    }
};


