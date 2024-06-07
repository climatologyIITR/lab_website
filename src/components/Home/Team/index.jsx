import Image from "next/image";
import React from "react";
import teamImg from "@/assets/teamImg.svg";
import linkedinLogo from "@/assets/linkedinLogo.svg";
import mailLogo from "@/assets/mailLogo.svg";

const Team = () => {
  return (
    <div className='bg-[#FFF] px-[80px] py-[65px] mb-[45vh]'>
      <h1 className="text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[32px]">Team and alumni</h1>
      <div className="flex flex-col w-[296px] h-[196px]">
        <div className="rounded-[16px_16px_0px_0px] bg-[#0077B6] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.16)] px-[57px] pt-[20px]">
          <Image src={teamImg} height={176} width={182} />
        </div>
        <div className="flex flex-col p-[12px]  bg-[#FFF] rounded-[0px_0px_16px_16px] shadow-[2px_4px_10px_0px_rgba(0,0,0,0.16)]">
          <span className="text-[#1D1D1D] text-[20px] font-[600] leading-[150%] ">Kshitij Kacker</span>
          <span className="text-[#1D1D1D] text-[16px] font-[500] leading-[150%] opacity-[0.8]">Phd (3rd year)</span>
          <span className="text-[#1D1D1D] text-[16px] font-[300] leading-[136%] opacity-[0.8] mt-[24px]"><span className="font-[400]">Field of Research :</span> “Future projections of heat stress and its risk implications in an urban environment under changing climate”</span>
          <div className="flex flex-row mt-[24px] gap-[8px] justify-end">
            <Image src={linkedinLogo} height={32} width={32} />
            <Image src={mailLogo} height={32} width={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
