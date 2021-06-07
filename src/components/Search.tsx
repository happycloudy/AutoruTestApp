import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchBooks} from "../store/action-creators/book";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
    const [value,setValue] = useState('')

    const dispatch = useDispatch()

    const debounceValue = useDebounce(value,1000)

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const fetch = (value: string) =>{
        let parsedValue = value.trim().split(' ').join('+')
        dispatch(fetchBooks(parsedValue))
    }

    useEffect(()=>{
        fetch(value)
    },[debounceValue])


    return (
        <div className='container center'>
            <input value={value} onChange={(e) => handleOnchange(e)} placeholder='Название книги'/>
            <button onClick={() => fetch(value)}>
                Найти
            </button>
        </div>
    );
}

export default Search;