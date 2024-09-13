"use client";

import AnalyticCard from "@/components/AnalyticCard";
import { staffsColumns } from "@/components/Columns";
import useCheckAuth from "@/components/hooks/useCheckAuth";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";
import React from "react";

const Staff = () => {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isValidating } = useCheckAuth(
    `/api/staff/getStaffs?pageNumber=${pagination?.pageIndex}&pageSize=${pagination?.pageSize}`
  );

  const rows = data?.data?.map((item) => {
    return {
      name: item?.fullName,
      src:item?.image,
      userId: item?.userId,
      role: item?.roleId,
      status: item?.active,
      action: "",
    };
  });

  return (
    <main className="space-y-[18px]">
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Total Staff" value={0} />
        <AnalyticCard label="Total Active" value={0} />
        <AnalyticCard label="Total Inactive" value={0} />
      </div>

      <Table
      columns={staffsColumns}
        isValidating={isValidating}
        rows={rows || []}
        pageCount={data?.totalPages}
        pagination={pagination}
        setPagination={setPagination}
        totalRecords={data?.totalRecords}
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
