import {BookAction, booksState} from "../../types/bookTypes";

const initialState: booksState = {
    books: [],
    loading: false,
    error: null
}

export const bookReducer = (state = initialState, action: BookAction) => {
    switch (action.type) {
        case 'FETCH_BOOKS':
            return {loading: true, error: null, books: []}
        case 'FETCH_BOOKS_ERROR':
            return {loading: false, error: action.payload, books: []}
        case 'FETCH_BOOKS_SUCCESS':
            return {loading: false, error: null, books: action.payload}
        default:
            return state
    }
}