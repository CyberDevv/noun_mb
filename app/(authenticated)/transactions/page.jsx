"use client";

import AnalyticCard from "@/components/AnalyticCard";
import useCheckAuth from "@/components/hooks/useCheckAuth";
import { RowDate, RowStatus } from "@/components/RowFields";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import { Button } from "@/components/ui/button";
import moment from "moment";
import Image from "next/image";
import React from "react";

const Account = () => {
  const { data, isValidating } = useCheckAuth(
    `/api/transactions/getTransactions`
  );

  const { data: dataStats } = useCheckAuth(`/api/transactions/getTransMetric`);

  const dailyKey = Object?.keys(dataStats || []).find((key) =>
    key.startsWith("DAILY")
  );
  const weeklyKey = Object?.keys(dataStats || []).find((key) =>
    key.startsWith("WEEKLY")
  );
  const monthlyKey = Object?.keys(dataStats || []).find((key) =>
    key.startsWith("MONTHLY")
  );

  const rows = data?.data?.map((item) => {
    return {
      transId: item?.recId,
      acctNumber: item?.originatorAccountNumber,
      acctName: item?.originatorAccountName,
      bacctNumber: item?.beneficiaryAccountNumber,
      bacctName: item?.beneficiaryAccountName,
      amount: `${
        item?.transactionType?.toLowerCase() === "credit" ? "+" : "-"
      }₦ ${item?.amount}`,
      desc:
        item?.referenceType.charAt(0).toUpperCase() +
        item?.referenceType.slice(1).toLowerCase(),
      date: (
        <RowDate
          date={moment(item?.transactionDate).format("DD MMMM, YYYY")}
          time={moment(item?.transactionDate).format("hh:mm A")}
        />
      ),
      ref: item?.reference,
      status: <RowStatus label={item?.status} />,
      action: "",
    };
  });

  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard
          label="Daily Transactions"
          value={dataStats?.[dailyKey]?.[0]?.categoryValue || 0}
          amount={dataStats?.[dailyKey]?.[1]?.categoryValue || 0}
        />
        <AnalyticCard
          label="Weekly Transactions"
          value={dataStats?.[weeklyKey]?.[0]?.categoryValue || 0}
          amount={dataStats?.[weeklyKey]?.[1]?.categoryValue || 0}
        />
        <AnalyticCard
          label="Monthly Transactions"
          value={dataStats?.[monthlyKey]?.[0]?.categoryValue || 0}
          amount={dataStats?.[monthlyKey]?.[1]?.categoryValue || 0}
        />
      </div>

      <Table
        columns={[
          "Transaction ID ",
          "Account No",
          "Account Name",
          "Beneficiary Account No",
          "Beneficiary Account Name",
          "Amount",
          "Description",
          "Date/Time",
          "Reference No.",
          "Status",
          "Action",
        ]}
        rows={rows || []}
        isValidating={isValidating}
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
