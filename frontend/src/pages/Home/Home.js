import React from 'react';
import Banner from '../../components/Banner/Banner';
import EditorsChoice from '../../components/EditorsChoice/EditorsChoice';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Items from '../../components/Items/Items';
import Stat from '../../components/Stat/Stat';

const Home = () => {
    return (
       <>
       <Header></Header>
        <main className=''>
          <Banner></Banner>
          <Items></Items>
          <EditorsChoice></EditorsChoice>
          <Stat></Stat>
        </main>
          <Footer></Footer>
          </>
    );
};

export default Home;