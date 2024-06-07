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

const ResearchProjects = () => {
  return (
    <div className='bg-[#207B87] px-[80px] py-[32px]'>
      <Container>
        <h1 className="uppercase text-[#FFF] text-[32px] font-[600] leading-[150%]">
          Research projects
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
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem>
                <div className="flex border-none gap-[24px] rounded-[16px] bg-[#3F9DA9] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.16)] px-[30px] py-[34px] ">
                  <Image src={ResearchImage} height={145} width={280} className="rounded-[8px]" />
                  <div className="flex flex-col">
                    <div className="text-[#FFF] text-[20px] font-[500] leading-[125%]">Eco-system based Risk Resilience Planning for Sustainable Habitat in Himalayan Ecosystem</div>
                    <div className="flex gap-[24px] mt-[24px]">
                      <div className="text-[#FFF] text-[16px] font-[300] leading-[150%] opacity-[0.8] w-[40vw]">
                        Assessing the effectiveness of green roof installations in mitigating urban heat islands, exploring the correlation between vegetation cover and temperature reduction in urban environments. explores various facets of climatology to understand and address the challenges posed by a rapidly evolving environment. advantages get us where all is what happens lorem ipsum.
                      </div>
                      <div className="flex flex-col w-[20vw]">
                        <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Field<span className="ml-[10px] opacity-[0.8]">Built environment</span></div>
                        <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Start Date<span className="ml-[10px] opacity-[0.8]">01-01-2024</span></div>
                        <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Financial Outlay<span className="ml-[10px] opacity-[0.8]">24.6 Lacs</span></div>
                        <div className="text-[#FFF] text-[16px] font-[500] leading-[150%]">Funding Agency<span className="ml-[10px] opacity-[0.8]">NMHS-MoEF</span></div>
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
  )
}

export default ResearchProjects