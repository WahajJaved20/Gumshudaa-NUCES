import React from 'react';
import {navbarLogo} from '../assets';

const Divider = () => {
    return <div className="md:hidden h-1 w-full bg-secondaryColor mx-2 my-1"></div>;
  };

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-primaryColor text-black ">
      <div className="mb-4 md:mb-0 md:mr-4">
        <img
          src={navbarLogo}
          alt="Logo"
          className=""
        />
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <Divider />
        <a href="#" className="text-2xl mb-2 md:mb-0 md:mr-4 font-Changa font-bold">Home</a>
        <Divider />
        <a href="#" className=" text-2xl mb-2 md:mb-0 md:mr-4 font-Changa font-bold">Post</a>
        <Divider />
        <a href="#" className='text-2xl mb-2 md:mb-0 font-Changa font-bold'>Log Out</a>
      </div>
    </nav>
  );
};

export default Navbar;
