import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import ActiveLink from './ActiveLink';

const Header = () => {

    const [openNavLink, setOpenNavLink] = useState(false);

    return (
        <nav className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:flex items-center justify-between'>
            <Link to={'/'}>
                <BoltIcon className='w-6 h-6 inline-flex text-blue-600'/>
                <span className='font-bold text-xl ml-2'>nextPage</span>
            </Link>

            
            {!openNavLink && <Bars3BottomRightIcon onClick={() => setOpenNavLink(true)} className='w-6 h-6 absolute right-6 top-6 md:hidden' />}
            

            <div className={`${openNavLink ? "float-menu" : "hidden" } md:flex flex-col md:flex-row gap-2 md:gap-8 mt-2 lg:mt-0 `}>
                <XMarkIcon onClick={() => setOpenNavLink(false)} className='w-6 h-6 absolute right-2 top-2 md:hidden' />
                
                <ActiveLink to={'/'}>Home</ActiveLink>
                <ActiveLink to={'/books'}>Books</ActiveLink>
                <ActiveLink to={'/about'}>About us</ActiveLink>

            </div>
        </nav>
    );
};

export default Header;