import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://inventory-management-site.herokuapp.com/inventory/${id}`)
      .then((data) => setProduct(data.data));
  }, [product]);

  const handleDelivered = () => {
    const newQuantity = parseInt(product.quantity) - 1;
    axios
      .put(`https://inventory-management-site.herokuapp.com/inventory/${id}`, {
        newQuantity,
      })
      .then((res) => console.log('updated'));
  };

  const handleRestock = (e) => {
    e.preventDefault();
    let restockValue = e.target.name.value;
    const newQuantity = parseInt(restockValue) + parseInt(product.quantity);
    axios
      .put(`https://inventory-management-site.herokuapp.com/inventory/${id}`, {
        newQuantity,
      })
      .then((res) => console.log(res.data));
    e.target.reset();
  };

  const { _id, name, image, price, quantity, supplier, email, description } =
    product;

  return (
    <>
      <Header></Header>
      <main className="min-h-[75vh] text-center">
        <h1 className="text-3xl font-semibold font-roboto my-6">
          Product Details
        </h1>
          <div className="w-full flex items-center justify-center space-x-2 flex-col md:flex-row">
            <div className=" w-full max-w-lg">
              <img className="max-w-xs mx-auto" src={image} alt="" />
            </div>
            <div className="w-full max-w-lg text-center border px-4 sm:px-12 space-y-4 h-fit py-4 my-4">
              <div className="w-full flex justify-between ">
                <h2 className="text-md text-gray-500">Product:</h2>
                <h2 className="text-lg font-medium">{name}</h2>
              </div>
              <div className="w-full flex justify-between ">
                <h2 className="text-md text-gray-500">ID:</h2>
                <h2 className="text-sm font-medium">{_id}</h2>
              </div>
              <div className="w-full flex justify-between ">
                <h2 className="text-md text-gray-500">Quantity:</h2>
                <h2 className="text-lg font-medium">{quantity == 0 ? 'sold-out' : quantity}</h2>
              </div>
              <div className="w-full flex justify-between ">
                <h2 className="text-md text-gray-500">Price:</h2>
                <h2 className="text-lg font-medium">${price}</h2>
              </div>
              <div className="w-full flex justify-between ">
                <h2 className="text-md text-gray-500">Supplier:</h2>
                <h2 className="text-lg font-medium">{supplier}</h2>
              </div>
              <div className="w-full flex justify-between ">
                <h2 className="text-md text-gray-500">Supplier Mail:</h2>
                <h2 className="text-sm font-medium">{email}</h2>
              </div>
              <div className="">
                <p className="text-justify">{description}</p>
              </div>
              <div className="flex flex-wrap space-x-4 space-y-4 justify-center items-center">
                <form
                  onSubmit={handleRestock}
                  className=" border h-12 relative"
                >
                  <input
                    className="h-full text-center "
                    type="number"
                    name="name"
                    min={0}
                  />
                  <button
                    type="submit"
                    className="bg-indigo-500 px-4 py-2 h-full text-white rounded font-medium"
                  >
                    Restock
                  </button>
                </form>
                <button
                  onClick={handleDelivered}
                  className=" bg-green-500 h-12 px-4 text-white rounded font-medium mt-6 md:mt-0"
                >
                  delivered
                </button>
              </div>
            </div>
          </div>
          <Link className="block max-w-fit mx-auto px-12 py-3 my-8 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded shadow sm:w-auto focus:outline-none focus:ring" to="/manageinventory">
               <button>Manage Inventories</button>
              </Link>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Product;
