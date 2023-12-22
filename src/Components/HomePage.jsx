import React from "react";
import Navbar from "./Navbar";
import "./homePage.css";
import ContentCard from "./ContentCard";
import LoadingBar from "./LoadingBar";
const HomePage = () => {
    const [cardsData, setCardData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        if(cardsData.length > 0){
            setLoading(false);
        }
        const fetchData = async () => {
            const response = await fetch("https://server-gumshuda-nuces.vercel.app/get");
            const data = await response.json();
            setCardData(data);
            console.log("Calling Server")
        }
        fetchData();
        console.log(cardsData);
    }, [cardsData]);
    return (
        <div >
            <Navbar />
            {loading ?
             <LoadingBar /> : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
                    {cardsData.map((data, index) => (
                        <ContentCard key={index} data={data} />
                    ))}
                    </div>
                </>
             )}
            
        </div>
    );
};

export default HomePage;