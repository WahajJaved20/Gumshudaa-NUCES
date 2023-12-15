import React from "react";
import Navbar from "./Navbar";
import "./homePage.css";
import ContentCard from "./ContentCard";
import { dummyProduct } from "../assets";
const HomePage = () => {
    const cardsData = [
        {
            itemPicture: dummyProduct,
            itemName: "headphones",
            contactInformation: "03123456789",
            emailID: "k200208@nu.edu.pk",
            location: "Dhaba",
        },
        {
            itemPicture: dummyProduct,
            itemName: "headphones",
            contactInformation: "03123456789",

            emailID: "k200208@nu.edu.pk",
            location: "Dhaba",
        },
        {
            itemPicture: dummyProduct,
            itemName: "headphones",
            contactInformation: "03123456789",

            emailID: "k200208@nu.edu.pk",
            location: "Dhaba",
        },
        {
            itemPicture: dummyProduct,
            itemName: "headphones",
            contactInformation: "03123456789",

            emailID: "k200208@nu.edu.pk",
            location: "Dhaba",
        },
        {
            itemPicture: dummyProduct,
            itemName: "headphones",
            contactInformation: "03123456789",

            emailID: "k200208@nu.edu.pk",
            location: "Dhaba",
        }
    ]
    return (
        <div >
            <Navbar />
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
            {cardsData.map((data, index) => (
                <ContentCard key={index} {...data} />
            ))}
            </div>
        </div>
    );
};

export default HomePage;