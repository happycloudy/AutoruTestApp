import React, {useState} from 'react';
import '../css/modal.css'
import {log} from "util";
import HiddenIsbn from "./HiddenIsbn";

interface IProp {
    handleClose: () => void,
    img: string,
    author?: string,
    title: string,
    isbn: string[],
    publisher: string[],
    date: string
}

const ModalBookSnippet = (props: IProp) => {
    const createNewURL = (link: string) => link.slice(0, link.length - 5) + 'L.jpg'

    const [showIsbn, setShowIsbn] = useState(false)


    return (
        <div className='modal-container'
             onScroll={(e) => e.preventDefault()}
        >
            <div className='modal'>
                <a onClick={props.handleClose} className='close-modal-btn'>
                </a>
                <div className="modal-content-header">
                    <h2>
                        Книга: {props.title}
                    </h2>
                </div>
                <div className='modal-content'>
                    <img src={createNewURL(props.img)} alt='Обложка книги'/>
                    <span style={{width: '2px', minHeight: '40vh', backgroundColor: 'gray'}}>
                    </span>
                    <div className='modal-content-about'>
                        <div className='modal-content-about-el'>
                            <strong>Автор:</strong> {props.author} <br/>
                        </div>
                        <div className='modal-content-about-el'>
                            <strong>Дата публикации:</strong> {props.date} <br/>
                        </div>
                        <div className='modal-content-about-el'>
                            <strong>Издатель:</strong> {props.publisher.join(', ')} <br/>
                        </div>

                        {
                            props.isbn.length < 10 ?
                                <div className='modal-content-about-el'>
                                    <strong>ISBN книги:</strong> {props.isbn.join(', ')} <br/>
                                </div> :
                                <div className='modal-content-about-el'>
                                    <strong>
                                        ISBN книги <br/>
                                        <a style={{color: 'white', textDecoration: 'underline'}}
                                           onClick={() => setShowIsbn(!showIsbn)}
                                        >
                                            {
                                                showIsbn ?
                                                    'Скрыть' :
                                                    'Показать'
                                            }
                                        </a>
                                        <HiddenIsbn isbn={props.isbn} show={showIsbn}/>
                                    </strong>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalBookSnippet;