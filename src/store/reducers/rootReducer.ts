import {combineReducers} from 'redux'
import {bookReducer} from './BookReducer'

export const rootReducer = combineReducers({
    book: bookReducer
})