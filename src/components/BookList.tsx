import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import NotFound from "./NotFound";
import Loader from "./Loader";
import BookSnippet from "./BookSnippet";

const BookList: React.FC = () => {
    const getLink = (isbn: string) => {
        if (isbn) {
            return `http://covers.openlibrary.org/b/isbn/${isbn[0]}-M.jpg`
        }
        return ''
    }

    const {books, error, loading} = useTypedSelector(state => state.book)

    if (loading) {
        return <Loader/>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    if (books.length === 0) {
        return <NotFound/>
    }
    console.log(books)
    return (
        <div>
            <ul className='container'>
                {
                    books.map((book, id) => {
                        if (book.author_name) {
                            return <BookSnippet key={book.isbn}
                                                img={getLink(book.isbn)}
                                                author={book.author_name}
                                                publisher={book.publisher}
                                                title={book.title}
                                                isbn={book.isbn}
                            />
                        }
                        return <BookSnippet key={book.isbn}
                                            img={getLink(book.isbn)}
                                            publisher={book.publisher}
                                            title={book.title}
                                            isbn={book.isbn}
                        />
                    })
                }
            </ul>
        </div>
    );
}

export default BookList;