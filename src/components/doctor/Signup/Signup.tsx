import React, { useState } from "react";
import Header from "../../global/Header";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const Signup = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="flex justify-center">
      <div className="max-w-[420px] w-full flex flex-col items-center">
        <Header />
        {page == 1 && <StepOne setPage={setPage} />}
        {page == 2 && <StepTwo setPage={setPage} />}
        {page == 3 && <StepThree setPage={setPage} />}
      </div>
    </div>
  );
};

export default Signup;
