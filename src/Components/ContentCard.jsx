import React, { useEffect } from "react";

const ContentCard = ({ data }) => {
  useEffect(() => {
    console.log(data);
  })
  return (
    <div className="flex bg-white rounded-lg shadow-md p-6 mb-4">
       <div className="flex-shrink-0 flex-col">
       <p className="mb-2 font-Changa font-bold truncate mb-2">Category: {data.category}</p>
         <img
           src={data.images}
           alt="Item"
           className="rounded-xl border-2 border-black h-32 w-32"
         />
       </div>
       <div className="ml-4 flex-1">
         <h2 className="text-xl mb-2 font-Changa font-bold truncate">{data.productTitle}</h2>
         <p className="mb-2 font-Changa font-bold truncate">{data.userId}</p>
         <p className="mb-2 font-Changa font-bold truncate">{data.phoneNumber}</p>
         <p className="font-Changa font-bold truncate">{data.locationFound}</p>
         <button className={`${!data.closed ? "bg-green-500 " : "bg-red-500 "}font-Changa font-bold truncate text-white font-bold py-2 px-4 rounded ${!data.closed ? " hover:bg-red-500" : " hover:bg-green-500"}`}>
           {data.closed ? "Open" : "Closed"}
         </button> 
       </div>

    </div>
  );
};

export default ContentCard;
