import React from "react";
import Navbar from "./Navbar";
import "./homePage.css";
import ContentCard from "./ContentCard";
import LoadingBar from "./LoadingBar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const HomePage = () => {
    const navigate = useNavigate();
    const [cardsData, setCardData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState('');
    React.useEffect(() => {
        const fetchData = async (user) => {
            const response = await fetch("https://server-gumshuda-nuces.vercel.app/get");
            let data = await response.json();
            data = data.sort((a, b) => {
                const aMatches = a["userId"] === user;
                const bMatches = b["userId"] === user;
                if (aMatches && !bMatches) {
                  return -1;
                } else if (!aMatches && bMatches) {
                  return 1; 
                } else {
                  return 0;
                }
              });
              data = data.sort((a, b) => {
                const aMatches = a["closed"] === false;
                const bMatches = b["closed"] === false;
                if (aMatches && !bMatches) {
                  return -1;
                } else if (!aMatches && bMatches) {
                  return 1; 
                } else {
                  return 0;
                }
            });
            console.log(data);
            setCardData(data);
            console.log("Calling Server")
        }
        const getUser = async () => {
            const response = await fetch("https://server-gumshuda-nuces.vercel.app/verifyJWT", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ jwtToken: localStorage.getItem('token') }),
            });
            const data = await response.json();
            if(data.type === "Failed"){
                toast.error("Please Login First");
                navigate("/");
            }else{
                setCurrentUser(data.message.userId);
                return data.message.userId;
            }
            
        }
        if(cardsData.length > 0){
            setLoading(false);
        }else{
            getUser().then((user) => {
                fetchData(user).then(() => {
                    setLoading(false);
                })
            })
        
        }
       
    }, [cardsData]);
    return (
        <div >
            <Navbar />
            {loading ?
             <LoadingBar /> : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
                    {cardsData.map((data, index) => (
                        <ContentCard key={index} data={data} user={currentUser}/>
                    ))}
                    {cardsData.length === 0 ? <div className="h-screen"><h1 className="ml-16 text-2xl font-bold">No Data Found</h1></div> : <></>}
                    </div>
                    <Footer />
                </>
             )}
            
        </div>
    );
};

export default HomePage;