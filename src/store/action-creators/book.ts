import {BookAction, BookActionTypes, booksState} from "../../types/bookTypes";
import {Dispatch} from "react";
import axios from "axios";


export const fetchBooks = (queue: string) => {
    return async (dispatch: Dispatch<BookAction>) => {
        try {
            dispatch({type: BookActionTypes.FETCH_BOOKS})
            const res = await axios.get(`http://openlibrary.org/search.json?q=${queue}`) // the+lord+of+the+rings
            dispatch({type: BookActionTypes.FETCH_BOOKS_SUCCESS, payload: res.data.docs})
        } catch (e) {
            dispatch({type: BookActionTypes.FETCH_BOOKS_ERROR, payload: 'Во время получения книг произошла ошибка'})
        }
    }
}