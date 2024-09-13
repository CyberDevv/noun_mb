import Image from "next/image";
import React from "react";
// import CurrencyFormat from "react-currency-format";

const AnalyticCard = ({
  label,
  value,
  hasBase,
  valueIsCurrency,
  setValue,
  amount,
}) => {
  const ChildComp = () => {
    return (
      <div
        className={`flex-1 p-6 bg-white ${
          hasBase ? "border-b-8 border-B0" : ""
        }`}
      >
        <div className="w-10 h-10 rounded-full bg-E6 center">
          <Image
            src="/svg/analyticIcon.svg"
            width={18}
            height={18}
            alt="icon"
          />
        </div>

        <p className="mt-[22px] text-9E font-inter font-medium text-sm leading-[22px] tracking-[0.2px]">
          {label}
        </p>

        {amount ? (
          <>
            <p className="text-33 font-inter font-medium text-[24px] leading-[28px] mt-4">
              {`₦${amount?.toLocaleString('en-US')}`}
            </p>

            <p className="font-inter font-medium text-lg leading-[28px] mt-2 text-gray-600">
              {valueIsCurrency ? `₦${value?.toLocaleString('en-US')}` : value?.toLocaleString('en-US')}
            </p>
          </>
        ) : (
          <p className="text-33 font-inter font-medium text-[24px] leading-[28px]  mt-4">
            {valueIsCurrency ? `₦${value?.toLocaleString('en-US')}` : value?.toLocaleString('en-US')}
          </p>
        )}
      </div>
    );
  };

  return (
    <>
      {setValue ? (
        <button onClick={() => setValue(label)} className="w-full text-left">
          <ChildComp />
        </button>
      ) : (
        <ChildComp />
      )}
    </>
  );
};

export default AnalyticCard;
