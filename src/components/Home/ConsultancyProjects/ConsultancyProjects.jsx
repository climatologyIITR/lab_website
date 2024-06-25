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
import { client, urlFor } from "@/app/lib/sanity";
import Link from "next/link";

const getProjects = async () => {
    const query = `*[_type=='consultancyProject'] | order(_createdAt desc){
  _id,
    title,
    description,
    details,
    "image":titleImage.asset._ref,
    status,
}  `

    const data = await client.fetch(query);
    return data;
}

const ConsultancyProjects = async () => {
    const data = await getProjects();

    return (
        <div className='bg-[#FFF] px-[80px] py-[65px]'>
            <Container>
                <h1 className="uppercase text-[#09539D] text-[32px] font-[600] leading-[150%]">
                    Consultancy projects
                </h1>
                <Carousel
                    className="w-full mt-5 mouse-drag"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselContent>
                        {data.map((project) => (
                            
                                <CarouselItem>
                                    <div className="flex border-none gap-[24px] rounded-[16px] bg-[#FFF] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.16)] px-[30px] py-[34px] my-[1%]">
                                        <Image src={urlFor(project?.image).url()} height={145} width={280} className="rounded-[8px]" alt="" />
                                        <div className="flex flex-col">
                                            <div className="text-[#1D1D1D] text-[20px] font-[500] leading-[125%]">{project?.title} </div>
                                            <div className="flex gap-[24px] mt-[24px]">
                                                <div className="text-[#1D1D1D] text-[16px] font-[300] leading-[150%] opacity-[0.8] w-[40vw]">
                                                    {project?.description}
                                                </div>
                                                <div className="flex flex-col w-[20vw] relative">
                                                    <div className="text-[#1D1D1D] text-[16px] font-[500] leading-[150%]">Field<span className="ml-[10px] opacity-[0.8]">{project?.details?.field}</span></div>
                                                    <div className="text-[#1D1D1D] text-[16px] font-[500] leading-[150%]">Start Date<span className="ml-[10px] opacity-[0.8]">{project?.details?.startDate}</span></div>
                                                    <div className="text-[#1D1D1D] text-[16px] font-[500] leading-[150%]">Financial Outlay<span className="ml-[10px] opacity-[0.8]">{project?.details?.financialOutlay}</span></div>
                                                    <div className="text-[#1D1D1D] text-[16px] font-[500] leading-[150%]">Funding Agency<span className="ml-[10px] opacity-[0.8]">{project?.details?.fundingAgency}</span></div>
                                                    <div className="absolute bottom-1 right-1 text-blue-400 hover:underline">
                                                    <Link href={`projects/consultancy/${project._id}`} key={project?._id}>see more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </Container>
        </div >
    )
}

export default ConsultancyProjects