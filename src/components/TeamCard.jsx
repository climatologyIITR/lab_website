import Image from 'next/image'
import React from 'react'
import teamImg from "@/assets/teamImg.svg";
import linkedinLogo from "@/assets/linkedinLogo.svg";
import mailContact from "@/assets/mailContact.svg";
import labContact from "@/assets/labContact.svg";

const TeamCard = () => {
    return (
        <div className="flex h-[178px]">
            <div className="rounded-[16px_0px_0px_16px] bg-[#0077B6] h-[178px] w-[203px] shadow-[0px_-4px_12.4px_0px_rgba(0,0,0,0.25)] pl-[21px]">
                <Image src={teamImg} height={170} width={182} />
            </div>
            <div className="flex flex-col px-[24px] py-[18px] h-[178px] w-[421px] bg-[#FFF] rounded-[0px_16px_16px_0px] shadow-[2px_4px_10px_0px_rgba(0,0,0,0.16)]">
                <span className="text-[#1D1D1D] text-[20px] font-[600] leading-[150%]">Kshitij Kacker<span className="ml-[10px] text-[16px] font-[500] opacity-[0.8]">Phd (3rd year)</span></span>
                <span className="text-[#1D1D1D] text-[16px] font-[300] leading-[136%] opacity-[0.8] mt-[5px]"><span className="font-[400]">Field of Research :</span> “Future projections of heat stress and its risk implications in an urban environment under changing climate”</span>
                <div className='flex justify-between mt-[10px]'>
                    <div className='flex gap-[5px]'>
                        <Image src={mailContact} height={14} width={20} />
                        <span className='flex items-center text-[rgba(0,0,0,0.80)] text-[16px] font-[300] leading-[136%] opacity-[0.8]'>Kshitij.kacker@gmail.com</span>
                    </div>
                    <div className="flex flex-row gap-[8px] justify-end">
                        <Image src={labContact} height={32} width={32} />
                        <Image src={linkedinLogo} height={32} width={32} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard