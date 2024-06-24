import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
const Form = () => {
  return (
    <>
      <h1 className="text-white font-[600] text-[56px]  leading-[150%] mb-[21px]">
        CONTACT US
      </h1>
      <form className="flex gap-[24px]">
        <div className="flex flex-col gap-y-5 w-[70%]">
          <textarea
            name=""
            id=""
            cols="40"
            rows="6"
            className="rounded-xl p-2"
            placeholder="Type here"
          ></textarea>
          <div className="flex gap-[24px]">
            <input
              placeholder="Email"
              type="email"
              className="rounded-[12px] bg-[#FFF] w-[60%] h-[5vh] p-[12px]"
            ></input>
            <input
              placeholder="Contact No."
              className="rounded-[12px] bg-[#FFF] w-[40%] h-[5vh] p-[12px]"
            ></input>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="">
            <label
              htmlFor="query"
              className="block text-gray-300 font-bold mb-2"
            >
              Query Type
            </label>
            <RadioGroup defaultValue="comfortable" className="text-white gap-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Consultancy</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Research</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Contact/vist</Label>
              </div>
            </RadioGroup>
            <Input placeholder="other" className="mt-5 w-[150px] rounded-lg"></Input>
          </div>
          <div className="flex justify-end mt-4">
            <button className="rounded-[12px] bg-[#43E843] w-[150px] h-[5vh] text-[#1D1D1D] text-[20px] font-[400] leading-[150%] ">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
