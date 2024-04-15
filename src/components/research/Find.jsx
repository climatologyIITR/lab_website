import React from "react";
import { Search } from "lucide-react";

const Find = () => {
  return (
    <div className=" flex gap-8">
      <div className="md:w-[48%]">
        <form className="flex width relative ">
          <input
            type="text"
            className="w-full border rounded-[8px] px-3 py-1 font-[14px] border-[#777777]"
            placeholder="search"
          />
          <Search strokeWidth={1.25} size={20} className="absolute right-2 top-1" />
        </form>
      </div>
      <div className="mb-4 w-[36%]">
        <select id="query" name="query" className=" px-3 py-1 rounded-[8px] w-full border border-[#777777]" required>
          <option value="Consultancy">Field</option>
          <option value="Research">Research</option>
          <option value="Contact / Visit">Contact / Visit</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4 w-[12%]">
        <select id="query" name="query" className=" px-3 py-1 rounded-[8px] w-full border border-[#777777]" required>
          <option value="Consultancy">Status</option>
          <option value="Research">Research</option>
          <option value="Contact / Visit">Contact / Visit</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Find;
