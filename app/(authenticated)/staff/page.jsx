"use client";

import AnalyticCard from "@/components/AnalyticCard";
import useCheckAuth from "@/components/hooks/useCheckAuth";
import { RowDate, RowNameType2, RowStatus } from "@/components/RowFields";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";


const Staff = () => {
  const { data, isValidating } = useCheckAuth(`/api/staff/getStaffs`);
  
  const rows = data?.data?.map((item) => {
    return {
      name: <RowNameType2 label={item?.fullName} src={item?.image} />,
      id: item?.userId,
      role: item?.roleId,
      status: <RowStatus label={item?.active ? "Active" : "Inactive"} />,
      action: "",
    };
  });
  
  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Total Staff" value={0} hasBase />
        <AnalyticCard label="Total Active" value={0} />
       <AnalyticCard label="Total Inactive" value={0} />
      </div>

      <Table
        columns={[
          "Name ",
          "ID",
          "Role",
          "Status",
          "Action",
        ]}
        isValidating= {isValidating}
        rows={rows || []}
        toolbar={
          <div className="between">
            <h6 className="font-medium text-black font-inter leading-[28px] tracking-[0.2px]">
            List of Staffs
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

export default Staff;
