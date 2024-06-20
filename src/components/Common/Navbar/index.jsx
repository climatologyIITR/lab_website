"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dapLogo from "@/assets/dapLogo.svg"
import labLogo from "@/assets/labLogo.svg"
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


const Navbar = () => {
  return (
    <div className="flex h-[63px] items-center justify-between border lg:px-[80px] rounded-b-lg py-3 rounded-[1px_1px_1px_12px] bg-[#FFF] shadow-[0px_2px_10px_0px_rgba(9,83,157,0.25)]">
      <Link href={"/"} className="flex gap-[12px] items-center text-[#000] text-[16px] font-[700] uppercase cursor-pointer">
        <Image src={labLogo} width={37} height={41} alt="" />
        CLIMATOLOGY LAB
      </Link>
      <div className="flex gap-[68px] my-[15px] text-[rgba(0,0,0,0.80)] text-[16px] font-[500] leading-[150%] tracking-[-0.304px] ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>ACTIVITIES</NavigationMenuTrigger>
              <NavigationMenuContent className="!flex !flex-col !justify-center !items-center !w-[25vw] !h-[10vh]">
                <NavigationMenuLink><a href={"/workshops"}>WORKSHOPS</a></NavigationMenuLink>
                <NavigationMenuLink><a href={"/tutorials"}>TUTORIALS</a></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>PROJECTS</NavigationMenuTrigger>
              <NavigationMenuContent className="!flex !flex-col !justify-center !items-center !w-[25vw] !h-[10vh]">
                <NavigationMenuLink><a href={"/projects/research"}>RESEARCH</a></NavigationMenuLink>
                <NavigationMenuLink><a href={"/projects/consultancy"}>CONSULTANCY</a></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>PUBLICATIONS</NavigationMenuTrigger>
              <NavigationMenuContent className="!flex !flex-col !justify-center !items-center !w-[25vw] !h-[10vh]">
                <NavigationMenuLink><a href={"/publications"}>PUBLICATIONS</a></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>TEAM</NavigationMenuTrigger>
              <NavigationMenuContent className="!flex !flex-col !justify-center !items-center !w-[25vw] !h-[10vh]">
                <NavigationMenuLink><a href={"/team"}>TEAM</a></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Link href={'https://iitr.ac.in/Departments/Architecture%20and%20Planning%20Department/index.html'}>
        <Image src={dapLogo} width={94} height={35} alt="" />
      </Link>
    </div>
  );
};

export default Navbar;