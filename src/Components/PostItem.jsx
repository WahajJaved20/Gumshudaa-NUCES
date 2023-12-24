import React from 'react';
import { frontLogo } from '../assets';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imageCompression from 'browser-image-compression';
import LoadingBar from './LoadingBar';

const PostItem = () => {
  const phoneRegex = /^\d{11}$/;
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [productTitle, setProductTitle] = React.useState('');
  const [locationFound, setLocationFound] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    jwtToken: localStorage.getItem('token'),
    date: new Date().toLocaleDateString(),
    closed: false
  });
  const handleInputChange = (event) => {
    if (event.target.name === 'productTitle') {
      setProductTitle(event.target.value);
    } else if (event.target.name === 'locationFound') {
      setLocationFound(event.target.value);
    }

    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData({ ...formData, category: event.target.value });
  };
  const handleHomeRoute = () => {
    const currentPath = window.location.pathname;
    if (currentPath !== '/home') {
      navigate('/home');
    }
  }
  async function changeImageSize(files){
    try {
      const options = {
        maxSizeMB: 0.01, // Set the maximum size for the compressed image
        maxWidthOrHeight: 400, // Set the maximum width or height for the compressed image
      };
      console.log("here")
      const compressedFile = await imageCompression(files, options);
      console.log(compressedFile)
      // return URL.createObjectURL(compressedFile);
      return compressedFile
    } catch (error) {
      console.error('Image compression failed:', error);
    }
  }
  const handleImageChange = async (e) => {
    let files = e.target.files;
    console.log(files)
    if (files.length <= 1) {
    files = await changeImageSize(files[0])
    console.log(files)
      var reader = new FileReader();
      reader.readAsDataURL(files);
      
      reader.onloadend = (e) => {
        
        setSelectedImages([reader.result]);
        setFormData({ ...formData, images: reader.result });
      };
      toast.success('Image loaded successfully.');
    } else {
      toast.error('Maximum 1 image allowed.');
      e.target.value = null;
      setSelectedImages([]);
    }
  };
  const handleSubmit = async () => {
    if (productTitle === '') {
      toast.error('Please enter product title');
      return;
    }
    if (locationFound === '') {
      toast.error('Please enter location found');
      return;
    }
    if (selectedOption == null) {
      toast.error('Please select category');
      return;
    }
    if (selectedImages.length === 0) {
      toast.error('Please select alteast 1 image');
      return;
    }
    setLoading(true);
    
    setFormData({ ...formData, jwtToken: localStorage.getItem('token') });
    console.log(formData)
    const payloadSize = JSON.stringify(formData).length;
    const payloadSizeInMB = payloadSize/(1024*1024)
    console.log(payloadSizeInMB)
    const result = await fetch(`https://server-gumshuda-nuces.vercel.app/post`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((resp) => resp.json());
        if(result.type === "Success"){
          toast.success('Post Successful');
          setLoading(false);
          navigate('/home');
        }else if(result.type === "Failed" && result.message=== "Invalid JWT Token"){
          console.log(result)
          setLoading(false);
          toast.error("Invalid JWT Token");
        }else{
          setLoading(false);
          toast.error("Post Failed");
          toast.info("Please try again")
        }
    
  }
  return (
    <>
    {loading ? <LoadingBar /> :(
    <>
      <div className="flex flex-col md:flex-row lg:flex-row h-screen">
      <div className={` flex-1 bg-secondaryColor flex items-center flex-col justify-center p-16`}>
      <h1 className="text-large font-bold font-Changa mb-32 text-white">POST DETAILS</h1>
        <img onClick={handleHomeRoute} src={frontLogo} alt="Logo" className="cursor-pointer w-2/3 md:w-full lg:w-full mb-32" />
      </div>

      <div className="flex-1 bg-primaryColor flex flex-col items-center justify-center p-8">
        <div className="hidden md:block lg:block bg-white rounded-3xl w-full max-w-lg border-4 border-solid border-black h-full p-8">
        <div className='mt-4'/>
          <label className="text-2xl md:text-3xl lg:text-3xl font-bold font-Changa mb-4">PRODUCT TITLE</label>
          <input value={productTitle} name="productTitle" onChange={handleInputChange} maxLength={20}
          className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <div className='mt-4'/>
          <label className="text-2xl md:text-3xl lg:text-3xl font-bold font-Changa mb-2 mt-4">LOCATION FOUND</label>
          <input value={locationFound} onChange={handleInputChange} name='locationFound' maxLength={20}
          className="border-b-4 font-bold text-xl border-black focus:outline-none font-Changa w-full mb-4 mt-4" type="text" />
          <div className='mt-4'/>
          <label htmlFor="imageInput" className='text-2xl font-bold font-Changa mb-2 mt-4'>Attach Images (Max 1):</label>
            <input
            className=' text-lg font-bold font-Changa mb-2 mt-4 w-full'
            type="file"
            id="imageInput"
            name="images"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            />
            <div className="flex items-center">
            <label className='text-2xl font-bold font-Changa mb-2 mt-4'>Category:</label>
      <label className="mr-4 text-2xl ml-[20%] font-bold font-Changa mb-2 mt-4">
        <input
          type="radio"
          value="lost"
          checked={selectedOption === 'lost'}
          onChange={handleOptionChange}
        />
        Lost
      </label>

      <label className='text-2xl font-bold font-Changa mb-2 mt-4'>
        <input
          type="radio"
          value="found"
          checked={selectedOption === 'found'}
          onChange={handleOptionChange}
        />
        Found
      </label>
    </div>
          <button onClick={handleSubmit}
          className="bg-white text-2xl font-Changa text-black border-4 border-black rounded-full h-[12%] mt-4 font-bold ml-[70%] w-[30%]">
          POST
          </button>
        </div>

        <div className="block md:hidden lg:hidden bg-white rounded-3xl w-full max-w-lg border-4 border-solid border-black p-8 mt-4">
          <label className="text-2xl font-bold font-Changa mb-4">PRODUCT TITLE</label>
          <input value={productTitle} onChange={handleInputChange} name='productTitle' maxLength={20}
          className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <label className="text-2xl font-bold font-Changa mb-4">LOCATION FOUND</label>
          <input value={locationFound} onChange={handleInputChange} name='locationFound' maxLength={20}
          className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <label htmlFor="imageInput" className='text-2xl font-bold font-Changa mb-4'>Attach Images (Max 1):</label>
            <input
            className='text-lg font-bold font-Changa mb-2 mt-4 w-full'
            type="file"
            id="imageInput"
            name="images"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            />
            <div className="flex flex-row items-center">
            <label className='text-2xl font-bold font-Changa mb-2 mt-2'>Category:</label>
      <label className="mr-4 text-2xl ml-[20%] font-bold font-Changa ml-4">
        <input
          type="radio"
          value="lost"
          checked={selectedOption === 'lost'}
          onChange={handleOptionChange}
        />
        Lost
      </label>

      <label className='text-2xl font-bold font-Changa ml-4'>
        <input
        
          type="radio"
          value="found"
          checked={selectedOption === 'found'}
          onChange={handleOptionChange}
        />
        Found
      </label>
    </div>
          <button onClick={handleSubmit} 
          className="bg-white text-xl font-Changa text-black border-4 border-black rounded-full h-[14%] mt-1 ml-[50%] font-bold w-[50%]">
            POST
          </button>
        </div>
      </div>
    </div>
    </>
    )}
    </>
    
  );
};

export default PostItem;
