import React from 'react';
import { frontLogo } from '../assets';
import { useNavigate } from 'react-router-dom';

const PostItem = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleHomeRoute = () => {
    const currentPath = window.location.pathname;
    if (currentPath !== '/home') {
      navigate('/home');
    }
  }
  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length + selectedImages.length <= 2) {
      setSelectedImages([...selectedImages, ...files]);
    } else {
      alert('Maximum 2 images allowed.');
      e.target.value = null;
    }
  };
  const handleSubmit = () => {
    console.log('submit')
  }
  return (
    <div className="flex flex-col md:flex-row lg:flex-row h-screen">
      <div className={` flex-1 bg-secondaryColor flex items-center flex-col justify-center p-16`}>
      <h1 className="text-large font-bold font-Changa mb-32 text-white">POST DETAILS</h1>
        <img onClick={handleHomeRoute} src={frontLogo} alt="Logo" className="cursor-pointer w-2/3 md:w-full lg:w-full mb-32" />
      </div>

      <div className="flex-1 bg-primaryColor flex flex-col items-center justify-center p-8">
        <div className="hidden md:block lg:block bg-white rounded-3xl w-full max-w-lg border-4 border-solid border-black h-full p-8">
        <div className='mt-4'/>
          <label className="text-2xl md:text-3xl lg:text-3xl font-bold font-Changa mb-4">PRODUCT TITLE</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <div className='mt-4'/>
          <label className="text-2xl md:text-3xl lg:text-3xl font-bold font-Changa mb-2 mt-4">PHONE NUMBER</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none font-Changa w-full mb-4 mt-4" type="number" />
          <div className='mt-4'/>
          <label className="text-2xl md:text-3xl lg:text-3xl font-bold font-Changa mb-2 mt-4">LOCATION FOUND</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none font-Changa w-full mb-4 mt-4" type="text" />
          <div className='mt-4'/>
          <label htmlFor="imageInput" className='text-2xl font-bold font-Changa mb-2 mt-4'>Attach Images (Max 2):</label>
            <input
            className='text-lg font-bold font-Changa mb-2 mt-4'
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
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <label className="text-2xl font-bold font-Changa mb-2 mt-4">PHONE NUMBER</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none font-Changa w-full mb-4 mt-4" type="text" />
          <label className="text-2xl font-bold font-Changa mb-4">LOCATION FOUND</label>
          <input className="border-b-4 font-bold text-xl border-black focus:outline-none mt-4 font-Changa w-full mb-4" type="text" />
          <label htmlFor="imageInput" className='text-2xl font-bold font-Changa mb-4'>Attach Images (Max 2):</label>
            <input
            className='text-lg font-bold font-Changa mb-2 mt-4'
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
  );
};

export default PostItem;
