import React from "react";

const ImageCard = ({ img }: { img: string }) => {
  return <img src={img} className="rounded-[16px] w-full " />;
};

export default ImageCard;
