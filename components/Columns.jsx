import moment from "moment";
import {
  RowAmount,
  RowDate,
  RowName,
  RowNameType2,
  RowStatus,
  RowStatusType2,
  RowVerification,
} from "./RowFields";

export const recentTransColumns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <RowName
        label={row?.original?.name}
        naration={row?.original?.naration?.toLowerCase()}
      />
    ),
  },
  {
    accessorKey: "acctNo",
    header: "Account Number",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <RowAmount
        label={`${
          row?.original?.transactionType?.toLowerCase() === "credit" ? "+" : "-"
        }₦ ${row?.original?.amount}`}
        date={`${moment(row?.original?.transactionDate).format(
          "DD MMMM, YYYY"
        )} | ${moment(row?.original?.transactionDate).format("hh:mm A")}`}
      />
    ),
  },
  {
    accessorKey: "status",
    header: () => <p className="text-center">Status</p>,
    cell: ({ row }) => <RowStatus label={row?.original?.status} />,
  },
  {
    id: "invoice",
    header: "Invoice",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      // return (
      //   <DropdownMenu>
      //     <DropdownMenuTrigger asChild>
      //       <Button variant="ghost" className="w-8 h-8 p-0">
      //         <span className="sr-only">Open menu</span>
      //         <MoreHorizontal className="w-4 h-4" />
      //       </Button>
      //     </DropdownMenuTrigger>
      //     <DropdownMenuContent align="end">
      //       <DropdownMenuLabel>Actions</DropdownMenuLabel>
      //       <DropdownMenuItem
      //         onClick={() => navigator.clipboard.writeText(payment.id)}
      //       >
      //         Copy payment ID
      //       </DropdownMenuItem>
      //       <DropdownMenuSeparator />
      //       <DropdownMenuItem>View customer</DropdownMenuItem>
      //       <DropdownMenuItem>View payment details</DropdownMenuItem>
      //     </DropdownMenuContent>
      //   </DropdownMenu>
      // )
    },
  },
];

export const accountsColumns = [
  {
    accessorKey: "name",
    header: "Account Holder Name",
    cell: ({ row }) => (
      <RowNameType2 label={row?.original?.name} src={row?.original?.src} />
    ),
  },
  {
    accessorKey: "acctNo",
    header: "Account Number",
  },
  {
    accessorKey: "tier",
    header: "Tier",
  },
  {
    accessorKey: "verification",
    header: "Verification",
    cell: ({ row }) => (
      <RowVerification
        label={
          row?.original?.verification === "true" ? "Approved" : "Unapproved"
        }
      />
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "status",
    header: () => <p className="text-center">Status</p>,
    cell: ({ row }) => <RowStatusType2 label={row?.original?.status} />,
  },
  {
    id: "action",
    header: "Action",
    enableHiding: false,
  },
];

export const TransColumns = [
  {
    accessorKey: "transId",
    header: "Transaction ID ",
  },
  {
    accessorKey: "acctNumber",
    header: "Account No",
  },
  {
    accessorKey: "acctName",
    header: "Account Name",
  },
  {
    accessorKey: "bacctNumber",
    header: "Beneficiary Account No",
  },
  {
    accessorKey: "bacctName",
    header: "Beneficiary Account Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <span>
        {row?.original?.transactionType?.toLowerCase() === "credit" ? "+" : "-"}
        ₦{row?.original?.amount}
      </span>
    ),
  },
  {
    accessorKey: "desc",
    header: "Description",
  },
  {
    accessorKey: "date",
    header: "Date/Time",
    cell: ({ row }) => (
      <RowDate
        date={moment(row?.original?.date).format("DD MMMM, YYYY")}
        time={moment(row?.original?.date).format("hh:mm A")}
      />
    ),
  },
  {
    accessorKey: "ref",
    header: "Reference No.",
  },
  {
    accessorKey: "status",
    header: () => <p className="text-center">Status</p>,
    cell: ({ row }) => <RowStatus label={row?.original?.status} />,
  },
  {
    id: "action",
    header: "Action",
    enableHiding: false,
  },
];

export const cardsColumns = [
  {
    accessorKey: "name",
    header: "Name ",
    cell: ({ row }) => (
      <RowName
        label={row?.original?.name}
        naration={row?.original?.naration?.toLowerCase()}
      />
    ),
  },
  {
    accessorKey: "acctNumber",
    header: "Account Number",
  },
  {
    accessorKey: "cardNo",
    header: "Card No.",
  },
  {
    accessorKey: "cardType",
    header: "Card Type",
  },
  {
    accessorKey: "dateIssued",
    header: "Date Issued",
    cell: ({ row }) => <RowDate date="03 June, 2024" time="09:43 AM" />,
  },
  {
    accessorKey: "expiryDate",
    header: "Expiry Date",
    cell: ({ row }) => <RowDate date="03 June, 2024" time="09:43 AM" />,
  },
  {
    accessorKey: "status",
    header: () => <p className="text-center">Status</p>,
    cell: ({ row }) => <RowStatusType2 label={row?.original?.status} />,
  },
  {
    id: "action",
    header: "Action",
    enableHiding: false,
  },
];

