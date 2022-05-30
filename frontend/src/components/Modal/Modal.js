import { TrashIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";

export default function Modal({ id }) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteInventory = () => {

    setIsLoading(true);
    const url = `https://inventory-management-site.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          toast.success('item deleted',{id: 'delete'})
        }
        setIsLoading(false);
        setShowModal(false);
      });
  };

  return (
    <>
      <button title="delete" onClick={() => setShowModal(true)}>
        <TrashIcon className="h-8 w-8 bg-red-200 text-red-700 rounded-sm p-1" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full max-w-sm my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              
                {/*body*/}

                <div className="relative p-6 flex-auto">
                  {isLoading ? (
                    <div className="h-full w-full grid place-content-center">
                      <Loading>Deleting Item...</Loading>
                    </div>
                  ) : (
                    <p className="my-4 text-red-500 text-lg leading-relaxed">
                      Are You Sure You Want To Delete This Item?
                    </p>
                  )}
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end py-3 px-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-indigo-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleDeleteInventory(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
