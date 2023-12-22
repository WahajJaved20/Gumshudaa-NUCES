import React from 'react';
import {navbarLogo} from '../assets';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Divider = () => {
    return <div className="md:hidden h-1 w-full bg-secondaryColor mx-2 my-1"></div>;
  };

const Navbar = () => {
  const navigate = useNavigate();
  const handleHomeRoute = () => {
    const currentPath = window.location.pathname;
    if (currentPath !== '/home') {
      navigate('/home');
    }
  }
  const handlePostRoute = () => {
    const currentPath = window.location.pathname;
    if (currentPath !== '/post') {
      navigate('/post');
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logout Successful');
    navigate('/');
  }
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-primaryColor text-black border-b-4 border-gray-600">
      <div className="mb-4 md:mb-0 md:mr-4">
        <img
          src={navbarLogo}
          alt="Logo"

        />
      </div>
      <div className="flex flex-col md:flex-row items-center text-white">
        <Divider />
        <a href="#" className="text-2xl mb-2 md:mb-0 md:mr-4 font-Changa font-bold" onClick={handleHomeRoute}>Home</a>
        <Divider />
        <a href="#" className=" text-2xl mb-2 md:mb-0 md:mr-4 font-Changa font-bold" onClick={handlePostRoute}>Post</a>
        <Divider />
        <a href="#" className='text-2xl mb-2 md:mb-0 font-Changa font-bold md:mr-4' onClick={handleLogout}>Log Out</a>
      </div>
    </nav>
  );
};

export default Navbar;
