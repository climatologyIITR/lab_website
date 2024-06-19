import Link from 'next/link'
import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <Link className='flex items-center justify-between border-t-[1px] border-t-solid border-t-[#BABABA] border-b-[1px] border-b-solid border-b-[#BABABA] p-[12px]' href={`/projects/${project._type === 'researchProject' ? 'research' : 'consultancy'}/${project._id}`}>
            <div className='w-[30%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {project?.title}
            </div>
            <div className='w-[10%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {project?.details?.startDate}
            </div>
            <div className='w-[20%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {project?.details?.location}
            </div>
            <div className='w-[10%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {project?.details?.financialOutlay}
            </div>
            <div className='w-[20%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {project?.details?.fundingAgency}
            </div>
            <div className='w-[10%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {project?.status}
            </div>
        </Link>
    )
}

export default ProjectCard