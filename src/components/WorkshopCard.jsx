import React from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import Link from "next/link";

const WorkshopCard = ({ workshop }) => {
    return (
        <Link className="flex gap-[24px] rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.16)] px-[30px] py-[34px] " href={`/workshops/${workshop._id}`}>
            <div className="flex flex-col w-[80%]">
                <div className="text-[#000] text-[20px] font-[500] leading-[125%]">
                    {workshop?.title}
                </div>
                <div className="text-[#000] text-[16px] font-[500] opacity-[0.8]">
                    IGNITION-1
                </div>
                <div className="text-[#000] text-[16px] font-[400] leading-[150%] opacity-[0.8] mt-[24px]">
                    {workshop?.about}
                </div>
                <div className="flex gap-[15px] mt-[34px]">
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">
                        Field
                        <span className="ml-[5px] opacity-[0.8]">
                            {workshop?.details?.field}
                        </span>
                    </div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">
                        Start Date
                        <span className="ml-[5px] opacity-[0.8]">
                            {workshop?.details?.startDate}
                        </span>
                    </div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">
                        Organizers
                        <span className="ml-[5px] opacity-[0.8]">
                            {workshop?.details?.organizers}
                        </span>
                    </div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">
                        Venue
                        <span className="ml-[5px] opacity-[0.8]">
                            {workshop?.details?.venue}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between w-[20%]">
                <Image
                    src={urlFor(workshop?.image).url()}
                    height={345}
                    width={280}
                    className="rounded-[8px]"
                    alt=""
                />
            </div>
        </Link>
    );
};

export default WorkshopCard;
