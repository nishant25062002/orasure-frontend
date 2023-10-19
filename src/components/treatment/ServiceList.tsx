import React, { useState, useEffect } from "react";
import Divider from "../global/Divider";
import CustomButton from "../global/CustomButton";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
  const navigate = useNavigate();
  const services = [
    {
      item: "Routine Checkup",
      price: "Unlimited",
    },
    {
      item: "X Rays",
      price: "Unlimited",
    },
    {
      item: "Routine Scaling",
      price: "1",
    },
    {
      item: "Restoration",
      price: "4",
    },
    {
      item: "Extraction",
      price: "2",
    },
  ];

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const array = [];
    for (let i = 0; i < services.length; i++) {
      array.push(0);
    }
    setSelected(array);
  }, []);

  const increaseItem = (ind: number) => {
    const newArray = [...selected];
    newArray[ind] = newArray[ind] + 1;
    setSelected(newArray);
  };
  const descreaseItem = (ind: number) => {
    const newArray = [...selected];
    newArray[ind] = newArray[ind] - 1;
    setSelected(newArray);
  };

  return (
    <div className="my-[30px]">
      <div className="ml-[7px] text-[#222] text-[16px] leading-[16px] font-[700] uppercase">
        Enamel Health Plan
      </div>
      <Divider
        customStyle={"h-[1.2px] w-full bg-[#D9D9D9] mt-[15px] mb-[20px]"}
      />
      <div className="flex p-[10px_11px] items-center gap-[24px]">
        <div className="text-[#116eb6] text-[12px] leading-[12px] font-[600] flex w-[35%]">
          List of Services :
        </div>
        <div className="text-[#116eb6] text-[12px] leading-[12px]  font-[600] ">
          Number of Treatments
        </div>
      </div>
      <div className="mx-[5px]">
        {services.map((data, index) => (
          <div key={index} className="flex p-[10px_0] items-center">
            <div className="text-[#555] text-[12px] font-[600] w-[43%] flex ">
              {index + 1}. {data?.item}
            </div>
            <div className="text-[#000] text-[12px] font-[600] w-[35%] flex justify-center">
              {data?.price}
            </div>
            <div className="text-[#116eb6] text-[12px] font-[600] w-[20%] flex justify-center">
              {selected[index] < 1 ? (
                <button
                  className="rounded-[4px] border-[1px] border-[#446904] bg-[rgba(158,197,91,0.44)] flex p-[4px_9px] items-center justify-center text-[#446904] text-[10px] font-[700] h-[25px]"
                  onClick={() => {
                    increaseItem(index);
                  }}
                >
                  Add
                </button>
              ) : (
                <div className="rounded-[5px] border-[0.5px] border-[#446904] bg-[rgba(158,197,91,0.44)] flex p-[4px_5px] items-center justify-center text-[#446904] text-[12px] font-[700] h-[25px] gap-[5px]">
                  <button
                    onClick={() => {
                      descreaseItem(index);
                    }}
                  >
                    -
                  </button>
                  {selected[index]}
                  <button
                    onClick={() => {
                      increaseItem(index);
                    }}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5 mx-[5px]">
        <CustomButton
          customStyle="w-full shadow-[0px_2px15px_0px_rgba(0,0,0,0.15)]"
          text={"PROCEED"}
          // clickfunction={() => navigate("/payment")}
        />
      </div>
    </div>
  );
};

export default ServiceList;
