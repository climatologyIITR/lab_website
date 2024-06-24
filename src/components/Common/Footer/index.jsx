import React from "react";
import Link from "next/link";
import Image from "next/image";
import Form from "./Form";
import iitrLogo from "../../../../public/assets/iitrLogo.svg";
import labLogo from "../../../../public/assets//labLogo.svg";
import mailFooter from "../../../../public/assets//mailFooter.svg";
import linkedinFooter from "../../../../public/assets//linkedinFooter.svg";
import location from "../../../../public/assets//location.svg";
import phone from "../../../../public/assets//phone.svg";

const Footer = () => {
  return (
    <div className="flex bg-[#022140] px-[80px] py-[88px] gap-[19px]">
      <div className="flex flex-col gap-[24px] w-[40%]">
        <div className="flex text-[#FFF] text-[16px] font-[400] leading-[150%] gap-[24px]">
          <span className="flex flex-col gap-[16px]">
            <Link href={'https://iitr.ac.in/Departments/Architecture%20and%20Planning%20Department/index.html'}>DAP Website</Link>
            <Link href={"/"}>Opportunities</Link>
            <Link href={"/"}>Resources</Link>
          </span>
          <span className="flex flex-col gap-[16px]">
            <Link href={"/workshops"}>Workshops</Link>
            <Link href={"/projects/research"}>Research Projects</Link>
            <Link href={"/projects/consultancy"}>Consultancy Projects</Link>
          </span>
          <span className="flex flex-col gap-[16px]">
            <Link href={"/affiliations"}>Affiliations</Link>
            <Link href={"/"}>Educational</Link>
            <Link href={"/team"}>Team</Link>
          </span>
        </div>
        <div className="flex gap-[40px]">
          <Image src={labLogo} width={90} height={96} alt="" />
          <Image src={iitrLogo} width={90} height={96} alt="" />
        </div>
        <div className="flex flex-col gap-[21px] text-[#FFF] text-[16px] font-[400] leading-[150%] ">
          <span className="flex gap-[12px]"><Image src={location} width={17} height={16} alt="" />Architecture dept. ,IIT Roorkee, Uttarakhand (247667)</span>
          <div className="flex gap-[80px]">
            <span className="flex gap-[12px] items-center"><Image src={phone} width={17} height={16} alt="" />+91 7298200002</span>
            <span className="flex gap-[16px] justify-end">
              <Image src={mailFooter} width={36} height={36} alt="" />
              <Image src={linkedinFooter} width={36} height={36} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="w-[60%]">
        <Form />
      </div>
    </div>
  );
};

export default Footer;
