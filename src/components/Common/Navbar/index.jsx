"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dapLogo from "@/assets/dapLogo.svg"
import labLogo from "@/assets/labLogo.svg"
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex h-[63px] items-center justify-between border lg:px-[80px] rounded-b-lg py-3 rounded-[1px_1px_1px_12px] bg-[#FFF] shadow-[0px_2px_10px_0px_rgba(9,83,157,0.25)]">
      <Link href={"/"} className="flex gap-[12px] items-center text-[#000] text-[16px] font-[700] uppercase cursor-pointer">
        <Image src={labLogo} width={37} height={41} />
        CLIMATOLOGY LAB
      </Link>
      <div className="flex gap-[68px] my-[15px] text-[rgba(0,0,0,0.80)] text-[16px] font-[500] leading-[150%] tracking-[-0.304px] ">
        <span className="cursor-pointer">ACTIVITIES</span>
        <span className="cursor-pointer">PROJECTS</span>
        <Link href={"/publications"} className="cursor-pointer">PUBLICATIONS</Link>
        <span className="cursor-pointer">TEAM</span>
      </div>
      <div>
        <Image src={dapLogo} width={94} height={35} />
      </div>
    </div>
  );
};

export default Navbar;