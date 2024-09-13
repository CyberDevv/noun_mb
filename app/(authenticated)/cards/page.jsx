"use client";

import AnalyticCard from "@/components/AnalyticCard";
import { cardsColumns } from "@/components/Columns";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";

const Cards = () => {
  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Total No. of Cards" value={0} />
        <AnalyticCard label="Total Active Cards" value={0} />
        <AnalyticCard label="Total Inactive Cards" value={0} />
        <AnalyticCard label="Blocked Cards" value={0} />
      </div>
      <Table
        columns={cardsColumns}
        rows={[
          {
            id: 1,
            name: "Odesola Ibrahim",
            naration: "abc@example.com",
            acctNumber: "28377446362",
            cardNo: "293xxxxxxxx9015",
            cardType: "Credit",
            dateIssued: "",
            expiryDate: "",
            status: "Active",
            action: "",
          },
        ]}
        toolbar={
          <div className="between">
            <h6 className="font-medium text-black font-inter leading-[28px] tracking-[0.2px]">
              List of Card Holders
            </h6>

            <div className="space-x-10 end">
              <SearchInput />
            </div>
          </div>
        }
      />
    </main>
  );
};

export default Cards;
