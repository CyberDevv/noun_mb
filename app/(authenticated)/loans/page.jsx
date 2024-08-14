import AnalyticCard from "@/components/AnalyticCard";
import { RowDate, RowNameType2, RowStatus } from "@/components/RowFields";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import Tabs from "@/components/Tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Account = () => {
  return (
    <main className="">
      <div className="bg-white rounded-[15px] px-5 py-2.5 space-y-[18px]">
        <Tabs
          contents={[
            {
              label: "Loan Application",
              content: (
                <>
                  <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px] border border-[#9FA3A947]">
                    <AnalyticCard
                      label="Total Applications"
                      value={0}
                      hasBase
                    />
                    <AnalyticCard label="Approved Loans" value={0} />
                    <AnalyticCard label="Pending Applications" value={0} />
                    <AnalyticCard label="Declined Applications" value={0} />
                  </div>

                  <Table
                    columns={[
                      "Name",
                      "Account Number",
                      "Repayment",
                      "Loan Amount",
                      "Repayment Amount",
                      "Interest Rate",
                      "Status",
                      "Action",
                    ]}
                    rows={[
                      {
                        name: <RowNameType2 label="Odesola Ibrahim" />,
                        acctNumber: "28377446362",
                        repayment: "03 June, 2024",
                        loanAmount: "₦ 589,473.00",
                        repaymentAmount: "₦ 589,473.00",
                        rate: "100%",
                        status: <RowStatus label="Completed" />,
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
                </>
              ),
            },

            {
              label: "Loan Management",
              content: (
                <>
                  <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px] border border-[#9FA3A947]">
                    <AnalyticCard
                      label="Total Applications"
                      value={0}
                      hasBase
                    />
                    <AnalyticCard label="Approved Loans" value={0} />
                    <AnalyticCard label="Pending Applications" value={0} />
                    <AnalyticCard label="Declined Applications" value={0} />
                  </div>

                  <Table
                    columns={[
                      "Name",
                      "Account Number",
                      "Repayment",
                      "Loan Amount",
                      "Repayment Amount",
                      "Interest Rate",
                      "Status",
                      "Action",
                    ]}
                    rows={[
                      {
                        name: <RowNameType2 label="Odesola Ibrahim" />,
                        acctNumber: "28377446362",
                        repayment: "03 June, 2024",
                        loanAmount: "₦ 589,473.00",
                        repaymentAmount: "₦ 589,473.00",
                        rate: "100%",
                        status: <RowStatus label="Completed" />,
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
                </>
              ),
            },

            {
              label: "Loan Payment",
              content: (
                <>
                  <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px] border border-[#9FA3A947]">
                    <AnalyticCard
                      label="Total Applications"
                      value={0}
                      hasBase
                    />
                    <AnalyticCard label="Approved Loans" value={0} />
                    <AnalyticCard label="Pending Applications" value={0} />
                    <AnalyticCard label="Declined Applications" value={0} />
                  </div>

                  <Table
                    columns={[
                      "Name",
                      "Account Number",
                      "Repayment",
                      "Loan Amount",
                      "Repayment Amount",
                      "Interest Rate",
                      "Status",
                      "Action",
                    ]}
                    rows={[
                      {
                        name: <RowNameType2 label="Odesola Ibrahim" />,
                        acctNumber: "28377446362",
                        repayment: "03 June, 2024",
                        loanAmount: "₦ 589,473.00",
                        repaymentAmount: "₦ 589,473.00",
                        rate: "100%",
                        status: <RowStatus label="Completed" />,
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
                </>
              ),
            },
          ]}
        />
      </div>
    </main>
  );
};

export default Account;
