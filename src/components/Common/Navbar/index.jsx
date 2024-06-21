"use client";
import React from "react";
import Image from "next/image";
import dapLogo from "../../../../public/assets/dapLogo.svg"
import labLogo from "../../../../public/assets/labLogo.svg"
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"


const Navbar = () => {
  return (
    <div className="flex h-[63px] items-center justify-between border lg:px-[80px] rounded-b-lg py-3 rounded-[1px_1px_1px_12px] bg-[#FFF] shadow-[0px_2px_10px_0px_rgba(9,83,157,0.25)]">
      <Link href={"/"} className="flex gap-[12px] items-center text-[#000] text-[16px] font-[700] uppercase cursor-pointer">
        <Image src={labLogo} width={37} height={41} alt="" />
        CLIMATOLOGY LAB
      </Link>
      <div className="flex gap-[68px] my-[15px] text-[rgba(0,0,0,0.80)] text-[16px] font-[500] leading-[150%] tracking-[-0.304px] ">
        <Menubar className="border-none gap-[5%]">
          <MenubarMenu>
            <MenubarTrigger>ACTIVITIES</MenubarTrigger>
            <MenubarContent className="!flex !flex-col !justify-center !items-center">
              <MenubarItem><a href={"/workshops"}>WORKSHOPS</a></MenubarItem>
              <MenubarSeparator />
              <MenubarItem><a href={"/tutorials"}>TUTORIALS</a></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>PROJECTS</MenubarTrigger>
            <MenubarContent className="!flex !flex-col !justify-center !items-center">
              <MenubarItem><a href={"/projects/research"}>RESEARCH</a></MenubarItem>
              <MenubarSeparator />
              <MenubarItem><a href={"/projects/consultancy"}>CONSULTANCY</a></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>PUBLICATIONS</MenubarTrigger>
            <MenubarContent className="!flex !flex-col !justify-center !items-center">
              <MenubarItem><a href={"/publications"}>PUBLICATIONS</a></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>TEAM</MenubarTrigger>
            <MenubarContent className="!flex !flex-col !justify-center !items-center">
              <MenubarItem><a href={"/team"}>TEAM</a></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

      </div>
      <Link href={'https://iitr.ac.in/Departments/Architecture%20and%20Planning%20Department/index.html'}>
        <Image src={dapLogo} width={94} height={35} alt="" />
      </Link>
    </div>
  );
};

export default Navbar;