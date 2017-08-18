const initState = {
    movies: []
}

const movieReducer = (state=initState, action) => {
    switch (action.type) {
        case 'MENU_FOLD':
            return {...state, movies: action.payload }
        default:
            return state
    }
}

export default { initState, movieReducer }