import React from "react";
import Link from "next/link";
import Image from "next/image";
import Form from "./Form";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#022140] p-10 md:p-20 mt-16 ">
      <div className="flex flex-col md:flex-row gap-x-20 container mx-auto">
        <div className="flex flex-col gap-y-[26px] ">
          <div className="grid grid-cols-3 gap-6 text-white">
            <Link
              href={"/"}
              className="hover:text-blue-500 hover:underline text-[16px]"
            >
              DAP Website
            </Link>
            <Link
              href={"/"}
              className="hover:text-blue-500 hover:underline text-[16px]"
            >
              Workshops
            </Link>
            <Link
              href={"/"}
              className="hover:text-blue-500 hover:underline text-[16px]"
            >
              Educational
            </Link>
            <Link
              href={"/"}
              className="hover:text-blue-500 hover:underline text-[16px]"
            >
              Opportunities
            </Link>
            <Link
              href={"/"}
              className="hover:text-blue-500 hover:underline text-[16px]"
            >
              Research & Projects
            </Link>
            <Link
              href={"/"}
              className="hover:text-blue-500 hover:underline text-[16px]"
            >
              Alumni
            </Link>
            <Link
              href={"/"}
              className="hover:text-blue-500 hover:underline text-[16px]"
            >
              Resources
            </Link>
            <Link
              href={"/"}
              className="hover:text-blue-500 hover:underline text-[16px]"
            >
              Affiliations
            </Link>
          </div>
          <div className="flex gap-10">
            <Image src={"/Images/logo.png"} height={96} width={96} />
            <Image src={"/Images/IITR.png"} height={96} width={96} />
          </div>
          <div className="text-white flex flex-col gap-2">
            <div className="flex gap-4">
              <MapPin strokeWidth={1.25} />{" "}
              <h1>Architecture dept. ,IIT Roorkee, Uttarakhand (247667)</h1>
            </div>
            <div className="flex gap-4">
              <MapPin strokeWidth={1.25} />{" "}
              <h1>Architecture dept. ,IIT Roorkee, Uttarakhand (247667)</h1>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Footer;
