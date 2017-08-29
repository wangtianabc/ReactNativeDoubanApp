import * as types from '../constans/ActionTypes'

const initState = {
    loading: false,
    books: []
}

const bookReducer = (state=initState, action) => {
    switch (action.type) {
        case types.FETCH_BOOK_LIST:
            return {
                ...state,
                loading: action.loading
            }
        case types.RECEIVE_BOOK_LIST:
            return {
                ...state,
                loading: action.loading,
                books: action.bookList
            }
        default:
            return state
    }
}

export default { initState, bookReducer }