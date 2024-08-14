import React from "react";

const FormField = ({ label, value, setValue, type, placeholder }) => {
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <label className="inline-block w-full">
      <span className="text-E6 font-inter tracking-[0.2px] leading-[18px]">
        {label}
      </span>

      <input
        value={value}
        onChange={handleOnChange}
        className="py-4 mt-2 bg-f2 px-[18px] rounded-[8px] text-bd font-mulish font-medium leading-[24px] w-full focus:outline-none focus:ring-1 focus:ring-f2"
        type={type ? type : "text"}
        placeholder={placeholder}
      />
    </label>
  );
};

export default FormField;
