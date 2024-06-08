import React from "react";
import Image from "next/image";
import workshopImg from "@/assets/workshopImg.svg"
import workshopPic from "@/assets/workshopPic.svg"

const SingleWorkshop = () => {
    return (
        <div className="">
            <div className="flex gap-[32px]">
                <div className="flex flex-col w-[70%]">
                    <div className="text-[#09539D] text-[20px] font-[500] leading-[125%]">CURATE (Climate Understanding Rebooting for Architecture Education)</div>
                    <div className="text-[#09539D] text-[16px] font-[500] opacity-[0.8]">IGNITION-1</div>
                    <div className="text-[#000] text-[16px] font-[400] leading-[150%] opacity-[0.8] mt-[24px]">
                        <h1 className="text-[#1D1D1D] text-[24px] font-[500] leading-[125%] mb-[16px]">About</h1>
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
                        role of the Architects has further complicated. Whom to serve- smaller number of
                        resourceful people or a larger number of people whose affordability is
                        diminishing? Should young students learn building physics, or involve themselves
                        in quantitative techniques? Should the priority be on comfort or less energy
                        consumption? Is it only about the energy bill or earth-conscious design? Now a
                        poignant moment has arrived to debate the significance of climatology as a subject
                        in UG Architecture curriculum.
                        Through a series of planned Sessions, we will delve into the applicability of
                        Climatology in Architectural practice, evaluate current pedagogical approaches,
                        and propose strategies for enhancing its impact. Distinguished professionals will
                        share insights into how climatology enriches architectural careers, while educators
                        and researchers will critically assess existing pedagogy. Interactive sessions with
                        participants across age-group will facilitate interdisciplinary collaboration,
                        showcasing real-world case studies and best practices from around the globe. We
                        eagerly anticipate the active participation of these professionals, alongside
                        esteemed institutes and seasoned practitioners. By embracing diverse perspectives
                        and cultural contexts, we will gain a holistic understanding of how climatology can
                        inform sustainable design solutions. Join us as we embark on a journey towards a
                        more resilient and environmentally conscious built environment, empowering the
                        next generation of architects to shape a brighter future.
                    </div>
                </div>
                <div className="flex items-center justify-center mt-[5vh] w-[30%]">
                    <Image src={workshopImg} height={545} width={450} className="rounded-[22px]" />
                </div>
            </div>
            <div className="flex justify-between items-center mt-[34px]">
                <div className="flex gap-[42px]">
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Field<span className="ml-[5px] opacity-[0.8]">Built environment</span></div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Start Date<span className="ml-[5px] opacity-[0.8]">01-01-2024</span></div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Organizers<span className="ml-[5px] opacity-[0.8]">Climatology Lab, SAADRI</span></div>
                    <div className="text-[#000] text-[16px] font-[500] leading-[150%]">Venue<span className="ml-[5px] opacity-[0.8]">Online</span></div>
                </div>
                <button className="flex items-center text-[#2EA4FF] h-[6vh] text-[16px] font-[500] leading-[150%] p-[16px] rounded-[8px] border-solid border-[3px] border-[#2EA4FF]">View full Report</button>
            </div>
            <div className="mt-[80px]">
                <h1 className="text-[#1D1D1D] text-[24px] font-[500] leading-[125%] mb-[10px]">Photos</h1>
                <div className="flex justify-evenly flex-wrap">
                    <Image src={workshopPic} width={296} height={296} />
                    <Image src={workshopPic} width={296} height={296} />
                    <Image src={workshopPic} width={296} height={296} />
                    <Image src={workshopPic} width={296} height={296} />
                    <Image src={workshopPic} width={296} height={296} />
                    <Image src={workshopPic} width={296} height={296} />
                </div>
            </div>
        </div>
    )
}

export default SingleWorkshop