export const insuranceColumns = [
  {
    accessorKey: "name",
    header: "Policyholder Name ",
    cell: ({ row }) => <RowNameType2 label={row?.original?.name} />,
  },
  {
    accessorKey: "number",
    header: "Policy Number",
  },
  {
    accessorKey: "type",
    header: "Policy Type",
  },
  {
    accessorKey: "status",
    header: () => <p className="text-center">Status</p>,
    cell: ({ row }) => <RowStatus label={row?.original?.status} />,
  },
  {
    id: "action",
    header: "Action",
    enableHiding: false,
  },
];

export const investmentColumns = [
  {
    accessorKey: "name",
    header: "Name ",
    cell: ({ row }) => <RowNameType2 label={row?.original?.name} />,
  },
  {
    accessorKey: "number",
    header: "Account Number",
  },
  {
    accessorKey: "type",
    header: "Investment Type",
  },
  {
    accessorKey: "status",
    header: () => <p className="text-center">Status</p>,
    cell: ({ row }) => <RowStatus label={row?.original?.status} />,
  },
  {
    id: "action",
    header: "Action",
    enableHiding: false,
  },
];

export const loansColumns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <RowNameType2 label={row?.original?.name} />,
  },
  {
    accessorKey: "acctNumber",
    header: "Account Number",
  },
  {
    accessorKey: "repayment",
    header: "Repayment",
  },
  {
    accessorKey: "loanAmount",
    header: "Loan Amount",
  },
  {
    accessorKey: "repaymentAmount",
    header: "Repayment Amount",
  },
  {
    accessorKey: "rate",
    header: "Interest Rate",
  },
  {
    accessorKey: "status",
    header: () => <p className="text-center">Status</p>,
    cell: ({ row }) => <RowStatus label={row?.original?.status} />,
  },
  {
    id: "action",
    header: "Action",
    enableHiding: false,
  },
];

export const savingsColumns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <RowNameType2 label={row?.original?.name} />,
  },
  {
    accessorKey: "acctNumber",
    header: "Account Number",
  },
  {
    accessorKey: "package",
    header: "Package",
  },
  {
    accessorKey: "depAmount",
    header: "Deposit Amount",
    cell: ({ row }) => (
      <RowAmount label="-₦ 589,473.00" date="03 June, 2024 | 09:43 AM" />
    ),
  },
  {
    accessorKey: "crAmount",
    header: "Credited Amount",
    cell: ({ row }) => (
      <RowAmount label="-₦ 589,473.00" date="03 June, 2024 | 09:43 AM" />
    ),
  },
  {
    accessorKey: "rate",
    header: "Interest Rate/Deposit Period",
    cell: ({ row }) => <RowAmount label="2.5%" date="1 Year" />,
  },
  {
    accessorKey: "status",
    header: () => <p className="text-center">Status</p>,
    cell: ({ row }) => <RowStatus label={row?.original?.status} />,
  },
  {
    id: "action",
    header: "Action",
    enableHiding: false,
  },
];

export const walletsColumns = [
  {
    accessorKey: "name",
    header: "Name ",
    cell: ({ row }) => <RowNameType2 label={row?.original?.name} />,
  },
  {
    accessorKey: "number",
    header: "Account Number",
  },
  {
    accessorKey: "type",
    header: "Investment Type",
  },
  {
    accessorKey: "status",
    header: () => <p className="text-center">Status</p>,
    cell: ({ row }) => <RowStatus label={row?.original?.status} />,
  },
  {
    id: "action",
    header: "Action",
    enableHiding: false,
  },
];

export const staffsColumns = [
    {
      accessorKey: "name",
      header: "Name ",
      cell: ({ row }) => <RowNameType2 label={row?.original?.name} src={row?.original?.src} />,
    },
    {
      accessorKey: "userId",
      header: "ID",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "status",
      header: () => <p className="text-center">Status</p>,
      cell: ({ row }) => <RowStatus label={row?.original?.status ? "Active" : "Inactive"} />,
    },
    {
      id: "action",
      header: "Action",
      enableHiding: false,
    },
  ];
  