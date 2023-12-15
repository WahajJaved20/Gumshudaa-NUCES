import React from "react";

const ContentCard = ({ itemPicture, itemName, emailID, contactInformation, location }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex-shrink-0 flex-col">
      <p className="mb-2 font-Changa font-bold truncate mb-2">Category</p>
        <img
          src={itemPicture}
          alt="Item"
          className="rounded-xl border-2 border-black h-32 w-32"
        />
      </div>
      <div className="ml-4 flex-1">
        <h2 className="text-xl mb-2 font-Changa font-bold truncate">{itemName}</h2>
        <p className="mb-2 font-Changa font-bold truncate">{emailID}</p>
        <p className="mb-2 font-Changa font-bold truncate">{contactInformation}</p>
        <p className="font-Changa font-bold truncate">{location}</p>
        <button className="bg-green-500 font-Changa font-bold truncate hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Status: Not Recieved
        </button> 
      </div>
    </div>
  );
};

export default ContentCard;
