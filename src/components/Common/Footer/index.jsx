import React from "react";
import Link from "next/link";
import Image from "next/image";
import Form from "./Form";
import iitrLogo from "@/assets/iitrLogo.svg";
import labLogo from "@/assets/labLogo.svg";
import mailFooter from "@/assets/mailFooter.svg";
import linkedinFooter from "@/assets/linkedinFooter.svg";
import location from "@/assets/location.svg";
import phone from "@/assets/phone.svg";

const Footer = () => {
  return (
    <div className="flex bg-[#022140] px-[91px] py-[88px] gap-[19px]">
      <div className="flex flex-col gap-[24px]">
        <div className="flex text-[#FFF] text-[16px] font-[400] leading-[150%] gap-[24px]">
          <span className="flex flex-col gap-[16px]">
            <Link href={"/"}>DAP Website</Link>
            <Link href={"/"}>Opportunities</Link>
            <Link href={"/"}>Resources</Link>
          </span>
          <span className="flex flex-col gap-[16px]">
            <Link href={"/"}>Workshops</Link>
            <Link href={"/"}>Projects</Link>
            <Link href={"/"}>Affiliations</Link>
          </span>
          <span className="flex flex-col gap-[16px]">
            <Link href={"/"}>Educational</Link>
            <Link href={"/"}>Alumni</Link>
          </span>
        </div>
        <div className="flex gap-[40px]">
          <Image src={labLogo} width={90} height={96} />
          <Image src={iitrLogo} width={90} height={96} />
        </div>
        <div className="flex flex-col gap-[21px] text-[#FFF] text-[16px] font-[400] leading-[150%] ">
          <span className="flex gap-[12px]"><Image src={location} width={17} height={16} />Architecture dept. ,IIT Roorkee, Uttarakhand (247667)</span>
          <div className="flex justify-between">
            <span className="flex gap-[12px] items-center"><Image src={phone} width={17} height={16} />+91 7298200002</span>
            <span className="flex gap-[16px] justify-end">
              <Image src={mailFooter} width={36} height={36} />
              <Image src={linkedinFooter} width={36} height={36} />
            </span>
          </div>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Footer;
