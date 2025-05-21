import { Toggle } from "@/components/ui/toggle";
import { articleData, columns, filters } from "@/utils";
import DataTable from "@/utils/DataTable";
import React, { useState } from "react";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("generated");

  // const filteredData = articleData.filter((e) => e.status === activeFilter);

  // console.log(activeFilter);

  return (
    <div className="w-full flex items-center flex-col justify-center">
      <h1 className="text-[32px] font-bold mb-4">Articles</h1>

      <div className="flex gap-2 flex-wrap mb-4">
        {filters.map((filter) => (
          <Toggle
            pressed={activeFilter === filter.value}
            onPressedChange={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 text-sm rounded-md border transition-colors
    data-[state=on]:bg-blue-600 data-[state=on]:text-white cursor-pointer
  `}
          >
            {filter.label}
          </Toggle>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search for Title and Keywords..."
        className="mb-4 w-[25%] text-[12px] px-[12px] py-[6px] mt-[5px] rounded-[8px] border text-black placeholder:text-[#555]"
      />
      
      <DataTable columns={columns} data={articleData}/>
    </div>
  );
};

export default Home;
