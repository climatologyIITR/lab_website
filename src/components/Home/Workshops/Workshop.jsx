import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/ui/container";
import Image from "next/image";
import ResearchImage from "@/assets/researchProject.svg"

const Workshop = () => {
    return (
        <div className='bg-[#207B87] px-[80px] py-[32px]'>
            <Container>
                <h1 className="uppercase text-[#FFF] text-[32px] font-[600] leading-[150%] text">
                    Workshops
                </h1>
                <Carousel
                    className="w-full  mt-5 mouse-drag"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselContent className="">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <CarouselItem>
                                <div className="flex border-none gap-[24px] rounded-[16px] bg-[#3F9DA9] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.16)] px-[30px] py-[34px] ">
                                    <div className="flex flex-col">
                                        <div className="text-[#FFF] text-[20px] font-[500] leading-[125%]">CURATE (Climate Understanding Rebooting for Architecture Education)</div>
                                        <div className="text-[#FFF] text-[16px] font-[500] opacity-[0.8]">IGNITION-1</div>
                                        <div className="text-[#FFF] text-[16px] font-[300] leading-[150%] opacity-[0.8] w-[60vw] mt-[24px]">
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
                                        <div className="flex gap-[22px] mt-[64px]">
                                            <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Field<span className="ml-[10px] opacity-[0.8]">Built environment</span></div>
                                            <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Start Date<span className="ml-[10px] opacity-[0.8]">01-01-2024</span></div>
                                            <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Financial Outlay<span className="ml-[10px] opacity-[0.8]">24.6 Lacs</span></div>
                                            <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Funding Agency<span className="ml-[10px] opacity-[0.8]">NMHS-MoEF</span></div>
                                        </div>
                                    </div>
                                    <div className="w-[35vw]">
                                        <Image src={ResearchImage} height={345} width={280} className="rounded-[8px]" />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </Container>
        </div>
    )
}

export default Workshop