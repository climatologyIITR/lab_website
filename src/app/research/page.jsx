import Navbar from "@/components/Common/Navbar";
import React from "react";
import Find from "@/components/research/Find";

const page = () => {
  return (
    <main className="">
      <Navbar />
      <h1 className="font-primary font-semibold text-[32px] text-fontHeading container mx-auto mt-20">
        Research Project
      </h1>
      <div className="lg:px-14 mt-20 container h-full mx-auto flex flex-col gap-8">
        <Find />
      </div>
    </main>
  );
};

export default page;
