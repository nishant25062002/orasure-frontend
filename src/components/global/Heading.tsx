import React from "react";

const Heading = ({
  heading,
  highlistText,
  number,
}: {
  heading: string;
  highlistText: string;
  number: number;
}) => {
  const wordsArray = heading.split(" ");
  return (
    <div className="text-[#26292F] text-center font-[600] text-[20px] flex flex-wrap justify-center">
      {wordsArray?.map((word, index) => (
        <span
          key={index}
          style={{
            marginRight: index + 1 !== wordsArray.length ? "7px" : "0",
            display: "inline",
          }}
        >
          {index + 1 !== number ? (
            word
          ) : (
            <span className="text-[#69A806]">{highlistText}</span>
          )}
        </span>
      ))}
      {wordsArray.length + 1 == number && (
        <span className="text-[#69A806] ml-[7px]">{highlistText}</span>
      )}
    </div>
  );
};

export default Heading;
