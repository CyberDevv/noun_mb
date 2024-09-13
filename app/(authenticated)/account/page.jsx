"use client";

import AnalyticCard from "@/components/AnalyticCard";
import { accountsColumns } from "@/components/Columns";
import useCheckAuth from "@/components/hooks/useCheckAuth";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import React from "react";

const Account = () => {
  const [tab, setTab] = React.useState("Total Accounts");

  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isValidating } = useCheckAuth(
    `/api/accounts/getAccounts?pageNumber=${pagination?.pageIndex}&pageSize=${pagination?.pageSize}`
  );
  const { data: dataStats } = useCheckAuth(`/api/accounts/getStats`);

  const rows = data?.data?.map((item, index) => {
    return {
      id: index,
      name: item?.fullname?.toLowerCase(),
      src: item?.userImage,
      acctNo: item?.accountNumber,
      tier: item?.accountType?.toLowerCase(),
      verification: item?.verification,
      phoneNumber: item?.telephone,
      status: item?.userStatus,
      action: "",
    };
  });

  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard
          label="Total Accounts"
          value={dataStats?.["Total User"] || 0}
          hasBase={tab === "Total Accounts"}
          setValue={setTab}
        />
        <AnalyticCard
          label="Verified Accounts"
          value={dataStats?.["Verified Accounts"] || 0}
          hasBase={tab === "Verified Accounts"}
          setValue={setTab}
        />
        <AnalyticCard
          label="Unverified Accounts"
          value={dataStats?.["Unverified Accounts"] || 0}
          hasBase={tab === "Unverified Accounts"}
          setValue={setTab}
        />
        <AnalyticCard
          label="Disabled Users"
          value={dataStats?.["Disabled Users"] || 0}
          hasBase={tab === "Disabled Users"}
          setValue={setTab}
        />
      </div>

      <Table
        columns={accountsColumns}
        rows={rows || []}
        isValidating={isValidating}
        pageCount={data?.totalPages}
        pagination={pagination}
        setPagination={setPagination}
        totalRecords={data?.totalRecords}
        toolbar={
          <div className="between">
            <h6 className="font-medium text-black font-inter leading-[28px] tracking-[0.2px]">
              {`List of ${tab === "Total Accounts" ? "Accounts" : tab}`}
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
