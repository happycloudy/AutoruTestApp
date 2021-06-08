import React, {FormEvent, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchBooks} from "../store/action-creators/book";
import useDebounce from "../hooks/useDebounce";
import '../css/search.css'

const Search = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()
    const debounceValue = useDebounce(value, 1000)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const fetch = (value: string) => {
        let parsedValue = value.trim().split(' ').join('+')
        dispatch(fetchBooks(parsedValue))
    }


    useEffect(() => {
        fetch(value)
    }, [debounceValue])

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>,value: string) => {
        e.preventDefault()
        fetch(value)
    }


    return (
        <div className='container center'>
            <form className='input-form' onSubmit={(e) => handleOnSubmit(e,value)}>
                <input value={value}
                       onChange={(e) => handleOnChange(e)}
                       placeholder='Название книги'
                       className='input-field'
                />
                <button onClick={() => fetch(value)} className='input-button'>
                    Найти
                </button>
            </form>
        </div>
    );
}

export default Search;