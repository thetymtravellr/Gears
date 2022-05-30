import { GlobeIcon, OfficeBuildingIcon, UserGroupIcon, UserIcon } from "@heroicons/react/outline";
import React from "react";
import IncreaseNumber from "../../animation/IncreaseNumber";
import amazon from "../../assets/image/amazon.png";
import ebay from "../../assets/image/ebay.png";
import tesla from "../../assets/image/tesla.png";
import walmart from "../../assets/image/walmart.png";

const Stat = () => {

  return (
    <section className="py-12 px-4 min-h-[50vh] flex items-center bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-koulen text-yellow-500 text-center text-4xl font-bold drop-shadow-md mb-8">
          Our Partners
        </h1>
        <div className="w-full flex flex-wrap justify-center items-center space-x-8">
          <img className="w-40" src={amazon} alt="" />
          <img className="w-40" src={ebay} alt="" />
          <img className="w-40" src={tesla} alt="" />
          <img className="w-40" src={walmart} alt="" />
        </div>
        <div className="mt-12 flex flex-wrap justify-center items-center">
         <div className="w-60 h-fit border text-center p-6">
             <div className="flex items-center justify-center space-x-4 font-koulen ">
             <OfficeBuildingIcon className="w-12 h-12 text-red-500"/>
             <IncreaseNumber amount={20}/>
             </div>
             <div>
                 <p className="font-roboto text-gray-500 font-bold">Offices Worldwide</p>
             </div>
         </div>
         <div className="w-60 h-fit border text-center p-6">
             <div className="flex items-center justify-center space-x-4 font-koulen ">
             <UserGroupIcon className="w-12 h-12 text-red-500"/>
             <IncreaseNumber amount={270}/>
             </div>
             <div>
                 <p className="font-roboto text-gray-500 font-bold">Hardworking People</p>
             </div>
         </div>
         <div className="w-60 h-fit border text-center p-6">
             <div className="flex items-center justify-center space-x-4 font-koulen ">
             <GlobeIcon className="w-12 h-12 text-red-500"/>
             <IncreaseNumber amount={12}/>
             </div>
             <div>
                 <p className="font-roboto text-gray-500 font-bold">Countries Covered</p>
             </div>
         </div>
         <div className="w-60 h-fit border text-center p-6">
             <div className="flex items-center justify-center space-x-4 font-koulen ">
             <UserIcon className="w-12 h-12 text-red-500"/>
             <IncreaseNumber amount={25}/>
             </div>
             <div>
                 <p className="font-roboto text-gray-500 font-bold">Years of Experience </p>
             </div>
         </div>
          
        </div>
      </div>
    </section>
  );
};
export default Stat;
