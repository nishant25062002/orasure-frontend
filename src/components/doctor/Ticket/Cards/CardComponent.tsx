import React from "react";

const CardComponent = ({
  title,
  value,
}: {
  title?: string;
  value?: string;
}) => {
  return (
    <div className="flex mt-[12px]">
      <div className="text-[#444] text-[14px] font-[500] ">{title} -</div>
      <div className={`text-[#000] text-[14px] font-[500] pl-[4px]`}>
        {value}
      </div>
    </div>
  );
};

export default CardComponent;
