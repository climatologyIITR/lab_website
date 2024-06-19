import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import TutorialCard from "@/components/TutorialCard";
import React from "react";
import { client } from "../lib/sanity";

const getTutorials = async () => {
    const query = `*[_type=='tutorial'] | order(_createdAt desc){
  _id,
    title,
    keyConcepts,
    "doc":tutorialDoc.asset._ref
}`;

    const data = await client.fetch(query);
    return data;
};

const page = async () => {
    const data = await getTutorials();
    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="px-[80px] w-full h-full mb-[20vh]">
                <div className="my-[65px]">
                    <h1 className="text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px]">
                        Tutorial
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
                        {data.map((tut) => (
                            <TutorialCard tut={tut} key={tut._id} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;
