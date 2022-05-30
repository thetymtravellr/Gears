import { PencilAltIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Modal from "../../components/Modal/Modal";
import useItems from "../../hooks/useItems";

const ManageInventory = () => {

  const { items } = useItems()

  return (
    
    <>
    <Header></Header>
    <main className="min-h-screen text-center">
      <h1 className="text-4xl font-semibold mt-6 mb-12">Manage Inventory</h1>
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="flex space-x-4 my-4">
          <h3 className="text-3xl font-bold">Inventories: {items.length}</h3>
          <Link to="/addinventory">
            <button className="bg-indigo-600 text-white flex items-center justify-center px-4 py-2 rounded hover:bg-indigo-800">
              Add New <PencilAltIcon className="w-6 h-6 text-white ml-2" />
            </button>
          </Link>
        </div>
        {
          !items.length
          ?
          <div className="h-[50vh] w-full grid place-content-center">
          <Loading>Loading Item...</Loading>
        </div>
        :
        <table className="table-auto w-full rounded  border-collapse border border-slate-200 mb-8">
        <thead>
          <tr>
            <th className="p-4 border-b hidden md:block">Image</th>
            <th className="p-4 border-b">Name</th>
            <th className="p-4 border-b">Quantity</th>
            <th className="p-4 border-b hidden md:block">Supplier</th>
            <th className="p-4 border-b">Operations</th>
          </tr>
        </thead>
        <tbody className="text-center mx-auto">
        {
              items.map((item) => {
                return (
                  <tr className="" key={item._id}>
                    <td className="px-4 py-2 hidden md:block">
                      <img
                        className="h-12 w-12 object-cover rounded-md border border-indigo-700 p-1
                                      mx-auto"
                        src={item.image}
                        alt=""
                      />
                    </td>
                    <td className="px-4 py-2 text-sm sm:text-md">{item.name}</td>
                    <td className="px-4 py-2">{item.quantity}</td>
                    <td className="px-4 py-2 hidden md:table-cell">
                      {item?.supplier?.split(' ')[0]}
                    </td>
                    <td className="px-4 py-2">
                    <Modal id={item._id}></Modal>
                    <Link className="ml-2" to={`/inventory/${item._id}`}>
                    <button title='update'>
                       <PencilAltIcon className="h-8 w-8 bg-blue-200 text-blue-700 rounded-sm p-1"/>
                     </button>
                    </Link>
                    </td>
                  </tr>
                );
              })
          }
          
        </tbody>
      </table>
        }
           
      </div>
    </main>
    <Footer></Footer>
    </>
  );
};

export default ManageInventory;
