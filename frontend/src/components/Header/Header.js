import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import React, { Fragment, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import gear from "../../assets/image/gear.png";
import placeholder from '../../assets/image/placeholder.svg';
import auth from "../../firebase.init";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={`${
          match ? " bg-indigo-500 text-indigo-50" : ""
        }  px-2 py-1 rounded font-medium `}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ""}
    </div>
  );
}

const Header = () => {
  const [navbar,setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 200) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  const [ user ] = useAuthState(auth);
  return (
    <header className={`${navbar ? 'bg-indigo-600 -shadow-xl h-16' : 'bg-white h-20'} sticky top-0 w-full z-10  transition-all duration-200 `}>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className={`${navbar ? 'h-16' : 'h-20'} relative flex items-center justify-between `}>
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:justify-between">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to='/'>
                    <div className="flex items-center gap-2 lg:hidden ">
                      <img className=" h-12 w-auto" src={gear} alt="Workflow" />
                      <h3 style={{letterSpacing: '4px'}} className={`${navbar ? 'text-white' : 'text-red-500'} font-bold text-2xl font-bangers`}>Gears</h3>
                    </div>
                    </Link>
                    <Link to='/'>
                    <div className="hidden lg:flex items-center gap-2">
                      <img className=" h-14 w-auto" src={gear} alt="Workflow" />
                      <h3 style={{letterSpacing: '4px'}} className={`${navbar ? 'text-white' : 'text-red-500'} font-bold text-2xl font-bangers `}>Gears</h3>
                    </div>
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className={`${navbar ? 'text-white' : 'text-black'} flex space-x-4`}>
                      <CustomLink to="/">Home</CustomLink>
                      <CustomLink to="/blog">Blog</CustomLink>
                      <CustomLink to="/about">About Us</CustomLink>
                    </div>
                  </div>
                </div>
               
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                  <div>
                   {
                     user 
                     ?
                     <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                     <span className="sr-only">Open user menu</span>
                     <img
                       className="h-10 w-10 rounded-full"
                       src={user ? user.photoURL : placeholder}
                       alt=""
                     />
                   </Menu.Button>
                     :
                     <div className="hidden sm:block">
                     <Link to='/login'>
                     <button className={`border ${navbar ? 'text-white' : 'border-indigo-500 text-indigo-900'}  border-indigo-200 px-6 py-1 rounded-sm  font-medium hover:bg-indigo-500 hover:text-white duration-150 ease-in-out mr-6`}>
                       Login
                     </button>
                     </Link>
                    <Link to='/register'>
                    <button className={`border ${navbar ? 'text-white' : 'border-indigo-500 text-indigo-900'}  border-indigo-200 px-6 py-1 rounded-sm  font-medium hover:bg-indigo-500 hover:text-white duration-150 ease-in-out`}>
                       Register
                     </button>
                    </Link>
                   </div>
                   }
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg  bg-indigo-400 ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
                      <Menu.Item>
                          <Link
                            to="/manageinventory"
                            className= ' block px-4 py-4 text-sm text-indigo-50 hover:bg-indigo-500 hover:text-white w-full rounded-t-md'
                          >
                            Manage Items
                          </Link>
                      </Menu.Item>
                      <Menu.Item>
                          <Link
                            to="/addinventory"
                            className= ' block px-4 py-4 text-sm text-indigo-50 hover:bg-indigo-500 hover:text-white w-full'
                          >
                            Add Items
                          </Link>
                      </Menu.Item>
                      <Menu.Item>
                          <Link
                            to="/myitems"
                            className=' block px-4 py-4 text-sm text-indigo-50 hover:bg-indigo-500 hover:text-white w-full'
                          >
                            My Items
                          </Link>
                      </Menu.Item>
                      <Menu.Item>
                          <button
                          onClick={() => signOut(auth)}
                            className=' block px-4 py-4 text-sm text-indigo-50 hover:bg-indigo-500 hover:text-white w-full rounded-b-md'
                          >
                            Sign out
                          </button>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                  
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden bg-white">
              <div className="px-2 pt-2 pb-3 space-y-4 text-center flex justify-center border-b">
                <Disclosure.Button className='flex flex-col items-center justify-center gap-4'>
                  <CustomLink to="/">Home</CustomLink>
                  <CustomLink to="/blog">Blog</CustomLink>
                  <CustomLink to="/about">About Us</CustomLink>
                 
                 {
                   user 
                   ? 
                   <></> 
                   :
                   <div>
                   <Link to='/login'>
                       <button className="bg-indigo-500 px-3 py-1 rounded text-white font-medium mr-4 hover:bg-indigo-700 duration-150 ease-in-out">
                         Login
                       </button>
                       </Link>
                      <Link to='/register'>
                      <button className="border border-indigo-500 px-3 py-1 rounded text-indigo-500 font-medium hover:bg-indigo-500 hover:text-white duration-150 ease-in-out">
                         Register
                       </button>
                      </Link>
                   </div>
                 }
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
