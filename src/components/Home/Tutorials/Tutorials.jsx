import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/ui/container";
import { client } from "@/app/lib/sanity";
import Link from "next/link";

const getTutorials = async () => {
    const query = `*[_type=='tutorial'] | order(_createdAt desc){
  _id,
    title,
    keyConcepts,
    "doc":tutorialDoc.asset._ref
}`

    const data = await client.fetch(query);
    return data;
}

const Tutorials = async () => {
    const data = await getTutorials();

    return (
        <div className='bg-[#FFF] px-[80px] py-[65px]'>
            <Container>
                <h1 className="uppercase text-[#09539D] text-[32px] font-[600] leading-[150%]">
                    tutorialS
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
                    <CarouselContent>
                        {data.map((tut) => (
                            <Link href={`tutorials/${tut._id}`} key={tut?._id}>
                                <CarouselItem>
                                    <div className="flex gap-[32px] rounded-[16px] bg-[#FFF] shadow-[1px_2px_10px_0px_rgba(0,0,0,0.16)] px-[33px] py-[22px] my-[1%]">
                                        <div className="flex flex-col w-[50vw]">
                                            <div className="text-[#1D1D1D] text-[24px] font-[500] leading-[125%]">{tut?.title}</div>
                                            <div className="text-[#1D1D1D] text-[16px] font-[300] leading-[150%] opacity-[0.8]">
                                                {tut?.keyConcepts.map((line, index) => (
                                                    <ul key={index}>{line}</ul>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="w-[35vw]">
                                            {/* <Image src={fileUrl(tut?.doc)} height={145} width={280} className="rounded-[8px]" /> */}
                                        </div>
                                    </div>
                                </CarouselItem>
                            </Link>
                        ))}
                    </CarouselContent>
                </Carousel>
            </Container>
        </div>
    )
}

export default Tutorials