import AnalyticCard from "@/components/AnalyticCard";
import { RowDate, RowStatus } from "@/components/RowFields";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";


const Account = () => {
  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Daily Transactions" value={0} hasBase />
        <AnalyticCard label="Weekly Transactions" value={0} />
        <AnalyticCard label="Monthly Transactions" value={0} />
      </div>

      <Table
        columns={[
          "Transaction ID ",
          "Account Number",
          "Amount",
          "Description",
          "Date/Time",
          "Reference No.",
          "Status",
          "Action",
        ]}
        rows={[
          {
            transId: "20240613001",
            acctNumber: "28377446362",
            amount: "-₦ 589,473.00",
            desc: 'POS Purchase',
            date: <RowDate date= "03 June, 2024" time= "09:43 AM" />,
            ref: "NT84747737373727",
            status: <RowStatus label="Completed" />,
            invoices: "",
          },
        ]}
        toolbar={
          <div className="between">
            <h6 className="font-medium text-black font-inter leading-[28px] tracking-[0.2px]">
              Transactions History
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

export default Account;
