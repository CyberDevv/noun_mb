"use client";

import AnalyticCard from "@/components/AnalyticCard";
import { investmentColumns } from "@/components/Columns";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import React from "react";

const Investment = () => {
  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Total No. of Holders" value={0} />
        <AnalyticCard label="Total Active" value={0} />
        <AnalyticCard label="Total Matured" value={0} />
        <AnalyticCard label="Terminated" value={0} />
      </div>

      <Table
        columns={investmentColumns}
        rows={[
          {
            name: "Odesola Ibrahim",
            number: "123467890",
            type: "Mutual Fund",
            status: "Active",
            action: "",
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

export default Investment;
