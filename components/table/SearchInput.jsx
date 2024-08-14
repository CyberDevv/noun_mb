import Image from "next/image";
import React from "react";

const SearchInput = () => {
  return (
    <div className="border bg-F6 border-[#EDEEEF] px-4 py-[11px] rounded-[8px] start space-x-1">
      <Image src="/svg/search.svg" width={20} height={20} alt="search" />
      <input type="text" placeholder="Search reference, amount" className="bg-transparent font-medium font-inter text-sm leading-[22px] tracking-[0.2px] text-59 focus:outline-none min-w-[300px]" />
    </div>
  );
};

export default SearchInput;
