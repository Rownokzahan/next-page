import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import reader from "../assets/reader.json";

const Home = () => {
    return (
        <div className='my-container'>
            <div className='grid md:grid-cols-2 gap-8'>
                <div>
                    <p className='badge'>ON SALE!</p>
                    <h1 className='text-4xl font-bold'>A reader lives a
                        <br /> thousand lives <span className='text-blue-400'>before he dies</span></h1>
                    
                    <p className='text-gray-600 text-xl my-8'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>

                    <div className='flex gap-8 items-center'>
                        <Link to='/books' className="btn">
                            View Store
                            <ShoppingCartIcon className='ml-2 w-6 h-6' />
                        </Link>

                        <Link to='/about' className='font-semibold' >Learn More</Link>
                    </div>
                </div>

                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <Lottie animationData={reader} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;