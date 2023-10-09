import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({
  customStyle,
  text,
  cancel = false,
}: {
  customStyle: string;
  text: string;
  cancel: boolean;
}) => {
  return (
    <div className={customStyle}>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#9EC55B",
          padding: "16px",
          gap: "10px",
          height: "43px",
          color: "#fff",
          fontWeight: "400",
          fontSize: "16px",
          width: "100%",
          borderRadius: "35px",
          boxShadow: " 0px 2px 15px 0pxrgba(0, 0, 0, 0.15)",
        }}
        className="bg-black"
      >
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
