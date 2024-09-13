"use client";

import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import React from "react";
import DataTablePagination from "./Pagination";

const TableComp = ({
  columns,
  rows,
  toolbar,
  isValidating,
  pageCount,
  pagination,
  setPagination,
  totalRecords
}) => {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  React.useEffect(() => {
    pagination && setPagination(pagination);
  }, [pagination, setPagination]);

  const table = useReactTable({
    data: rows,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    pageCount,
    manualPagination: true,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    totalRecords: totalRecords
  });

  return (
    <div className="bg-white rounded-[15px] p-5">
      {/* ToolBar */}
      <div className="py-3 px-2.5">{toolbar}</div>

      <div className="rounded-[9px] w-full max-w-[calc(100vw-337px)]">
        {rows.length === 0 && isValidating ? (
          <Skeleton className="w-full h-40 bg-green-50" />
        ) : (
          <Table className="relative w-full min-w-max">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  className="bg-[#F2F2F2] h-[52px] border-y border-[#E0E0E0]"
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            {rows?.length === 0 ? (
              <div className="h-20">
                <p className="absolute w-full text-center text-gray-500 top-24">
                  No data to display
                </p>
              </div>
            ) : (
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      className="h-[55px] border-b border-[#EBF2FA] "
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          className={`text-33 font-inter leading-[16px] text-sm tracking-[0.2px] capitalize`}
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            )}
          </Table>
        )}
      </div>
      {pagination && <DataTablePagination table={table} />}
    </div>
  );
};

export default TableComp;
