import React from 'react'

const PublicationCard = ({ publication }) => {
    return (
        <div className='flex items-center justify-between border-t-[1px] border-t-solid border-t-[#BABABA] border-b-[1px] border-b-solid border-b-[#BABABA] p-[12px]'>
            <div className='w-[30%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {publication?.title}
            </div>
            <div className='w-[10%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {publication?.details?.date}
            </div>
            <div className='w-[10%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {publication?.details?.field}
            </div>
            <div className='flex flex-wrap w-[10%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {publication?.details?.labMembers.map((member) =>
                    <p>{member},</p>
                )}
            </div>
            <div className='flex flex-wrap w-[30%] text-[#1D1D1D] text-[16px] font-[400] leading-[125%] '>
                {publication?.details?.otherParticipants.map((member) =>
                    <p>{member},</p>
                )}
            </div>
        </div>
    )
}

export default PublicationCard