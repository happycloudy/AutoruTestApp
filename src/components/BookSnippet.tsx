import React, {useState} from 'react';
import '../css/book.css'
import ModalBookSnippet from "./ModalBookSnippet";


interface IProps {
    img: string,
    author?: string,
    title: string,
    isbn: string[],
    publisher: string[]
    date: string
}

const BookSnippet = (props: IProps) => {
    const [active, setActive] = useState(false)

    const handleOpen = () => setActive(true)
    const handleClose = () => setActive(false)


    return (
        <>
            <div className='center'>
                <div className='book-wrap' onClick={handleOpen}>
                    <img src={props.img}/>
                    <div className='about'>
                        <div className='book-name about-item'>
                            Название - {props.title}
                        </div>

                        <div className='author about-item'>
                            Автор - {props.author}
                        </div>
                    </div>
                </div>
            </div>
            {
               active?
                   <ModalBookSnippet handleClose={handleClose}
                                     img={props.img}
                                     publisher={props.publisher}
                                     title={props.title}
                                     isbn={props.isbn}
                                     date={props.date}
                                     author={props.author}
                   />:
                   null
            }
        </>
    );
};

export default BookSnippet;