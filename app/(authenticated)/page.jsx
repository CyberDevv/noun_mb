"use client";

import AnalyticCard from "@/components/AnalyticCard";
import { recentTransColumns } from "@/components/Columns";
import useCheckAuth from "@/components/hooks/useCheckAuth";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import React from "react";

export default function Page() {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data: dataStats } = useCheckAuth(`/api/transactions/getTransMetric`);

  const { data: dataStatsAccount } = useCheckAuth(`/api/accounts/getStats`);

  const { data, isValidating } = useCheckAuth(
    `/api/transactions/getTransactions?pageNumber=${pagination?.pageIndex}&pageSize=${pagination?.pageSize}`
  );

  const rows = data?.data?.map((item, index) => {
    return {
      id: index,
      name: item?.beneficiaryAccountName,
      naration: item?.transactionType,
      acctNo: item?.beneficiaryAccountNumber,
      transactionType: item?.transactionType,
      transactionDate: item?.transactionDate,
      amount: item?.amount,
      status: item?.status,
      Invoice: "",
    };
  });

  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 grid grid-cols-5 divide-E0 rounded-[15px]">
        <AnalyticCard
          label="Total Inflow"
          value={dataStats?.INBOUND?.[0]?.categoryValue || 0}
          amount={dataStats?.INBOUND?.[1]?.categoryValue || 0}
        />
        <AnalyticCard
          label="Total Outflow"
          value={dataStats?.OUTBOUND?.[0]?.categoryValue || 0}
          amount={dataStats?.OUTBOUND?.[1]?.categoryValue || 0}
        />
        <AnalyticCard
          label="Total Accounts"
          value={dataStatsAccount?.["Total User"] || 0}
        />
        <AnalyticCard label="Total Card Holders" value={0} />
        <AnalyticCard label="Disbursed Loans" value={0} />
      </div>

      <Table
        columns={recentTransColumns}
        rows={rows || []}
        isValidating={isValidating}
        pageCount={data?.totalPages}
        pagination={pagination}
        setPagination={setPagination}
        totalRecords={data?.totalRecords}
        toolbar={
          <div className="between">
            <h6 className="font-medium text-black font-inter leading-[28px] tracking-[0.2px]">
              Recent Transactions
            </h6>

            <div className="space-x-10 end">
              <SearchInput />
              {/* <ViewAllButton /> */}
            </div>
          </div>
        }
      />
    </main>
  );
}
