"use client";

import AnalyticCard from "@/components/AnalyticCard";
import { RowDate, RowNameType2, RowStatus } from "@/components/RowFields";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Investment = () => {
  const [tab, setTab] = React.useState("Main Account wallet");

  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard
          label="Main Account wallet"
          value={0}
          valueIsCurrency
          hasBase={tab === "Main Account wallet"}
          setValue={setTab}
        />
        <AnalyticCard
          label="Loan Wallet"
          value={0}
          valueIsCurrency
          hasBase={tab === "Loan Wallet"}
          setValue={setTab}
        />
        <AnalyticCard
          label="VAS wallet"
          value={0}
          valueIsCurrency
          hasBase={tab === "VAS wallet"}
          setValue={setTab}
        />
        <AnalyticCard
          label="Income Wallet"
          value={0}
          valueIsCurrency
          hasBase={tab === "Income Wallet"}
          setValue={setTab}
        />
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
              Wallet History
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
