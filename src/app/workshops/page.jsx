import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import WorkshopCard from '@/components/WorkshopCard'
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-full'>
            <Navbar />
            <div className='px-[80px] w-full h-full mb-[20vh]'>
                <div className='my-[65px]'>
                    <h1 className='text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px]'>Tutorial</h1>
                    <div className="flex flex-col gap-[32px]">
                        <WorkshopCard />
                        <WorkshopCard />
                        <WorkshopCard />
                        <WorkshopCard />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page