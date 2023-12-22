import React, { useEffect } from "react";
import { toast } from "react-toastify";

const ContentCard = ({ data, user }) => {
  useEffect(() => {
  }, [data]);
  const handleClick = () => {
    try{
      const response = fetch("https://server-gumshuda-nuces.vercel.app/markAsDone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: data._id }),
      });
      console.log(response);
      toast.success("Marked as Closed");
    }catch(err){
      console.log(err);
      toast.error("Error Occured");
    }
    setTimeout(() => {
      location.reload();
    }, 500);
  }
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
         <p className="font-Changa font-bold truncate">{data.locationFound}</p>
         <p className="font-Changa font-bold truncate mb-2">{data.date}</p>
         <button onClick={handleClick} disabled={(user !== data.userId) || data.closed} className={`${!data.closed ? "bg-green-500 " : "bg-red-500 "}font-Changa font-bold truncate text-white font-bold py-2 px-4 rounded ${!data.closed ? " hover:bg-red-500" : " hover:bg-green-500"}`}>
           {!data.closed ? user === data.userId ? "Mark as Closed" : "Open" : "Closed"}
         </button> 
       </div>

    </div>
  );
};

export default ContentCard;
