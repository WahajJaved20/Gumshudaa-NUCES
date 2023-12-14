import React from 'react';
import { frontLogo } from '../assets';

const AuthenticationPage = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row h-screen">
      <div className="flex-1 bg-secondaryColor flex items-center justify-center p-16">
        <img src={frontLogo} alt="Logo" className="w-2/3 md:w-full lg:w-full" />
      </div>

      <div className="flex-1 bg-primaryColor flex flex-col items-center justify-center p-8">
      <div className="bg-white flex flex-row rounded-3xl w-full max-w-lg border-4 border-solid border-black h-[10%] p-4 mb-4">
        <button className='flex-1'>LMFAO</button>
        <button className='flex-1'>LMFAO</button>
      </div>
        <div className="hidden md:block lg:block bg-white rounded-3xl w-full max-w-lg border-4 border-solid border-black h-[70%] p-8">
        <div className='mt-8'/>
          <label className="text-2xl md:text-3xl lg:text-3xl font-bold font-Changa mb-4">NU EMAIL</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <div className='mt-8'/>
          <label className="text-2xl md:text-3xl lg:text-3xl font-bold font-Changa mb-2 mt-4">PASSWORD</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none font-Changa w-full mb-4 mt-4" type="password" />
          <div className='mt-8'/>
          <button className="bg-white text-2xl font-Changa text-black border-4 border-black rounded-full h-[12%] mt-4 font-bold ml-[70%] w-[30%]">
            LOGIN
          </button>
        </div>

        <div className="block md:hidden lg:hidden bg-white rounded-3xl w-full max-w-lg border-4 border-solid border-black p-8 mt-4">
          <label className="text-2xl font-bold font-Changa mb-4">NU EMAIL</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <label className="text-2xl font-bold font-Changa mb-2 mt-4">PASSWORD</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none font-Changa w-full mb-4 mt-4" type="password" />

          <button className="bg-white text-xl font-Changa text-black border-4 border-black rounded-full h-[12%] mt-4 ml-[70%] font-bold w-[30%]">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
