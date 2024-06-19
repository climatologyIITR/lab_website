import React from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

const SingleWorkshop = ({ data }) => {
    return (
        <div className="">
            <div className="flex gap-[32px]">
                <div className="flex flex-col w-[70%]">
                    <div className="text-[#09539D] text-[20px] font-[500] leading-[125%]">{data?.title}</div>
                    <div className="text-[#09539D] text-[16px] font-[500] opacity-[0.8]">IGNITION-1</div>
                    <div className="text-[#000] text-[16px] font-[400] leading-[150%] opacity-[0.8] mt-[24px]">
                        <h1 className="text-[#1D1D1D] text-[24px] font-[500] leading-[125%] mb-[16px]">About</h1>
                        {data?.about}
                    </div>
                </div>
                <div className="flex items-center justify-center mt-[5vh] w-[30%]">
                    <Image src={urlFor(data?.image).url()} height={545} width={450} className="rounded-[22px]" />
                </div>
            </div>
            <div className="flex justify-between items-center mt-[34px]">
                <div className="flex gap-[42px]">
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Field<span className="ml-[5px] opacity-[0.8]">{data?.details?.field}</span></div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Start Date<span className="ml-[5px] opacity-[0.8]">{data?.details?.startDate}</span></div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Organizers<span className="ml-[5px] opacity-[0.8]">{data?.details?.organizers}</span></div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Venue<span className="ml-[5px] opacity-[0.8]">{data?.details?.venue}</span></div>
                </div>
                <button className="flex items-center text-[#2EA4FF] h-[6vh] text-[16px] font-[500] leading-[150%] p-[16px] rounded-[8px] border-solid border-[3px] border-[#2EA4FF]">View full Report</button>
            </div>
            <div className="mt-[80px]">
                <h1 className="text-[#1D1D1D] text-[24px] font-[500] leading-[125%] mb-[10px]">Photos</h1>
                <div className="flex justify-evenly flex-wrap">
                    {data?.photos?.map((photo) => (
                        <Image src={urlFor(photo?.asset._ref).url()} width={296} height={296} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SingleWorkshop