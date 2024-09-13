"use client";

import AnalyticCard from "@/components/AnalyticCard";
import { TransColumns } from "@/components/Columns";
import useCheckAuth from "@/components/hooks/useCheckAuth";
import { useDateRange } from "@/components/hooks/useDayHook";
import SelectDate from "@/components/SelectDate";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import React from "react";

const Account = () => {
  const [day, setDay, date] = useDateRange();

  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isValidating } = useCheckAuth(
    `/api/transactions/getTransactions?pageNumber=${pagination?.pageIndex}&pageSize=${pagination?.pageSize}`
  );

  const { data: dataStats } = useCheckAuth(
    `/api/transactions/getTransMetricByDate?dateFrom=${date[1]}&dateTo=${date[0]}`
  );

  const dailyKey = Object?.keys(dataStats || []).find((key) =>
    key.startsWith("DAILY")
  );
  const weeklyKey = Object?.keys(dataStats || []).find((key) =>
    key.startsWith("WEEKLY")
  );
  const monthlyKey = Object?.keys(dataStats || []).find((key) =>
    key.startsWith("MONTHLY")
  );

  const rows = data?.data?.map((item, index) => {
    return {
      id: index,
      transId: item?.recId,
      acctNumber: item?.originatorAccountNumber,
      acctName: item?.originatorAccountName,
      bacctNumber: item?.beneficiaryAccountNumber,
      bacctName: item?.beneficiaryAccountName,
      transactionType: item?.transactionType,
      amount: item?.amount,
      desc:
        item?.referenceType.charAt(0).toUpperCase() +
        item?.referenceType.slice(1).toLowerCase(),
      date: item?.transactionDate,
      ref: item?.reference,
      status: item?.status,
      action: "",
    };
  });

  return (
    <main className="space-y-[18px]">
      <SelectDate hasFilter={[day, setDay]} />
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
        columns={TransColumns}
        rows={rows || []}
        isValidating={isValidating}
        pageCount={data?.totalPages}
        pagination={pagination}
        setPagination={setPagination}
        totalRecords={data?.totalRecords}
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
