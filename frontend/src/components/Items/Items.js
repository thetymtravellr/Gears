import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from "../../components/Loading/Loading";
import ItemCard from '../ItemCard/ItemCard';

const Items = () => {

    const [items,setItems] = useState([])
    
    useEffect(()=>{
        (async ()=>{
            const { data } = await axios.get('https://inventory-management-site.herokuapp.com/inventory')
            setItems(data.slice(0,6))
        })()
     },[])
  
    return (
        <section className='text-center mt-20 pb-6 bg-white'>
            <h1 className='font-koulen text-yellow-500 text-center text-4xl font-bold drop-shadow-md mb-8'>Featured Gear Inventory</h1>
           <div className='flex flex-wrap gap-4 justify-center items-center my-12'>
               {/* show only first 6 item */}
             {
               !items.length ?
               <Loading></Loading>
               :
               items.map(item => <ItemCard
                key={item._id}
                     item={item}></ItemCard>)
            }
           </div>

           <Link className="block max-w-fit mx-auto px-12 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded shadow sm:w-auto focus:outline-none focus:ring" to="/manageinventory">
               <button>Manage Inventories</button>
              </Link>

        </section>
    );
};

export default Items;