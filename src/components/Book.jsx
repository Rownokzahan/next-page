import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {

    const { isbn13, image, title, subtitle, price, url } = props.book ;

    return (
        <Link to={`/book/${isbn13}`}>
            <div className='shadow rounded relative duration-300 transform hover:-translate-y-1 cursor-pointer'>
                <img src={image} className='object-contain' alt="" />

                <div className='p-4 rounded bg-black bg-opacity-75 text-gray-100 flex flex-col absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100'>
                    <div>
                        <h3 className='font-bold text-xl mb-2'>{title}</h3>
                        <h3 className='font-bold'>{subtitle}</h3>
                    </div>
                    <p className='mt-auto'>Price: {price}</p>
                </div>

            </div>
        </Link>
    );
};

export default Book;