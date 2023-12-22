import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from './LoadingBar';

const ForgotPasswordLink = () => {
  const [emailID, setEmailID] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const emailRegex = /^[A-Za-z][0-9]{6}@nu\.edu\.pk$/;
const handleSubmit = async () => {
    if (emailID.length === 0) {
      toast.error('Please Enter Your Email ID');
      return;
    }
    if (!emailRegex.test(emailID)) {
      toast.error('Please Enter a Valid Email ID');
      return;
    }
    setLoading(true);
    const result = await fetch('https://server-gumshuda-nuces.vercel.app/forgotPasswordLink', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id: emailID,
      }),
    }).then((resp) => resp.json());
    console.log(result)
    if(result.type === "Success"){
      toast.success('Password Reset Link Sent');
    setLoading(false);

    }else{
      toast.error('Email ID Not Found');
    setLoading(false);

    }
  }
  return (<>
    {loading ? <LoadingBar /> : (
        <div className="min-h-screen flex items-center justify-center bg-primaryColor">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-2xl font-bold mb-8">Forgot Password</h1>
        <label className="text-2xl font-bold font-Changa mb-4">NU EMAIL</label>
          <input value={emailID} onChange={(e)=>{setEmailID(e.target.value)}}
          className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <button onClick={handleSubmit}
          className="bg-white text-2xl font-Changa text-black border-4 border-black rounded-full h-[12%] mt-4 font-bold w-[30%]">
          {"SEND LINK"}
          </button>
        </div>
    </div>
    )}
    </>
  );
};

export default ForgotPasswordLink;
