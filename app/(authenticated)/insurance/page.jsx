import AnalyticCard from "@/components/AnalyticCard";
import { RowDate, RowNameType2, RowStatus } from "@/components/RowFields";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Insurance = () => {
  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Total No. of Policies Holder" value={0} hasBase />
        <AnalyticCard label="Total Active" value={0} />
        <AnalyticCard label="Total Inactive" value={0} />
        <AnalyticCard label="Claims Pending" value={0} />
      </div>

      <Table
        columns={[
          "Policyholder Name ",
          "Policy Number",
          "Policy Type",
          "Status",
          "Action",
        ]}
        rows={[
          {
            name: <RowNameType2 label="Odesola Ibrahim" />,
            number: "INS-123456",
            type: "Life Insurance",
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

export default Insurance;
