import AnalyticCard from "@/components/AnalyticCard";
import {
  RowAction,
  RowNameType2,
  RowStatusType2,
  RowVerification,
} from "@/components/RowFields";
import Table from "@/components/Table";

const Account = () => {
  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Total Accounts" value={0} hasBase />
        <AnalyticCard label="Approved Applications" value={0} />
        <AnalyticCard label="Rejected Applications" value={0} />
        <AnalyticCard label="Pending Applications" value={0} />
      </div>

      <Table
        columns={[
          "Account Holder Name ",
          "Account Type",
          "Tier",
          "Verification",
          "Phone Number",
          "Status",
          "Action",
        ]}
        rows={[
          {
            name: <RowNameType2 label="Odesola Ibrahim" />,
            accountType: "Individual",
            tier: "Tier 1",
            amount: <RowVerification label="Approved" />,
            phoneNumber: "08012345678",
            status: <RowStatusType2 label="Active" />,
            invoices: <RowAction />,
          },
        ]}
      />
    </main>
  );
};

export default Account;
