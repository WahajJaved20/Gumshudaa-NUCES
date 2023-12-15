import React, { useEffect } from 'react';
import { frontLogo } from '../assets';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthenticationPage = () => {
  const [isLogin, setLogin] = React.useState(true);
  const navigate = useNavigate();
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
  async function verifyUser(){
    const result = await fetch(`https://server-gumshuda-nuces.vercel.app/verify/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
            }),
        }).then((resp) => resp.json());
        console.log(result)
    
  }
  useEffect(() => {
    console.log(id)
    if(id && id.length != 0){
      verifyUser()
      
    }
  }, [id])
  const handleTransition = (state) => {
    setLogin(state)
    console.log(isLogin)
  }
  const handleSubmit = () => {
    console.log('submit')
    navigate('/home')

  }
  return (
    <div className="flex flex-col md:flex-row lg:flex-row h-screen">
      <div className={` flex-1 bg-secondaryColor flex items-center justify-center p-16`}>
        <img src={frontLogo} alt="Logo" className="w-2/3 md:w-full lg:w-full" />
      </div>

      <div className="flex-1 bg-primaryColor flex flex-col items-center justify-center p-8">
      <div className="bg-tertiaryColor flex flex-col md:flex-row rounded-3xl w-full max-w-lg border-4 border-solid border-black p-2 mb-4">
      <button
        className={`flex-1 mb-2 text-xl font-Changa font-bold border-black  rounded-full 
        mb-2 md:mb-0 md:mr-2 ${isLogin ? 'bg-white border-4' : 'bg-tertiaryColor'}` }
        onClick={()=>{handleTransition(true)}}>
          LOGIN
      </button>
      <button
        className={`flex-1 text-xl font-Changa font-bold border-black 
        rounded-full md:ml-2 ${!isLogin ? 'bg-white border-4 ' : 'bg-tertiaryColor'}`}
        onClick={()=>{handleTransition(false)}}>
        REGISTER
      </button>
    </div>
        <div className="hidden md:block lg:block bg-white rounded-3xl w-full max-w-lg border-4 border-solid border-black h-[70%] p-8">
        <div className='mt-8'/>
          <label className="text-2xl md:text-3xl lg:text-3xl font-bold font-Changa mb-4">NU EMAIL</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <div className='mt-8'/>
          <label className="text-2xl md:text-3xl lg:text-3xl font-bold font-Changa mb-2 mt-4">PASSWORD</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none font-Changa w-full mb-4 mt-4" type="password" />
          <div className='mt-8'/>
          <button onClick={handleSubmit}
          className="bg-white text-2xl font-Changa text-black border-4 border-black rounded-full h-[12%] mt-4 font-bold ml-[70%] w-[30%]">
          {isLogin ? "LOGIN" : "REGISTER"}
          </button>
        </div>

        <div className="block md:hidden lg:hidden bg-white rounded-3xl w-full max-w-lg border-4 border-solid border-black p-8 mt-4">
          <label className="text-2xl font-bold font-Changa mb-4">NU EMAIL</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <label className="text-2xl font-bold font-Changa mb-2 mt-4">PASSWORD</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none font-Changa w-full mb-4 mt-4" type="password" />

          <button onClick={handleSubmit} 
          className="bg-white text-xl font-Changa text-black border-4 border-black rounded-full h-[14%] mt-4 ml-[60%] font-bold w-[50%]">
            {isLogin ? "LOGIN" : "REGISTER"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
