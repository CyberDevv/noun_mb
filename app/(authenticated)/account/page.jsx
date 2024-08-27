"use client";

import AnalyticCard from "@/components/AnalyticCard";
import useCheckAuth from "@/components/hooks/useCheckAuth";
import {
  RowAction,
  RowNameType2,
  RowStatusType2,
  RowVerification,
} from "@/components/RowFields";
import Table from "@/components/Table";

const Account = () => {
  const { data, isValidating } = useCheckAuth(`/api/accounts/getAccounts`);
  const { data: dataStats } = useCheckAuth(`/api/accounts/getStats`);

  const rows = data?.data.map((item) => {
    return {
      name: <RowNameType2 label={item?.fullname} src={item?.userImage} />,
      accountNumber: item?.accountNumber,
      tier: item?.accountType,
      verification: (
        <RowVerification
          label={item?.verification === "true" ? "Approved" : "Unapproved"}
        />
      ),
      phoneNumber: item?.telephone,
      status: <RowStatusType2 label={item?.userStatus} />,
      action: <RowAction />,
    };
  });

  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Total Accounts" value={dataStats?.["Total User"] || 0} hasBase />
        <AnalyticCard label="Verified Accounts" value={dataStats?.["Verified Accounts"] || 0} />
        <AnalyticCard label="Unverified Accounts" value={dataStats?.["Unverified Accounts"] || 0} />
        <AnalyticCard label="Disabled Users" value={dataStats?.["Disabled Users"] || 0} />
      </div>

      <Table
        columns={[
          "Account Holder Name ",
          "Account Number",
          "Tier",
          "Verification",
          "Phone Number",
          "Status",
          "Action",
        ]}
        rows={rows || []}
        isValidating={isValidating}
      />
    </main>
  );
};

export default Account;