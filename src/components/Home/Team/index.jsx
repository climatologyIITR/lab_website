import Image from "next/image";
import React from "react";
import linkedinLogo from "../../../../public/assets/linkedinLogo.svg";
import mailLogo from "../../../../public/assets/mailLogo.svg";
import { client, urlFor } from "@/app/lib/sanity";
import Link from "next/link";

const getTeam = async () => {
  const query = `*[_type=='teamAndAlumni'] | order(_createdAt asc) {
  _id,
  type,
  name,
  fieldOfResearch,
  details,
  "image":image.asset._ref
}`

  const data = await client.fetch(query);
  return data;
}

const Team = async () => {
  const data = await getTeam();

  return (
    <div className='bg-[#FFF] px-[80px] py-[65px] mb-[45vh]'>
      <h1 className="text-[#09539D] text-[32px] font-[600] leading-[150%] uppercase mb-[32px]">Team and alumni</h1>
      <div className="flex gap-[32px]">
        {data.map((val) => (
          <div className="flex flex-col w-[296px] h-[196px]" key={val._id}>
            <div className="rounded-[16px_16px_0px_0px] bg-[#0077B6] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.16)] px-[57px] pt-[20px]">
              <Image src={val.image ? urlFor(val?.image).url() : ''} height={176} width={182} alt="" />
            </div>
            <div className="flex flex-col p-[12px]  bg-[#FFF] rounded-[0px_0px_16px_16px] shadow-[2px_4px_10px_0px_rgba(0,0,0,0.16)]">
              <span className="text-[#1D1D1D] text-[20px] font-[600] leading-[150%] ">{val?.name}</span>
              <span className="text-[#1D1D1D] text-[16px] font-[500] leading-[150%] opacity-[0.8]">Phd (3rd year)</span>
              <span className="text-[#1D1D1D] text-[16px] font-[300] leading-[136%] opacity-[0.8] mt-[24px]"><span className="font-[400]">Field of Research :</span> “{val?.fieldOfResearch}”</span>
              <div className="flex flex-row mt-[24px] gap-[8px] justify-end">
                <Link href={val?.details?.linkedIn} className="cursor-pointer">
                  <Image src={linkedinLogo} height={32} width={32} alt="" />
                </Link>
                <Link href={val?.details?.linkedIn} className="cursor-pointer">
                  <Image src={mailLogo} height={32} width={32} alt="" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
