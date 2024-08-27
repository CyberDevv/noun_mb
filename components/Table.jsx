import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const TableComp = ({ columns, rows, toolbar, isValidating }) => {
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
              <TableRow className="bg-[#F2F2F2] h-[52px] border-y border-[#E0E0E0]">
                {columns.map((col, idx) => {
                  return (
                    <TableHead
                      className={`${
                        col.toLowerCase() === "status" ? "text-center" : ""
                      }`}
                      key={idx}
                    >
                      {col}
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>
            {rows.length === 0 ? (
              <div className="h-20">
                <p className="text-center w-full absolute top-24 text-gray-500">
                  No data to display
                </p>
              </div>
            ) : (
              <TableBody>
                {rows.map((rows, idx) => {
                  return (
                    <TableRow
                      className="h-[55px] border-b border-[#EBF2FA] "
                      key={idx}
                    >
                      {Object.keys(rows).map((key, index) => (
                        <TableCell
                          className={`text-33 font-inter leading-[16px] text-sm tracking-[0.2px]`}
                          key={index}
                        >
                          {rows[key]}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        )}
      </div>
    </div>
  );
};

export default TableComp;
