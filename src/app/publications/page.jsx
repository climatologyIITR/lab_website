import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import PublicationCard from '@/components/PublicationCard'
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-full'>
            <Navbar />
            <div className='px-[80px] w-full h-full mb-[20vh]'>
                <div className='my-[65px]'>
                    <h1 className='text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px]'>Publications</h1>
                    <div className=' px-[25px]'>
                        <div className='flex justify-between text-[#1D1D1D] text-[15px] font-[600] leading-[125%] uppercase mb-[24px]'>
                            <span className='w-[30%]'>Name</span>
                            <span className='w-[10%]'>Date</span>
                            <span className='w-[10%]'>Field</span>
                            <span className='w-[10%]'>Lab Member</span>
                            <span className='w-[30%]'>Other participants</span>
                        </div>
                        <div className="flex flex-col">
                            <PublicationCard />
                            <PublicationCard />
                            <PublicationCard />
                            <PublicationCard />
                            <PublicationCard />
                            <PublicationCard />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page