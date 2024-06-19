import { client } from '@/app/lib/sanity';
import Footer from '@/components/Common/Footer';
import Navbar from '@/components/Common/Navbar'
import React from 'react'

const getTutorial = async (slug) => {
    const query = `*[_type == 'tutorial' && _id=='${slug}']{
    title,
    "doc":tutorialDoc.asset._ref
}[0]`;

    const data = await client.fetch(query);
    return data;
};


const page = async ({ params }) => {
    const { slug } = params;
    const data = await getTutorial(slug);

    return (
        <div>
            <Navbar />
            <div className="px-[80px] mb-[10vh]">
                <div className="text-[#3392C5] text-[16px] font-[500] leading-[150%] tracking-[-0.304px] mt-[64px]">Workshops </div>
                <div className="flex gap-[32px]">
                    <div className="flex flex-col w-[70%]">
                        <div className="text-[#09539D] text-[20px] font-[500] leading-[125%]">{data?.title}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page