import AnalyticCard from "@/components/AnalyticCard";
import { RowAmount, RowName, RowStatus } from "@/components/RowFields";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import ViewAllButton from "@/components/table/ViewAllButton";

export default function Page() {
  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Total Inflow" value={0} />
        <AnalyticCard label="Total Outflow" value={0} />
        <AnalyticCard label="Total Accounts" value={0} />
        <AnalyticCard label="Total Card Holders" value={0} />
        <AnalyticCard label="Disbursed Loans" value={0} />
      </div>

      <Table
        columns={["Name", "Account Number", "Amount", "Status", "Invoice"]}
        rows={[
          {
            name: <RowName label="Odesola Ibrahim" naration={"Debited"} />,
            acctNumber: "28377446362",
            amount: (
              <RowAmount
                label="-₦ 589,473.00"
                date="03 June, 2024 | 09:43 AM"
              />
            ),
            status: <RowStatus label="Completed" />,
            invoices: "",
          },
          {
            name: <RowName label="Odesola Ibrahim" naration={"Debited"} />,
            acctNumber: "28377446362",
            amount: (
              <RowAmount
                label="-₦ 589,473.00"
                date="03 June, 2024 | 09:43 AM"
              />
            ),
            status: <RowStatus label="Completed" />,
            invoices: "",
          },
          {
            name: <RowName label="Odesola Ibrahim" naration={"Debited"} />,
            acctNumber: "28377446362",
            amount: (
              <RowAmount
                label="-₦ 589,473.00"
                date="03 June, 2024 | 09:43 AM"
              />
            ),
            status: <RowStatus label="Completed" />,
            invoices: "",
          },
          {
            name: <RowName label="Odesola Ibrahim" naration={"Debited"} />,
            acctNumber: "28377446362",
            amount: (
              <RowAmount
                label="-₦ 589,473.00"
                date="03 June, 2024 | 09:43 AM"
              />
            ),
            status: <RowStatus label="Completed" />,
            invoices: "",
          },
          {
            name: <RowName label="Odesola Ibrahim" naration={"Debited"} />,
            acctNumber: "28377446362",
            amount: (
              <RowAmount
                label="-₦ 589,473.00"
                date="03 June, 2024 | 09:43 AM"
              />
            ),
            status: <RowStatus label="Completed" />,
            invoices: "",
          },
          {
            name: <RowName label="Odesola Ibrahim" naration={"Debited"} />,
            acctNumber: "28377446362",
            amount: (
              <RowAmount
                label="-₦ 589,473.00"
                date="03 June, 2024 | 09:43 AM"
              />
            ),
            status: <RowStatus label="Completed" />,
            invoices: "",
          },
        ]}
        toolbar={
          <div className="between">
            <h6 className="font-medium text-black font-inter leading-[28px] tracking-[0.2px]">
              Recent Transactions
            </h6>

            <div className="space-x-10 end">
              <SearchInput />
              <ViewAllButton />
            </div>
          </div>
        }
      />
    </main>
  );
}
