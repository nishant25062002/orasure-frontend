import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentPortal = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[70vh] w-full flex flex-col items-center justify-center">
        Payment Success
      </div>
      <div className="flex fixed bottom-0 left-0 w-full gap-[45px] justify-center shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] border-t-[0.5px] border-[#888] py-[12px] px-[30px] bg-[#fff] z-[100]">
        <Button
          onClick={() => navigate("/treatment")}
          variant="outlined"
          className="shadow-[0px_2px_15px_0px_rgba(0,0,0,0.15)] w-full !border-[1px] !border-[#000] !rounded-[35px] !text-[#000] text-[16px] font-[500]"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default PaymentPortal;
