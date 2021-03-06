export interface booksState {
    books: any[];
    loading: boolean;
    error: null | string;
}

export enum BookActionTypes {
    FETCH_BOOKS = 'FETCH_BOOKS',
    FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',
    FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
    FETCH_BOOKS_NOT_FOUND = 'FETCH_BOOKS_NOT_FOUND'
}

interface FetchBooksAction{
    type: BookActionTypes.FETCH_BOOKS,
    payload?: any[]
}

interface FetchBooksErrorAction{
    type: BookActionTypes.FETCH_BOOKS_ERROR,
    payload: string
}

interface FetchBooksSuccessAction{
    type: BookActionTypes.FETCH_BOOKS_SUCCESS,
    payload: any[]
}


export type BookAction = FetchBooksAction | FetchBooksSuccessAction | FetchBooksErrorAction