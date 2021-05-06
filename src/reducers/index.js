export default function movies(state = [], action) {
    if (action.type == 'ADD_MOVIES') {
        console.log("action called")
        return action.movies;
    }
    return state;
};
