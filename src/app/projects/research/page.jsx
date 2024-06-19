import Navbar from "@/components/Common/Navbar";
import React from "react";
import Find from "@/components/research/Find";
import ProjectCard from "@/components/research/ProjectCard";
import { client } from "@/app/lib/sanity";
import Footer from "@/components/Common/Footer";

const getProjects = async () => {
    const query = `*[_type=='researchProject'] | order(_createdAt desc){
  _id,
  _type,
    title,
    description,
    details,
    "image":titleImage.asset._ref,
    status,
}  `

    const data = await client.fetch(query);
    return data;
}

const page = async () => {
    const data = await getProjects();

    return (
        <div className="w-full h-full">
            <Navbar />
            <div className='px-[80px] w-full h-full mb-[20vh]'>
                <div className='my-[65px]'>
                    <h1 className='text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px]'>research projects</h1>
                    <Find />
                    <div className='flex justify-between text-[#1D1D1D] text-[15px] font-[600] leading-[125%] uppercase mb-[24px] mt-[47px]'>
                        <span className='w-[30%]'>Name</span>
                        <span className='w-[10%]'>Date</span>
                        <span className='w-[20%]'>location</span>
                        <span className='w-[10%]'>Financial Outlay</span>
                        <span className='w-[20%]'>Funding agency</span>
                        <span className='w-[10%]'>Status</span>
                    </div>
                    <div className="flex flex-col">
                        {data.map((project) => (
                            <ProjectCard project={project} key={project._id} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;
