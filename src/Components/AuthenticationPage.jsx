import React from 'react';
import {frontLogo} from '../assets';


const AuthenticationPage = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-secondaryColor flex items-center justify-center">
        <img src={frontLogo} alt="Logo" className="max-w-m min-w-xs" />
      </div>
      <div className="flex-1 bg-primaryColor flex items-center flex-col justify-center">
        <div className='bg-white rounded-2xl min-h-8 min-w-8'> </div>
        <div className='bg-white rounded-2xl p-[25%]'>
          <label className='text-2xl font-bold font-Changa'>Login</label>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
