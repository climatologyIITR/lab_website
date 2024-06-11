import React from 'react'

const ProjectCard = () => {
    return (
        <div className='flex items-center justify-between border-t-[1px] border-t-solid border-t-[#BABABA] border-b-[1px] border-b-solid border-b-[#BABABA] p-[12px]'>
            <div className='w-[30%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                Rebuilding Rainbow school in
                Saharanpur, Uttar Pradesh
            </div>
            <div className='w-[10%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                01-01-2024
            </div>
            <div className='w-[20%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                Saharanpur,Uttar Pradesh
            </div>
            <div className='w-[10%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                24.6 Lacs
            </div>
            <div className='w-[20%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                NMHS-MoEF
            </div>
            <div className='w-[10%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                ongoing
            </div>
        </div>
    )
}

export default ProjectCard