import React from "react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog";
const SingleProject = ({ data }) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="text-[#09539D] text-[20px] font-[500] leading-[125%]">
        {data?.title}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-[42px]">
          {data._type === "researchProject" ? (
            <div className="text-[#000] text-[16px] font-[500] leading-[150%]">
              Field
              <span className="ml-[5px] opacity-[0.8]">
                {data?.details?.field}
              </span>
            </div>
          ) : (
            <div className="text-[#000] text-[16px] font-[500] leading-[150%]">
              Location
              <span className="ml-[5px] opacity-[0.8]">
                {data?.details?.location}
              </span>
            </div>
          )}
          <div className="text-[#000] text-[16px] font-[500] leading-[150%]">
            Start Date
            <span className="ml-[5px] opacity-[0.8]">
              {data?.details?.startDate}
            </span>
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[150%]">
            Financial Outlay
            <span className="ml-[5px] opacity-[0.8]">
              {data?.details?.financialOutlay}
            </span>
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[150%]">
            Funding Agency
            <span className="ml-[5px] opacity-[0.8]">
              {data?.details?.fundingAgency}
            </span>
          </div>
          <div className="text-[#000] text-[16px] font-[500] leading-[150%]">
            Contributors
            <span className="ml-[5px] opacity-[0.8]">
              {data?.details?.contributors.map((member, ind) => (
                <p key={ind}>{member},</p>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className="text-[#000] text-[16px] font-[400] leading-[150%] opacity-[0.8]">
        <h1 className="text-[#1D1D1D] text-[24px] font-[500] leading-[125%]">
          Description
        </h1>
        {data?.description}
      </div>
      <Dialog>
        <DialogTrigger className="flex max-w-[180px] items-center text-[#2EA4FF] h-[6vh] text-[16px] font-[500] leading-[150%] p-[16px] rounded-[8px] border-solid border-[3px] border-[#2EA4FF]">
          View full Report
        </DialogTrigger>
        <DialogContent className="w-[800px] h-[600px] ">
          <embed src={"/assets/sample.pdf"} className="w-full h-full" type="" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SingleProject;
