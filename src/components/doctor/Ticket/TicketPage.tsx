import React from "react";
import TicketCard from "./Cards/TicketCard";
import Header from "../../global/Header";
import SearchBar from "../../global/SearchBar";

const TicketPage = () => {
  return (
    <div className="bg-[#edf2f5] bg-gradient-to-b from-[#EAF3F8] via-[#EAF3F8] to-[rgba(234,243,248,0)] pb-[10px]">
      <Header />
      <div className="mx-[16px]">
        <div className="text-[#000] text-[20px] font-[700] py-[20px]">
          Tickets
        </div>

        <div className="pb-[4px]">
          <SearchBar filter />
        </div>
        <TicketCard status="Progress" />
        <TicketCard status="Settled" />
        <TicketCard />
      </div>
    </div>
  );
};

export default TicketPage;
