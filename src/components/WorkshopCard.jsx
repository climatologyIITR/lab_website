import React from "react";
import Image from "next/image";
import workshopImg from "@/assets/workshopImg.svg"

const WorkshopCard = () => {
    return (
        <div className="flex gap-[24px] rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.16)] px-[30px] py-[34px] ">
            <div className="flex flex-col w-[80%]">
                <div className="text-[#000] text-[20px] font-[500] leading-[125%]">CURATE (Climate Understanding Rebooting for Architecture Education)</div>
                <div className="text-[#000] text-[16px] font-[500] opacity-[0.8]">IGNITION-1</div>
                <div className="text-[#000] text-[16px] font-[400] leading-[150%] opacity-[0.8] mt-[24px]">
                    CURATE (Climate Understanding Rebooting for ArchitecTure Education),
                    essentially an opportunity designed for refreshing and curating knowledge and
                    understanding role of climatology for Architectural spaces, revisits and potentially
                    reshapes the syllabus for Climatology Subject in Undergraduate Architecture
                    classes. Through CURATE, we explore the pivotal role of climatology in shaping
                    the careers of budding architects.
                    The importance of integrating climate awareness into architectural learning is well-
                    practiced norm; though not necessarily consistent across Architecture Schools in
                    terms of how they impart and sensitize their students. A variety of subjects carry
                    the flavour, while Pedagogy and Content differ. With the advent of Science,
                    Technology and Innovation (IR 4.0 - 5.0), the spread of urbanization, population
                    explosion, and extreme variability in atmospheric conditions (climate change), the
                    role of the Architects has further complicated. Whom to ........
                </div>
                <div className="flex gap-[15px] mt-[34px]">
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Field<span className="ml-[5px] opacity-[0.8]">Built environment</span></div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Start Date<span className="ml-[5px] opacity-[0.8]">01-01-2024</span></div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Organizers<span className="ml-[5px] opacity-[0.8]">Climatology Lab, SAADRI</span></div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Venue<span className="ml-[5px] opacity-[0.8]">Online</span></div>
                </div>
            </div>
            <div className="flex items-center justify-between w-[20%]">
                <Image src={workshopImg} height={345} width={280} className="rounded-[8px]" />
            </div>
        </div>
    )
}

export default WorkshopCard