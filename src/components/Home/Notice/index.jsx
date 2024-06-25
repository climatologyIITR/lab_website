import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MoveUpRight } from "lucide-react";
import Container from "@/components/ui/container";
import Link from "next/link";
import { client } from "@/app/lib/sanity";

const getNotices = async () => {
  const query = `*[_type=='notice'] | order(_createdAt desc){
        _id,
        title,
        description,
        date
    }`

  const data = await client.fetch(query);
  return data;
}


const Notice = async () => {
  const data = await getNotices();

  return (
    <div className='bg-[#FFF] px-[80px] py-[70px]'>
      <Container>
        <h1 className="uppercase text-[#09539D] text-[32px] font-[600] leading-[150%]">
          notice Board
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
            {data.map((notice) => (
              <CarouselItem className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 shadow-lg cursor-grab" key={notice?._id}>
                <div className=" rounded-[8px] bg-[#FFF] shadow-[1px_2px_12px_0px_rgba(0,0,0,0.16)]">
                  <div className="p-[12px]">
                    <div className="text-[#1D1D1D] text-[20px] font-[500] leading-[125%]">{notice?.title}</div>
                    <div className="text-[#1D1D1D] text-[16px] font-[400] leading-[125%] opacity-[0.8]">unveiling-1</div>
                    <div className="p-0">
                      <p className="text-[14px] text-[#1D1D1D] font-[300] leading-[150%] opacity-[0.8] mt-[16px]">
                        {notice?.description}
                      </p>
                      <div className="flex justify-between text-[14px] text-[#1D1D1D] font-[400] leading-[150%] opacity-[0.8] mt-[24px]">
                        <p>Date: {notice?.date}</p>
                        <div className="hover:text-blue-300 hover:underline flex cursor-pointer">
                          {" "}
                          <Link href={"/"}>View full</Link>{" "}
                          <MoveUpRight
                            strokeWidth={1.25}
                            size={16}
                            className="mt-1"
                          />
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
    </div>
  );
};

export default Notice;
