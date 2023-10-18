import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const ReviewProgress = ({ index, data }: { index: number; data: any }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= data) {
          clearInterval(timer);
          return data;
        }
        return prevProgress + 1;
      });
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [data]);

  return (
    <div className="!z-[-1] flex gap-[7px] mt-[19px] items-center">
      <div className="w-[24px] text-[12px] font-[400]">{index + 1}</div>
      <LinearProgress
        variant="determinate"
        value={progress}
        className="w-[100%] !text-[#1890ff] !bg-[#F5F5F5] !rounded-[100px] !h-[6px]"
      />
      <div className="w-[24px] text-[12px] font-[400] ml-[10px]">{data}%</div>
    </div>
  );
};

export default ReviewProgress;
