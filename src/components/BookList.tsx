import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const BookList: React.FC = () => {
    const {books, error, loading} = useTypedSelector(state => state.book)

    if (loading){
        return <h1>Идет загрузка...</h1>
    }

    if (error){
        return <h1>{error}</h1>
    }


    return (
        <div>
            <ul>
                {
                    books.map( (book,id) =>{
                        if(book.author_name){
                            return <li key={id}> Автор:
                                {
                                    book.author_name
                                }
                            </li>
                        }
                        return <li key={id}> Опубликовал:
                            {
                                book.publisher
                            }
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default BookList;