import React from 'react';

interface IProp {
    isbn: string[],
    show: boolean
}

const HiddenIsbn = (props: IProp) => {
    return (
        <>
            {
                props.show?
                    <div className='hidden'>
                        {
                            props.isbn.join(', ')
                        }
                    </div>:
                    null
            }
        </>
    );
}

export default HiddenIsbn;