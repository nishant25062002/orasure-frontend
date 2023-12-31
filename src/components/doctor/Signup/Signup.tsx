import React, { useState } from "react";
import Header from "../../global/Header";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

const Signup = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="flex justify-center">
      <div className="max-w-[420px] w-full flex flex-col items-center">
        <Header doctor />
        {page == 1 && <StepOne setPage={setPage} />}
        {page == 2 && <StepTwo setPage={setPage} />}
        {page == 3 && <StepThree setPage={setPage} />}
        {page == 4 && <StepFour setPage={setPage} />}
        {page == 5 && <StepFive setPage={setPage} />}
        {page == 6 && <StepSix setPage={setPage} />}
      </div>
    </div>
  );
};

export default Signup;
