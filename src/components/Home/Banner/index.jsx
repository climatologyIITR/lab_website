"use client";
import React from "react";
import Container from "@/components/ui/container";
import { useSpring, animated } from "react-spring";
import AnimatedCounter from "./Animatedcounter";
function Number({ n }) {
  const { number } = useSpring({
    number: n,
    from: { number: 0 },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.div className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-semibold">
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
}
const Banner = () => {
  return (
    <div
      className={
        "xl:px-[80px] lg:px-[60px] md:px-[50px] sm:px-[40px] px-[20px] py-[24px] md:py-[38px] lg:py-[44px] bg-[#207B87]  "
      }
    >
      <div className=" container mx-auto grid lg:grid-cols-3 md:grid-cols-2 lg:flex  text-white">
        <Container className="flex flex-col items-center  mx-auto w-fit uppercase">
          <div className="flex">
            <AnimatedCounter
              className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-semibold"
              from={0}
              to={41}
            />
            <span className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-semibold">
              +
            </span>
          </div>
          <h2 className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[36px] font-medium">
            Publications
          </h2>
        </Container>
        <Container className="flex flex-col items-center mx-auto w-fit uppercase ">
        <div className="flex">
            <AnimatedCounter
              className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-semibold"
              from={0}
              to={41}
            />
            <span className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-semibold">
              +
            </span>
          </div>
          <h2 className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[36px] font-medium">
            projects
          </h2>
        </Container>
        <Container className="flex flex-col items-center mx-auto w-fit uppercase">
        <div className="flex">
            <AnimatedCounter
              className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-semibold"
              from={0}
              to={51}
            />
            <span className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-semibold">
              +
            </span>
          </div>

          <h2 className=" text-[24px] sm:text-[30px] md:text-[34px] lg:text-[36px] font-medium whitespace-nowrap">
            outreach programs
          </h2>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
