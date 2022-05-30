import { ChartBarIcon, CurrencyDollarIcon, UserIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { _id, name, image, price, quantity, supplier, description } = item;

  return (
    <div className="max-w-xs w-full border  min-h-96">
      <div className="font-roboto py-4 px-8 bg-indigo-100">
        <p className="sr-only">Name</p>
        <p className="text-2xl text-indigo-900 font-bold">{name}</p>
      </div>
      <div className="mb-4 py-2 px-8">
        <p className="text-sm md:text-md text-gray-500 font-medium">{description?.slice(0, 50)}...</p>
      </div>
      <div className="w-full h-36">
        <img className="h-full mx-auto" src={image} alt="" />
      </div>
      <div className="w-full flex justify-around items-center">
        <div className=" flex flex-col items-center w-24">
       <div className="w-full"> <p className="text-gray-500 text-sm">Quantity</p></div>
          <div className="text-center w-full flex items-center justify-center space-x-2 ">
          <ChartBarIcon className="w-5 h-5 text-indigo-700" />
            <p className="font-semibold text-lg">{quantity}</p>
          
          </div>
        </div>
        <div className="w-fit">
          <p className="sr-only">Price</p>
          <p className="text-xl text-indigo-900 font-bold flex items-center"> <CurrencyDollarIcon className="h-6 w-6 "/> {price}</p>
        </div>
        <div className=" flex flex-col items-center w-24">
       <div className="w-full"> <p className="text-gray-500 text-sm">Supplier</p></div>
          <div className="text-center w-full flex items-center justify-center space-x-2 ">
          <UserIcon className="w-5 h-5 text-indigo-700"/>
            <p className="font-semibold text-lg">{supplier}</p>
          
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between  my-6">
      </div>
      <Link to={`/inventory/${_id}`}>
        <button className="bg-indigo-700 w-full text-white py-2 font-medium">
          Update
        </button>
      </Link>
    </div>
  );
};

export default ItemCard;
