import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import WorkshopCard from "@/components/WorkshopCard";
import React from "react";
import { client } from "../lib/sanity";

const getWorkshops = async () => {
    const query = `*[_type=='workshops'] | order(_createdAt desc){
  _id,
    title,
    about,
    details,
    "image":titleImage.asset._ref
}`;

    const data = await client.fetch(query);
    return data;
};

const page = async () => {
    const data = await getWorkshops();
    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="px-[80px] w-full h-full mb-[20vh]">
                <div className="my-[65px]">
                    <h1 className="text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px]">
                        Workshops
                    </h1>
                    <div className="flex flex-col gap-[32px]">
                        {data.map((workshop) => (
                            <WorkshopCard workshop={workshop} key={workshop._id} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;
