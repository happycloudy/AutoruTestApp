import React from 'react';

interface IProp {
    handleClose: () => void
}

const ModalBookSnippet = (props: IProp) => {
    console.log('я появился')
    return (
        <div className='container center modal-container'>
            <div className='modal'>
                112314 модальное окно
                <button onClick={props.handleClose}>
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default ModalBookSnippet;