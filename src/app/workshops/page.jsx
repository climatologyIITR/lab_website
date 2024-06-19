import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import WorkshopCard from "@/components/WorkshopCard";
import React from "react";
import { client } from "../lib/sanity";

// Function to fetch workshop data from Sanity
const getWorkshops = async () => {
    // Sanity query to get workshops data ordered by creation date
    const query = `*[_type=='workshops'] | order(_createdAt desc){
        _id,
        title,
        about,
        details,
        "image":titleImage.asset._ref
    }`;

    // Fetch data from Sanity client
    const data = await client.fetch(query);
    return data;
};

// Main page component
const page = async () => {
    // Fetch workshop data
    const data = await getWorkshops();
    
    return (
        <div className="w-full h-full">
            {/* Navbar Component */}
            <Navbar />
            <div className="px-[80px] w-full h-full mb-[20vh]">
                <div className="my-[65px]">
                    {/* Workshops Section */}
                    <h1 className="text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px]">
                        Workshops
                    </h1>
                    <div className="flex flex-col gap-[32px]">
                        {/* Render Workshop Cards */}
                        {data.map((workshop) => (
                            <WorkshopCard workshop={workshop} key={workshop._id} />
                        ))}
                    </div>
                </div>
            </div>
            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default page;

