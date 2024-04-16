import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";
import Container from "@/components/ui/container";
import Link from "next/link";

const Notice = () => {
  return (
    <div className="px-10 sm:px-12 md:px-16 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
      <Container>
        <h1 className="uppercase text-fontHeading font-bold text-[32px] w-fit">
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
          <CarouselContent className="-ml-1">
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 shadow-lg cursor-grab">
                <div className="p-1">
                  <Card className="p-3">
                    <CardTitle>NEW WORKSHOP</CardTitle>
                    <CardDescription>unveiling-1</CardDescription>
                    <CardContent className="p-0">
                      <p className="text-[14px] text-[#1D1D1D] font-light font-secondary mb-2">
                        The consequent session of the workshop CURATE (Climate
                        Understanding Rebooting for ArchitecTure Education){" "}
                      </p>
                      <div className="flex justify-between">
                        <p>Date: 20-4-24</p>
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
                    </CardContent>
                  </Card>
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
