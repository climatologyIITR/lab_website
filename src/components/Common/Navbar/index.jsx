"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/components/logo/logo";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="border lg:px-[80px] rounded-b-lg py-3">
      <div className="container mx-auto flex justify-between">
        <div
          className="flex gap-x-2 items-center my-auto"
          onClick={() => router.push("/")}
        >
          <Logo w={42} h={44} />
          <h1 className="font-primary text-[16px] font-semibold">
            CLIMATOLOGY LAB
          </h1>
        </div>
        <div className="flex gap-x-10">
          

        </div>
        <div>
          <Image src={"/Images/DAP.png"} width={94} height={34}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <>
<div className="py-[10px] lg:px-[80px] lg:flex hidden custom-shadow bg-white justify-between mx-auto z-50  w-full fixed top-0">
  <div
    className="flex gap-x-2 items-center my-auto"
    onClick={()=>router.push("/")}
  >
    <Logo w={42} h={44}/>
    <h1 className="font-primary text-[16px] font-semibold">
      CLIMATOLOGY LAB
    </h1>
  </div>
  <div className="flex lg:gap-x-[55px] items-center my-auto">
    <Link href={"/gallery"}>Gallery</Link>
    <Link href={"/research"}>Research and Project</Link>
    <Link href={"/"}>Team & Alumni</Link>
    <Link href={"/"}>Gallery</Link>
  </div>
</div>
<div className="flex lg:hidden py-[10px] px-10">
<div
    className="flex gap-x-2 items-center my-auto"
    onClick={()=>router.push("/")}
  >
    <svg
      width="42"
      height="44"
      viewBox="0 0 42 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5468 29.6455L20.5373 33.5935L3.42578 43.473L3.55094 15.8085L27.3795 1.99414L27.3831 25.688L41.0735 33.6519L37.6262 35.5687L23.7939 27.7478V8.0091L6.84689 17.7849V37.5439L20.5468 29.6455Z"
        fill="#2372B5"
      />
      <path
        d="M0 41.4968L0.0834432 13.8323L23.9585 0L27.3772 1.99426L3.54866 15.8086L3.4235 43.4731L0 41.4968Z"
        fill="#09539D"
      />
      <path
        d="M20.5453 9.88124L20.543 29.6462L37.6461 39.5221L37.6223 35.5694L23.79 27.7485V8.00977L20.5453 9.88124Z"
        fill="#CA2027"
      />
      <path
        d="M6.84375 33.6521L17.1118 27.6646L20.5437 29.6457L6.84375 37.5441V33.6521Z"
        fill="#09539D"
      />
      <path
        d="M41.0704 37.5448V33.6516L37.623 35.5684L37.6469 39.5211L41.0704 37.5448Z"
        fill="#F26A4D"
      />
      <path
        d="M17.0883 4.05298L20.5189 5.99836L20.5475 9.7592C20.5475 9.7592 20.5737 9.85576 20.5189 9.92251C20.4641 9.98807 23.8077 7.96401 23.8077 7.96401L23.7779 4.08397L20.3222 2.11475L17.043 4.00768L17.0883 4.05298Z"
        fill="#EDD87D"
      />
      <path
        d="M23.7793 4.08257L23.8091 4.79779L23.7936 27.7478L37.6259 35.5687L41.0732 33.6519L27.3828 25.688L27.3792 1.99414L23.7793 4.08257Z"
        fill="#EF3D2C"
      />
      <path
        d="M23.7846 4.08269L27.3845 1.99426L23.9658 0L20.3301 2.11346L23.7846 4.08269Z"
        fill="#CA2027"
      />
      <g clip-path="url(#clip0_360_1359)">
        <path
          d="M20.5392 6.02543L23.8077 4.10985L20.3521 2.14062L17.0645 4.03356L20.5392 6.02543Z"
          fill="#F6BB31"
        />
      </g>
      <defs>
        <clipPath id="clip0_360_1359">
          <rect
            width="6.74329"
            height="3.88481"
            fill="white"
            transform="translate(17.0645 2.14014)"
          />
        </clipPath>
      </defs>
    </svg>
    <h1 className="font-primary text-[12px] font-semibold">
      CLIMATOLOGY LAB
    </h1>
  </div>

</div>
</> */
}
