import React, {useState} from 'react';
import '../css/book.css'
import ModalBookSnippet from "./ModalBookSnippet";


interface IProps {
    img: string,
    author?: string,
    title: string,
    isbn: string[],
    publisher: string
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
                   <ModalBookSnippet handleClose={handleClose}/>:
                   null
            }
        </>
    );
};

export default BookSnippet;