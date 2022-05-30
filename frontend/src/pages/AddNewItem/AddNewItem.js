import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Header from "../../components/Header/Header";
import auth from "../../firebase.init";

const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const name = user?.displayName;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    fetch("https://inventory-management-site.herokuapp.com/inventory", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'authorization': `${user.email} ${localStorage.getItem('accessToken')}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => toast.success(data?.message));
    e.target.reset();
  };

  return (
    <>
      <Header></Header>
      <main className="min-h-screen">
        <h1 className="text-center text-3xl font-bold text-indigo-500">
          Add Inventory
        </h1>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-lg mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-6">
              <label
                htmlFor="nameInput"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Product Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                id="nameInput"
                aria-describedby="emailHelp"
                placeholder="Enter Product Name"
              />
            </div>

            <div className="flex justify-between gap-4">
              <div className="form-group mb-6">
                <label
                  htmlFor="priceInput"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Price
                </label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  id="priceInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter Price"
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="quantity"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Quantity
                </label>
                <input
                  {...register("quantity", { required: true })}
                  type="number"
                  className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                  id="quantity"
                  aria-describedby="emailHelp"
                  placeholder="Enter Quantity"
                />
              </div>
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="imageURL"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Image URL
              </label>
              <input
                {...register("image", { required: true })}
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                id="imageURL"
                placeholder="Image URL"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="supplier"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Supplier Name
              </label>
              <input
              value={name}
                {...register("supplier")}
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                id="supplier"
                placeholder="Supplier Name"
                readOnly
                required
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Supplier Email
              </label>
              <input
              value={email}
                {...register("email")}
                type="email"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Supplier Email"
                readOnly
                required
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Supplier Email"
              ></textarea>
            </div>

            <button
              type="submit"
              className="
      px-6
      py-2.5
      bg-indigo-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-indigo-700 hover:shadow-lg
      focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-indigo-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Add To Inventory
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default AddNewItem;
