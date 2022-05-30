import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../assets/image/facebook.png';
import google from '../../assets/image/search.png';
import twitter from '../../assets/image/twitter.png';

const Footer = () => {
    return (
        <footer className='h-36 p-4 border-t flex items-center bg-zinc-900 w-full '>
            <div className='flex flex-wrap justify-around space-y-6 sm:space-y-0 w-full'> 
            <div className='flex justify-center items-center space-x-4'>
                <Link to='/'>
                <img className='w-8' src={google} alt="" />
                </Link>
                <Link to='/'>
                <img className='w-8' src={facebook} alt="" />
                </Link>
                <Link to='/'>
                <img className='w-8' src={twitter} alt="" />
                </Link>
            </div>
            <p className='text-center text-white'>
                All Right Reserved By <Link className='text-red-500 hover:underline' to='/'>Gears.com</Link>
            </p>
            </div>
        </footer>
    );
};

export default Footer;