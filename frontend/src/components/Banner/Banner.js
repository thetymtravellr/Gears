import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import hero from '../../assets/image/hero.png';
import auth from '../../firebase.init';
import './Banner.css';

const Banner = () => {
  const [user] = useAuthState(auth)
    return (
        <section className="min-h-[80vh] flex items-center justify-center ">
        <div className='flex flex-wrap items-center justify-between'>
        <div className="order-2 lg:order-1 max-w-lg w-full px-4 py-32 mx-auto lg:items-center lg:flex">
          <div className="mx-auto text-center lg:text-left">
            <h1 className="font-extrabold text-indigo-700 text-6xl font-koulen">
              Camping Gear Dealer.
            </h1>
            <p className="mt-2 sm:leading-relaxed sm:text-xl text-gray-500">
            Gear Dealership, Warehousing & Listing
            </p>
            <Link to={user ? '/addinventory' : '/login'}>
            <button className='bg-indigo-500 text-white px-6 py-2 rounded font-medium mt-4 hover:bg-indigo-600 hover:shadow-lg duration-150'>Get Started</button>
            </Link>
          </div>
        </div>
        <div className='max-w-lg w-full mx-auto order-1 lg:order-2 border'>
        <img className='w-full rounded-full mx-auto' src={hero} alt="" />
        </div>
        </div>
      </section>
     
    );
};

export default Banner;