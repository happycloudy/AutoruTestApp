import React from 'react';

const NotFound: React.FC = () => {
    return (
        <h1 className='container center' style={{textAlign: 'center', color: '#fff'}}>
            Книги по данному запросу отсутствуют. <br/>
            Попробуйте ввести что-то другое 🙂
        </h1>
    );
};

export default NotFound;