import { Button } from "@mui/material";
import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import { useNavigate } from "react-router-dom";

const Scanner: React.FC = () => {
  const [delay] = useState(100);
  const navigate = useNavigate();

  const handleScan = (data: string | null) => {
    if (data) {
      // setResult(data);
      console.log("result", data);
    }
  };

  const handleError = (err: Error) => {
    console.error(err);
  };

  const previewStyle = {
    height: 270,
    width: 270,
  };

  return (
    <div className="flex flex-col items-center">
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <div className="flex fixed bottom-0 left-0 w-full gap-[45px] justify-center shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] border-t-[0.5px] border-[#888] py-[12px] px-[30px] bg-[#fff] z-[100]">
        <Button
          onClick={() => navigate("/token-transfer")}
          variant="outlined"
          className="shadow-[0px_2px_15px_0px_rgba(0,0,0,0.15)] w-full !border-[1px] !border-[#000] !rounded-[35px] !text-[#000] text-[16px] font-[500]"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default Scanner;
