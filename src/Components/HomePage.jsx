import React from "react";
import Navbar from "./Navbar";
import "./homePage.css";
import ContentCard from "./ContentCard";
const HomePage = () => {
    const [cardsData, setCardData] = React.useState([]);
    React.useEffect(() => {

        const fetchData = async () => {
            const response = await fetch("https://server-gumshuda-nuces.vercel.app/get");
            const data = await response.json();
            setCardData(data);
            console.log("Calling Server")
        }
        fetchData();
        console.log(cardsData);
    }, []);
    return (
        <div >
            <Navbar />
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
            {cardsData.map((data, index) => (
                <ContentCard key={index} data={data} />
            ))}
            </div>
        </div>
    );
};

export default HomePage;