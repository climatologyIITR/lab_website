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

const getWorkshops = async () => {
    const query = `*[_type=='workshops'] | order(_createdAt desc){
  _id,
    title,
    about,
    details,
    "image":titleImage.asset._ref
}`

    const data = await client.fetch(query);
    return data;
}

const Workshop = async () => {
    const data = await getWorkshops();

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
                        {data.map((workshop) => (
                            <CarouselItem key={workshop?._id} >
                                <div className="flex border-none gap-[24px] rounded-[16px] bg-[#3F9DA9] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.16)] px-[30px] py-[34px] ">
                                    <div className="flex flex-col">
                                        <div className="text-[#FFF] text-[20px] font-[500] leading-[125%]">{workshop?.title} </div>
                                        <div className="text-[#FFF] text-[16px] font-[500] opacity-[0.8]">IGNITION-1</div>
                                        <div className="text-[#FFF] text-[16px] font-[300] leading-[150%] opacity-[0.8] w-[60vw] mt-[24px]">
                                            {workshop?.about}
                                        </div>
                                        <div className="flex gap-[22px] mt-[64px]">
                                            <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Field<span className="ml-[10px] opacity-[0.8]">{workshop?.details?.field}</span></div>
                                            <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Organizers<span className="ml-[10px] opacity-[0.8]">{workshop?.details?.organizers}</span></div>
                                            <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Start Date<span className="ml-[10px] opacity-[0.8]">{workshop?.details?.startDate}</span></div>
                                            <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Venue<span className="ml-[10px] opacity-[0.8]">{workshop?.details?.venue}</span></div>
                                        </div>
                                    </div>
                                    <div className="w-[35vw]">
                                        <Image src={urlFor(workshop?.image).url()} height={345} width={280} className="rounded-[8px]" alt="" />
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