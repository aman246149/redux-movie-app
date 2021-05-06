// {
//     type: 'ADD_MOVIES'
// }

// {
//     type: 'DECREASE_COUNT'
// }


//action types
export const ADD_MOVIES = "ADD_MOVIES"
export const ADD_FAVOURITE = "ADD_FAVOURITE"
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE"
export const SHOW_FAVOURITE = "SHOW_FAVOURITE"




//action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}


export function addFavorite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie: movie
    }
}


export function removeFavorite(movie) {
    return {
        type: REMOVE_FAVOURITE,
        movie: movie
    }
}

export function showFavoriteMethod(val) {
    return {
        type: SHOW_FAVOURITE,
        val: val
    }
}