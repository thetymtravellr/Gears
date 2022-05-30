import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TodaysPick = () => {
    const [items,setItems] = useState([])
    useEffect(()=>{
        axios.get('https://inventory-management-site.herokuapp.com/inventory')
        .then(data => setItems(data.data))
     },[])

    const random = Math.floor(Math.random() * items.length);

    return (
        <section className='py-12 bg-white'>
            <h1 className='font-koulen text-yellow-500 text-center text-4xl font-bold drop-shadow-md'>Editor's Choice</h1>
           
            <div className='w-full h-fit  mx-auto py-20  flex flex-wrap justify-center items-center md:space-x-6 sm:space-y-0 space-y-6 my-20 bg-indigo-100'>
                <div className='h-fit w-96 bg-white'>
                    <img className='h-64 w-full object-cover' src="https://i.ibb.co/NC54FPc/ian-keefe-y-PBHXv-N3-HII-unsplash-1.png" alt="" />
                    <Link className='' to='/blog'>
                    <div className='m-6 h-24'>
                        <p className='text-4xl font-extrabold font-koulen text-gray-800'>why choose our service</p>
                        <span className='font-bold font-koulen text-gray-500'>by robiul hasan</span>
                    </div>
                    </Link>
                </div>
                
                <div className='h-fit w-96 bg-white'>
                    <img className='h-64 w-full object-cover' src="https://i.ibb.co/9VDKcrV/ian-keefe-y-PBHXv-N3-HII-unsplash-2.png" alt="" />
                    <Link className='' to='/blog'>
                    <div className='m-6 h-24'>
                        <p className='text-4xl font-extrabold font-koulen text-gray-800'>Top benefits of hiring our services </p>
                        <span className='font-bold font-koulen text-gray-500'>by otaku</span>
                    </div>
                    </Link>
                </div>
                <div className='h-fit w-96 bg-white'>
                   <Link to='/blog'>
                   <div className='px-2 py-2 h-28 border'>
                        <p className='text-2xl font-extrabold font-koulen text-gray-800'>Logistic service providers would understand your business</p>
                        <span className='font-bold font-koulen text-gray-500'>by robiul hasan</span>
                    </div>
                   </Link>
                   <Link to='/blog'>
                   <div className='px-2 py-2 h-28 border'>
                        <p className='text-2xl font-extrabold font-koulen text-gray-800'>Our service ensures you best quality services at all times</p>
                        <span className='font-bold font-koulen text-gray-500'>by shakil</span>
                    </div>
                   </Link>
                   <Link to='/blog'>
                   <div className='px-2 py-2 h-28 border'>
                        <p className='text-2xl font-extrabold font-koulen text-gray-800'>we are experienced and expert in the business of warehousing</p>
                        <span className='font-bold font-koulen text-gray-500'>by robiul hasan</span>
                    </div>
                   </Link>
                   
                    <Link to='/blog'>

                    <div className=' pt-2 pl-2 h-12 border'>
                        <p className='text-xl font-bold text-blue-500'>More</p>
                    </div>
                    </Link>
                </div>
            </div>
           
        </section>
    );
};

export default TodaysPick;