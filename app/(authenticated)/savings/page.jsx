import AnalyticCard from "@/components/AnalyticCard";
import {
  RowAmount,
  RowDate,
  RowNameType2,
  RowStatus,
  RowStatusType2,
} from "@/components/RowFields";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Savings = () => {
  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Total No. of Accounts" value={0} hasBase />
        <AnalyticCard label="Total Savings Balance" value={0} />
        <AnalyticCard label="Average Account Balance" value={0} />
        <AnalyticCard label="Active Accounts" value={0} />
        <AnalyticCard label="Inactive Accounts" value={0} />
      </div>

      <Table
        columns={[
          "Name",
          "Account Number",
          "Package",
          "Deposit Amount",
          "Credited Amount",
          "Interest Rate/Deposit Period",
          "Status",
        ]}
        rows={[
          {
            name: <RowNameType2 label="Odesola Ibrahim" />,
            acctNumber: "28377446362",
            package: "Fixed Deposit",
            depAmount: (
              <RowAmount
                label="-₦ 589,473.00"
                date="03 June, 2024 | 09:43 AM"
              />
            ),
            crAmount: (
              <RowAmount
                label="-₦ 589,473.00"
                date="03 June, 2024 | 09:43 AM"
              />
            ),
            rate: <RowAmount label="2.5%" date="1 Year" />,
            status: <RowStatusType2 label="Completed" />,
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

export default Savings;
