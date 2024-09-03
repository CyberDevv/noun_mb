"use client";

import AnalyticCard from "@/components/AnalyticCard";
import useCheckAuth from "@/components/hooks/useCheckAuth";
import { RowAmount, RowName, RowStatus } from "@/components/RowFields";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import ViewAllButton from "@/components/table/ViewAllButton";
import moment from "moment";

export default function Page() {
  const { data: dataStats } = useCheckAuth(`/api/transactions/getTransMetric`);

  const { data: dataStatsAccount } = useCheckAuth(`/api/accounts/getStats`);

  const { data, isValidating } = useCheckAuth(
    `/api/transactions/getTransactions`
  );

  const rows = data?.data?.map((item) => {
    return {
      name: (
        <RowName
          label={item?.beneficiaryAccountName}
          naration={item?.transactionType?.toLowerCase()}
        />
      ),
      acctNumber: item?.beneficiaryAccountNumber,
      amount: (
        <RowAmount
          label={`${
            item?.transactionType?.toLowerCase() === "credit" ? "+" : "-"
          }₦ ${item?.amount}`}
          date={`${moment(item?.transactionDate).format(
            "DD MMMM, YYYY"
          )} | ${moment(item?.transactionDate).format("hh:mm A")}`}
        />
      ),
      status: <RowStatus label={item?.status} />,
      action: "",
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
        columns={["Name", "Account Number", "Amount", "Status", "Invoice"]}
        rows={rows || []}
        isValidating={isValidating}
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
