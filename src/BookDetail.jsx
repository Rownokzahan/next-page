import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetail = () => {

    const [foldDesc, setFoldDesc] = useState(true);

    const data = useLoaderData();
    const { isbn13, image, title, subtitle, price, url, authors, desc, publisher, year, rating, } = data;

    return (
        <div className='my-container' >
            <div className='border border-gray-800 rounded grid md:grid-cols-2'>
                <img src={image} className='w-full' alt="" />

                <div className='m-20 space-y-8'>

                    <div className='badge'>Brand New</div>
                    <h2 className='font-bold text-2xl md:text-4xl'>{title}</h2>

                    <div>
                        <p>Authors: {authors}</p>
                        <p>Publisher: {publisher}</p>
                        <p>Year: {year}</p>
                        <p>Rating: {rating}</p>
                    </div>

                    {desc.length > 100 ?
                        foldDesc ?
                            <p className='text-gray-500'>
                                {desc.substr(0, 100)} ...
                                <button onClick={()=>setFoldDesc(!foldDesc)} className='text-blue-600 font-bold'>Read more</button>
                            </p>
                            : <p className='text-gray-500'>
                                {desc} 
                                <button onClick={()=>setFoldDesc(!foldDesc)} className='text-blue-600 font-bold'>Read less</button>
                            </p>
                        :<p className='text-gray-500'>{desc}</p>}
                    

                    <div className='flex gap-8 items-center'>
                        <Link to={url} ><button className='btn'>Buy Now</button></Link>
                        <p className='text-gray-600 font-bold'>Price: {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;