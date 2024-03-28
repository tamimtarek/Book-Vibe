import React from 'react';

const Rev = ({rev}) => {
    const {review, bookName} = rev;
    return (
        <div className='lg:w-[889px] border rounded-md p-7 m-auto space-y-3 mt-3 mb-8'>
            <h1 className='text-4xl font-bold'>{bookName}</h1>
            <h3>Review: {review} </h3>
        </div>
    );
};

export default Rev;