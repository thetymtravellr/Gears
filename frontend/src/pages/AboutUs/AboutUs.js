import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const AboutUs = () => {
    return (
        <>
        <Header></Header>
        <section className='py-12 px-4 min-h-[75vh] flex items-center bg-white'>
            <div className='max-w-6xl mx-auto'>
            <h1 className='font-koulen text-yellow-500 text-center text-4xl font-bold drop-shadow-md mb-8'>About Us</h1>
            <p className='text-justify text-lg'>Gears.com is the most selling camping gear dealer. we provide every kind of camping gear Wholesale.We Are The Most Valuable Gear Dealership Provider. Our Price Is Also Reasonable.
            We Sell Product World Wide. Almost Every Country In The World Have at least One Dealership Of Ours. We Are Now Also Open For Dealership Once Again. If You Want To Get A Dealership Please Contact In Our Customer Support. It Will Be A Great Journey</p>
            </div>
        </section>
        <Footer></Footer>
        </>
    );
};

export default AboutUs;