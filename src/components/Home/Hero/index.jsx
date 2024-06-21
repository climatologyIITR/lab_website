"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Container from "@/components/ui/container";
import researchProject from "../../../../public/assets/researchProject.svg"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import React from "react";

function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="flex flex-col -mt-10 lg:p-[80px] gap-y-[72px] py-[60px]">
      <Container className="">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col font-secondary w-[60%]">
            <p className="text-[#EDD87D] whitespace-nowrap w-fit h-fit m-0 p-0 uppercase text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-semibold opacity-[0.64]">
              Research{" "}
            </p>
            <p className="text-[#0064C8] m-0 p-0 uppercase text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-semibold opacity-[0.64]">
              Educate{" "}
            </p>
            <p className="text-[#00C8A4] m-0 p-0 uppercase text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-semibold opacity-[0.64]">
              Consult{" "}
            </p>
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <Carousel
              className="w-full max-w-xs"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <CarouselItem><Image src={researchProject} width={300} height={300} /></CarouselItem>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            {/* <Carousel>
              <CarouselContent>
                
                <CarouselItem><Image src={researchProject} width={30} height={30} /></CarouselItem>
                <CarouselItem><Image src={researchProject} width={30} height={30} /></CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}

          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-[#09539D] text-[32px] font-semibold">ABOUT</h1>
          <p className=" text-[18px] font-medium">
            Welcome to the Climatology Lab, a dynamic research hub dedicated to
            unraveling the mysteries of our changing climate. Our team of
            passionate researchers, led by Professor Mahua Mukherjee, explores
            various facets of climatology to understand and address the
            challenges posed by a rapidly evolving environment.
          </p>
        </div>
      </Container>
    </div>
  );
}
export default Hero;
