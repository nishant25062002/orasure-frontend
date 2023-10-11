import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({
  customStyle = "",
  text,
  cancel = false,
  clickfunction = () => {},
}: {
  customStyle?: string;
  text: string;
  cancel?: boolean;
  clickfunction?: any;
}) => {
  var customData = {
    customBg: "#9EC55B",
    customColor: "#fff",
    customBorder: "1px solid #9EC55B",
    boxShadow: "0px 2px 15px 0pxrgba(0, 0, 0, 0.15)",
  };
  if (cancel) {
    customData.customBg = "#fff";
    customData.customColor = "#000";
    customData.customBorder = "1px solid #000";
    customData.boxShadow = "none";
  }
  return (
    <div className={customStyle}>
      <Button
        onClick={clickfunction}
        variant={"contained"}
        style={{
          backgroundColor: customData.customBg,
          padding: "16px",
          gap: "10px",
          height: "43px",
          color: customData.customColor,
          fontWeight: "400",
          fontSize: "16px",
          width: "100%",
          borderRadius: "35px",
          boxShadow: customData.boxShadow,
          border: customData.customBorder,
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
