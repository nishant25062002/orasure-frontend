import React from "react";
import Divider from "./Divider";

const List = ({ data }: { data: any }) => {
  return (
    <div className="w-full px-[15px]">
      <Divider customStyle="bg-[#D9D9D9] h-[0.5px] mx-[22px] w-[calc(100%-44px)] my-[16px]" />
      <div className="text-[#000] text-[12px] font-[700]">{data.title}</div>
      <ul className="flex flex-col  list-disc   list-inside px-[4px] pt-[12px]">
        {data.points.map((head: any, index: any) => (
          <li key={index} className="text-[#444] text-[12px] font-[400]">
            {head}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
