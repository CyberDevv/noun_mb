import AnalyticCard from "@/components/AnalyticCard";
import { RowDate, RowName, RowStatusType2 } from "@/components/RowFields";
import Table from "@/components/Table";
import SearchInput from "@/components/table/SearchInput";

const Cards = () => {
  return (
    <main className="space-y-[18px]">
      {" "}
      <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
        <AnalyticCard label="Total No. of Cards" value={0} />
        <AnalyticCard label="Total Active Cards" value={0} />
        <AnalyticCard label="Total Inactive Cards" value={0} />
        <AnalyticCard label="Blocked Cards" value={0} />
      </div>
    </main>
  );
};

export default Cards;

// const Cards = () => {
//   return (
//     <main className="space-y-[18px]">
//       <div className="overflow-hidden divide-x-2 start divide-E0 rounded-[15px]">
//         <AnalyticCard label="Total No. of Cards" value={0} />
//         <AnalyticCard label="Total Active Cards" value={0} />
//         <AnalyticCard label="Total Inactive Cards" value={0} />
//         <AnalyticCard label="Blocked Cards" value={0} />
//       </div>

//       <Table
//         columns={[
//           "Name ",
//           "Account Number",
//           "Card No.",
//           "Card Type",
//           "Date Issued",
//           "Expiry Date",
//           "Status",
//           "Action",
//         ]}
//         rows={[
//           {
//             name: <RowName label="Odesola Ibrahim" naration={<span className= "text-[#515151]">abc@example.com</span>} />,
//             acctNumber: "28377446362",
//             cardNo: "293xxxxxxxx9015",
//             cardType: 'Credit',
//             dateIssued: <RowDate date= "03 June, 2024" time= "09:43 AM" />,
//             expiryDate: <RowDate date= "03 June, 2024" time= "09:43 AM" />,
//             status: <RowStatusType2 label="Active" />,
//             action: "",
//           },
//         ]}
//         toolbar={
//           <div className="between">
//             <h6 className="font-medium text-black font-inter leading-[28px] tracking-[0.2px]">
//             List of Card Holders
//             </h6>

//             <div className="space-x-10 end">
//               <SearchInput />
//             </div>
//           </div>
//         }
//       />
//     </main>
//   );
// };

// export default Cards;
