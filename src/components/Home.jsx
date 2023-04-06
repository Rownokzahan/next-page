import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import reader from "../assets/reader.json";

const Home = () => {
    return (
        <div className='my-container'>
            <div className='grid lg:grid-cols-2 gap-16'>
                <div className='space-y-4 md:space-y-8'>
                    <p className='badge'>ON SALE!</p>
                    <h1 className='text-4xl font-bold'>A reader lives a
                        <br /> thousand lives <span className='text-blue-400'>before he dies</span></h1>
                    
                    <p className='text-gray-600 md:text-xl'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>

                    <div className='flex gap-4 md:gap-8 items-center'>
                        <Link to='/books' className="btn">
                            View Store
                            <ShoppingCartIcon className='ml-2 w-6 h-6' />
                        </Link>

                        <Link to='/about' className='font-semibold' >Learn More</Link>
                    </div>
                </div>

                <div>
                    <Lottie className='xl:h-96' animationData={reader} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;