import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='my-container'>
            <div className="flex justify-center items-center h-[calc(100vh-68px)]">
                <p className='text-6xl'>
                    L
                    <span className="animate-spin inline-block rounded-full h-8 w-8 border-4 border-dotted border-black"></span>
                    ading...
                </p>
                
            </div>
        </div>
    );
};

export default LoadingSpinner;