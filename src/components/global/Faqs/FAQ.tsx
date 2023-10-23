import React, { useState } from "react";
import "./FAQs.css";
import Divider from "../Divider";

const FAQ = ({
  ques,
  ans,
  index,
}: {
  ques: string;
  ans: string;
  index: number;
}) => {
  const [isAnswerShown, setIsAnswerShown] = useState(index == 0 ? true : false);

  const toggleAnswer = () => {
    setIsAnswerShown(!isAnswerShown);
  };

  return (
    <div className="my-[24px]">
      <div className="flex items-center" onClick={toggleAnswer}>
        <div
          dangerouslySetInnerHTML={{ __html: ques }}
          className="text-[#ADADAD] text-[16px] font-[500] mb-[12px]"
        />
      </div>
      <div className={`${isAnswerShown ? "show_answer" : "answer"}`}>
        <div
          dangerouslySetInnerHTML={{ __html: ans }}
          className="text-[#555] text-[14px] font-[400] mb-[8px]"
        />
      </div>
      <Divider customStyle="!h-[2px] bg-[#ADADAD] rounded-[50px]" />
    </div>
  );
};

export default FAQ;
