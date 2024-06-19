import { client } from '@/app/lib/sanity';
import Footer from '@/components/Common/Footer';
import Navbar from '@/components/Common/Navbar';
import SingleProject from '@/components/research/SingleProject';
import React from 'react'

const getProject = async (slug) => {
    const query = `*[_type=='consultancyProject' && _id=='${slug}'] | order(_createdAt desc){
  _id,
  _type,
    title,
    description,
    details,
    "image":titleImage.asset._ref,
    status,
}[0]`

    const data = await client.fetch(query);
    return data;
}

const page = async ({ params }) => {
    const { slug } = params;
    const data = await getProject(slug);

    return (
        <div>
            <Navbar />
            <div className="px-[80px] w-full h-full my-[65px]">
                <div className="text-[#3392C5] text-[16px] font-[500] leading-[150%] tracking-[-0.304px] mt-[64px]">Consultancy projects</div>
                <SingleProject data={data} key={data._id} />
            </div>
            <Footer />
        </div>
    )
}

export default page