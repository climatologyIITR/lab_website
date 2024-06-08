import React from 'react'
import affiliationImg from "@/assets/affiliationImg.svg"
import Arrow from "@/assets/Arrow.svg"
import Image from 'next/image'

const AffiliationsCard = () => {
    return (
        <div className='flex items-center justify-between border-t-[1px] border-t-solid border-t-[#BABABA] border-b-[1px] border-b-solid border-b-[#BABABA] p-[12px]'>
            <div className='h-full'>
                <Image src={affiliationImg} width={192} height={80} />
            </div>
            <div className='w-[65%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                SAADRI (The South Asia Alliance of Disaster Research Institutes) is a coalition of South Asian and international members, aims to reduce disaster risks and enhance climate resilience. Through collaboration, it shares information, experiences, and initiatives. Science, technology, partnerships, and humanitarian focus drive its efforts to address challenges in one of the world's most vulnerable regions.
            </div>
            <button className="w-[10%] flex items-center text-[#2EA4FF] h-[6vh] text-[16px] font-[500] leading-[150%] p-[10px] rounded-[8px] border-solid border-[3px] border-[#2EA4FF]">
                Visit Site
                <Image src={Arrow} className='ml-[5px]' />
            </button>
        </div>
    )
}

export default AffiliationsCard