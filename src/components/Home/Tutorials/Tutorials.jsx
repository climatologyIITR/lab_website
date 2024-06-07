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

const Tutorials = () => {
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
                        {Array.from({ length: 7 }).map((_, index) => (
                            <CarouselItem>
                                <div className="flex gap-[32px] rounded-[16px] bg-[#FFF] shadow-[1px_2px_10px_0px_rgba(0,0,0,0.16)] px-[33px] py-[22px] my-[1%]">
                                    <div className="flex flex-col w-[50vw]">
                                        <div className="text-[#1D1D1D] text-[24px] font-[500] leading-[125%]">Automatic Weather Station</div>
                                        <div className="text-[#1D1D1D] text-[16px] font-[300] leading-[150%] opacity-[0.8]">
                                            A weather station is a system of integrated components that automatically measure, record, and sometimes transmit weather data.An automated weather station is an automatic version of a traditional weather station. They can be single-site or part of a weather network. Automatic weather stations are the worldwide standard for climate and boundary-layer meteorology. These stations most commonly report on surface weather observations like:
                                            1. Temperature
                                            2. Wind Speed
                                            3. Wind Direction
                                            4. Precipitation
                                            5. Humidity
                                            6. Solar Radiation
                                            7. Atmospheric Pressure
                                            8. Visibility
                                            This isn’t a complete list of measurements, but these are some of the most common. Depending on the weather station, they can also measure things like cloud height. It all depends on a station’s components.
                                        </div>
                                    </div>
                                    <div className="w-[35vw]">
                                        <Image src={ResearchImage} height={145} width={280} className="rounded-[8px]" />
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

export default Tutorials