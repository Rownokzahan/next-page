import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {

    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }

    const {books} = useLoaderData();

    return (
        <div className='my-container'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
                {books.map(book => <Book key={book.isbn13} book={book}></Book>)}
            </div>
        </div>
    );
};

export default Books;