import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from './LoadingBar';
import { useNavigate, useLocation } from 'react-router-dom';
const ForgotPasswordPage = () => {
    const navigate = useNavigate();
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
const handleSubmit = async () => {
    if (password.length === 0) {
      toast.error('Please Enter Your Password');
      return;
    }
    setLoading(true);
    const result = await fetch(`https://server-gumshuda-nuces.vercel.app/updatePassword/${id}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            password: password,
        }),
    }).then((resp) => resp.json());
    console.log(result)
    if(result.type === "Success"){
      toast.success('Password Reset Successfully');
      toast.info("Please Login Again")
      navigate('/');
    }else{
        toast.error('Something Went Wrong');
    }
  }
  return (<>
    {loading ? <LoadingBar /> : (
        <div className="min-h-screen flex items-center justify-center bg-primaryColor">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
      <h3 className="text-md  mb-8"><a href='/'>{"<- Go Back"}</a> </h3>
        <h1 className="text-2xl font-bold mb-8">Forgot Password</h1>
        <label className="text-2xl font-bold font-Changa mb-4">Password</label>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}}
          className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <button onClick={handleSubmit}
          className="bg-white text-2xl font-Changa text-black border-4 border-black rounded-full h-[12%] mt-4 font-bold w-[30%]">
          {"RESET"}
          </button>
        </div>
    </div>
    )}
    </>
  );
};

export default ForgotPasswordPage;
