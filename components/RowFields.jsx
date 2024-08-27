import Image from "next/image";
import { Button } from "./ui/button";

export const RowStatus = ({ label }) => (
  <div>
    <p className="font-medium text-00G capitalize leading-[20px] border rounded-full border-[#0FB48559] w-fit px-2 py-1 start space-x-1 mx-auto">
      <Image src="/svg/completed.svg" width={14} height={14} alt="completed" />
      <span>{label.toLowerCase()}</span>
    </p>
  </div>
);

export const RowName = ({ label, naration }) => (
  <div className="space-x-3 start">
    <div className="h-[35px] w-[35px] rounded-full bg-gray-500" />
    <div>
      <p className="">{label}</p>
      <p className="text-F7 capitalize text-[10px] leading-[14px] tracking-[0.3px] font-inter mt-0.5">
        {naration}
      </p>
    </div>
  </div>
);

export const RowAmount = ({ label, date }) => (
  <div>
    <p className="">{label}</p>
    <p className="text-9F text-[10px] leading-[14px] tracking-[0.3px] font-inter mt-0.5">
      {date}
    </p>
  </div>
);

export const RowDate = ({ time, date }) => (
  <div>
    <p className="">{date}</p>
    <p className="text-9F text-[10px] leading-[14px] tracking-[0.3px] font-inter mt-0.5">
      {time}
    </p>
  </div>
);

export const RowStatusType2 = ({ label }) => (
  <div>
    <p className={`${label === "ENABLED" ? "text-00G border-[#0FB48559]" : "text-[#D32F2F] border-[#D32F2F59]"} font-medium leading-[20px] border capitalize rounded-full w-fit px-2 py-1 start space-x-1 mx-auto`}>
      <span>{label.toLowerCase()}</span>
    </p>
  </div>
);

export const RowVerification = ({ label }) => (
  <p className={`${label === "Approved" ? "text-00G bg-E6" : "bg-[#FEEDED] text-[#D32F2F]"}  leading-[20px] text-sm font-medium font-inter py-px px-2 rounded-full w-fit`}>
    {label}
  </p>
);

export const RowNameType2 = ({ label, src }) => (
  <div className="space-x-3 start">
    <div className="h-[35px] w-[35px] rounded-full bg-gray-500" />
    <div>
      <p className="">{label}</p>
    </div>
  </div>
);

export const RowAction = ({ label }) => (
  <Button variant="ghost" size="icon">
    <Image src="/svg/hamburger.svg" width={6} height={18} alt="hamburger" />
  </Button>
);
