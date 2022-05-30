import { PencilAltIcon } from '@heroicons/react/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([])
    const email = user?.email;

    useEffect(()=>{
      axios.get(`https://inventory-management-site.herokuapp.com/inventory?email=${email}`,{
        headers: {
          'authorization': `${localStorage.getItem('accessToken')}`,
        }
      })
      .then(data => setMyItems(data.data))
  },[myItems])

    return (
       <> 
       <Header></Header>
       <main className="h-fit text-center my-6">
       <h1 className="text-4xl font-semibold mt-6 mb-12">My Items</h1>
       <div className="w-full max-w-5xl mx-auto px-4">
        {
            myItems.length > 0 
            ?
            <>
            <div className="flex space-x-4 my-4">
          <Link to="/addinventory">
            <button className="bg-indigo-600 text-white flex items-center justify-center px-4 py-2 rounded hover:bg-indigo-800">
              Add New <PencilAltIcon className="w-6 h-6 text-white ml-2" />
            </button>
          </Link>
        </div>
           <table className="table-auto container w-full rounded  border-collapse border border-slate-200 ">
           <thead>
             <tr>
               <th className="px-2 md:px-4 py-4  border-b hidden md:block">Image</th>
               <th className="px-2 md:px-4 py-4 border-b text-sm md:text-lg">Name</th>
               <th className="px-2 md:px-4 py-4 border-b text-sm md:text-lg">Quantity</th>
               <th className="px-2 md:px-4 py-4 border-b text-sm md:text-lg">Operations</th>
             </tr>
           </thead>
           <tbody className="">
             { myItems.map((inventory) => {
               return (
                 <tr className="" key={inventory._id}>
                   <td className="px-2 md:px-4 py-2 hidden md:block">
                     <img
                       className="h-12 w-12 object-cover rounded-md border border-indigo-700 p-1
                                     mx-auto"
                       src={inventory.image}
                       alt=""
                     />
                   </td>
                   <td className="px-2 md:px-4 py-2 text-sm md:text-md">{inventory.name}</td>
                   <td className="px-2 md:px-4 py-2">{inventory.quantity}</td>
                   <td className="px-2 md:px-4 py-2 space-x-2">
                     <Modal id={inventory._id}></Modal>
                    <Link to={`/inventory/${inventory._id}`}>
                    <button title='update'>
                       <PencilAltIcon className="h-8 w-8 bg-blue-200 text-blue-700 rounded-sm p-1"/>
                     </button>
                    </Link>
                   </td>
                 </tr>
               );
             })}
           </tbody>
         </table>
           </>
            :
            <div className='w-full h-96 grid place-content-center '>
            <h2 className='text-2xl font-bold mb-8'>You Haven't Added Any Items Yet</h2>
        <Link to="/addinventory">
        <button className="bg-indigo-600 text-white flex items-center justify-center px-4 py-2 rounded hover:bg-indigo-800 mx-auto">
          Add New <PencilAltIcon className="w-6 h-6 text-white ml-2" />
        </button>
      </Link>
       </div>
        }
       </div>
     </main>
     
     <Footer></Footer>
     </>
    );
};

export default MyItems;