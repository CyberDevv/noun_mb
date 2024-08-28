import AnalyticCard from "@/components/AnalyticCard";
import { RowDate, RowNameType2, RowStatus } from "@/components/RowFields";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
        columns={[
          "Name ",
          "Account Number",
          "Investment Type",
          "Status",
          "Action",
        ]}
        rows={[
            {
            name: <RowNameType2 label="Odesola Ibrahim" />,
            number: "123467890",
            type: "Mutual Fund",
            status: <RowStatus label="Active" />,
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
