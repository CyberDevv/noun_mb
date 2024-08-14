import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const ViewAllButton = ({link}) => {
  return (
    <Button
      variant="link"
      className="text-066 font-inter font-medium text-sm leading-[20px] space-x-1"
    >
      <span>View All</span>
      <Image src="/svg/ext.svg" width={16} height={16} alt="to page" />
    </Button>
  );
};

export default ViewAllButton;
