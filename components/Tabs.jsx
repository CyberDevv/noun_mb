import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsComp = ({ contents }) => {
  return (
    <Tabs
      defaultValue={contents[0].label.replace(" ", "_").toLowerCase()}
      className=""
    >
      <div className="pt-2.5 pb-5 border-b border-E0 mb-[30px]">
        <TabsList className="h-auto bg-[#FEFEFE] border border-[#EDEEEF] rounded-[8px] divide-x divide-[#EDEEEF] p-0">
          {contents.map((tab, idx) => (
            <TabsTrigger
              key={idx}
              value={tab.label.replace(" ", "_").toLowerCase()}
              className= "text-[#111213] px-4 py-[6px] font-inter font-medium text-sm leading-[20px] data-[state=active]:text-00G data-[state=active]:bg-[#F1F2F3] data-[state=active]:font-semibold" 
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {contents.map((tab, idx) => (
        <TabsContent
          key={idx}
          value={tab.label.replace(" ", "_").toLowerCase()}
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsComp;
