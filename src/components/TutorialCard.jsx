import Image from 'next/image'
import React from 'react'
import tutorial from "@/assets/tutorial.svg";

const TutorialCard = () => {
    return (
        <div className="rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.16)]">
            <div className='flex px-[15px] py-[5px]'>
                <div className="flex flex-col px-[24px] py-[8px] bg-[#FFF] w-[70%]">
                    <span className="text-[#1D1D1D] text-[20px] font-[600] leading-[150%]">Working with Automatic Weather Stations</span>
                    <span className="text-[#1D1D1D] text-[16px] font-[300] leading-[136%] opacity-[0.8] mt-[5px]"><span className="font-[400]">Key concepts covered:<br /></span>
                        <li>Identification of key parts</li>
                        <li>How to use a weather station</li>
                        <li>Use cases</li>
                        <li>Extracting data from weather station</li>
                    </span>
                </div>
                <div className='w-[30%] flex items-center justify-center'>
                    <Image src={tutorial} height={167} width={136} />
                </div>
            </div>
        </div>
    )
}

export default TutorialCard