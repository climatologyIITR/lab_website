import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import TutorialCard from '@/components/TutorialCard'
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-full'>
            <Navbar />
            <div className='px-[80px] w-full h-full mb-[20vh]'>
                <div className='my-[65px]'>
                    <h1 className='text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[31px]'>Tutorial</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
                        <TutorialCard />
                        <TutorialCard />
                        <TutorialCard />
                        <TutorialCard />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page