import Image from "next/image";
import React from "react";
import Link from "next/link";

const TutorialCard = ({ tut }) => {
    return (
        <Link className="rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.16)]" href={`/tutorials/${tut._id}`}>
            <div className="flex px-[15px] py-[5px]">
                <div className="flex flex-col px-[24px] py-[8px] bg-[#FFF] w-[70%]">
                    <span className="text-[#1D1D1D] text-[20px] font-[600] leading-[150%]">
                        {tut?.title}
                    </span>
                    <span className="text-[#1D1D1D] text-[16px] font-[300] leading-[136%] opacity-[0.8] mt-[5px]">
                        <span className="font-[400]">
                            Key concepts covered:
                            <br />
                        </span>
                        {tut?.keyConcepts.map((line) => (
                            <li>{line}</li>
                        ))}
                    </span>
                </div>
                <div className="w-[30%] flex items-center justify-center">
                    {/* <Image src={} height={167} width={136} /> */}
                </div>
            </div>
        </Link>
    );
};

export default TutorialCard;
