import Image from "next/image";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function DataTablePagination({ table }) {
  let currentPage = table.getState().pagination.pageIndex + 1;
  let totalPages = table?.options?.pageCount;

  const pages = [];
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, currentPage + 1);

  // Add previous page if not on first page
  if (currentPage > 1) {
    pages.push(currentPage - 1);
  }

  // Add current page
  pages.push(currentPage);

  // Add next page if not on last page
  if (currentPage < totalPages) {
    pages.push(currentPage + 1);
  }

  // Add truncation if there are more pages before or after
  if (startPage > 1) {
    pages.unshift("...");
  }
  if (endPage < totalPages) {
    pages.push("...");
  }

  // Add first and last page links if not already shown
  if (startPage > 1) {
    pages.unshift(1);
  }
  if (endPage < totalPages) {
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center justify-between px-[22px] py-4 mt-[18px]">
      <div className="flex-1 space-x-2 text-sm text-[#595959] start">
        <span>Showing</span>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="h-6 w-[56px] p-2">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>{" "}
        <span>of</span> <span>{table?.options?.totalRecords}</span>
      </div>

      <div className="flex items-center">
        <Button
          variant="ghost"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={`h-7 w-7 p-0 rounded-none`}
        >
          <Image
            src="/svg/lt.svg"
            width={6}
            height={10}
            alt="previous page"
            className="object-contain"
          />
        </Button>
        {pages.map((page, idx) => {
          return (
            <Button
              key={idx}
              variant="ghost"
              onClick={() => page != "..." && table.setPageIndex(page - 1)}
              disabled={page === currentPage}
              className={`${
                page === currentPage
                  ? "bg-[#008000] hover:bg-[#008000] disabled:opacity-100 text-[#FEFEFE] hover:text-[#FEFEFE]"
                  : ""
              }  h-7 w-7 rounded-none`}
            >
              {page}
            </Button>
          );
        })}
        <Button
          variant="ghost"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={`h-7 w-7 p-0 rounded-none`}
        >
          <Image
            src="/svg/rt.svg"
            width={6}
            height={10}
            alt="next page"
            className="object-contain"
          />
        </Button>
      </div>
    </div>
  );
}
