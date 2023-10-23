import React from "react";
import FAQ from "./FAQ";
import Heading from "../Heading";

interface FaqsProps {
  Faqs?: Array<FaqProps>;
}

interface FaqProps {
  ques: string;
  ans: string;
}

const FAQs = ({ Faqs }: FaqsProps) => {
  return (
    <div className="">
      <Heading
        heading={"Frequently Asked"}
        highlistText={"Questions?"}
        number={3}
      />
      <div className="rounded-[24px] border-[1px] border-[#69A806] bg-[#fff] p-[6px_30px] mt-[32px]">
        {Faqs?.map((faq: FaqProps, index: number) => (
          <FAQ key={index} ques={faq.ques} ans={faq.ans} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
