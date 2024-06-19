import React from 'react'
import Arrow from "@/assets/Arrow.svg"
import Image from 'next/image'
import { urlFor } from '@/app/lib/sanity'
import Link from 'next/link'

const AffiliationsCard = ({ affiliation }) => {
    return (
        <div className='flex items-center justify-between border-t-[1px] border-t-solid border-t-[#BABABA] border-b-[1px] border-b-solid border-b-[#BABABA] p-[12px]'>
            <div className='h-full'>
                <Image src={urlFor(affiliation.image).url()} width={192} height={80} />
            </div>
            <div className='w-[65%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {affiliation?.description}
            </div>
            <Link className="w-[10%] flex items-center text-[#2EA4FF] h-[6vh] text-[16px] font-[500] leading-[150%] p-[10px] rounded-[8px] border-solid border-[3px] border-[#2EA4FF]" href={affiliation?.siteUrl}>
                Visit Site
                <Image src={Arrow} className='ml-[5px]' />
            </Link>
        </div>
    )
}

export default AffiliationsCard