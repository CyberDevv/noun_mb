"use client";

import AnalyticCard from "@/components/AnalyticCard";
import { savingsColumns } from "@/components/Columns";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import React from "react";

const Savings = () => {
  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Total No. of Accounts" value={0} />
        <AnalyticCard label="Total Savings Balance" value={0} />
        <AnalyticCard label="Average Account Balance" value={0} />
        <AnalyticCard label="Active Accounts" value={0} />
        <AnalyticCard label="Inactive Accounts" value={0} />
      </div>

      <Table
        columns={savingsColumns}
        rows={[
          {
            name: "Odesola Ibrahim",
            acctNumber: "28377446362",
            package: "Fixed Deposit",
            depAmount: "",
            crAmount: "",
            rate: "",
            status: "Completed",
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
