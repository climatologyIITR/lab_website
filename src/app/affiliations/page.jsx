import AffiliationsCard from '@/components/AffiliationsCard'
import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import React from 'react'
import { client } from '../lib/sanity'


const getAffiliations = async () => {
    const query = `* [_type == 'affiliation'] | order(_createdAt asc) {
        _id,
        description,
        siteUrl,
        "image": image.asset._ref,
}`

    const data = await client.fetch(query);
    return data;
}

const page = async () => {
    const data = await getAffiliations();

    return (
        <div className='w-full h-full'>
            <Navbar />
            <div className='px-[80px] w-full h-full mb-[20vh]'>
                <div className='my-[65px]'>
                    <h1 className='text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px]'>Affiliations</h1>
                    <div className="flex flex-col">
                        {data.map((affi) => (
                            <AffiliationsCard affiliation={affi} key={affi._id} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page