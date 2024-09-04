import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "./ui/select";

const SelectDate = (props) => {
  const [tempDate, setTempDate] = React.useState([null, null]);
//   console.log("🚀 ~ SelectDate ~ tempDate:", tempDate)

  

//   const handleInputChange = (e: any, value: any) => {
//     if (value === "first") {
//       setTempDate([e.target.value, tempDate[1]]);
//       props.hasFilter[1]([e.target.value, tempDate[1]]);
//     }

//     if (value === "second") {
//       setTempDate([tempDate[0], e.target.value]);
//       props.hasFilter[1]([tempDate[0], e.target.value]);
//     }
//   };

  const handleChange = (value) => {
    props.hasFilter[1](value);
  };

  // check if date is there using useeffect
  React.useEffect(() => {
    if (!props.hasFilter || props.hasFilter.length === 0) {
      return;
    }

    if (props.hasFilter[0] === "Today") {
      setTempDate([null, null]);
    } else if (props.hasFilter[0] === "Yesterday") {
      setTempDate([null, null]);
    } else if (props.hasFilter[0] === "This Week") {
      setTempDate([null, null]);
    } else if (props.hasFilter[0] === "This Month") {
      setTempDate([null, null]);
    } else if (props.hasFilter[0] === "Last Month") {
      setTempDate([null, null]);
    } else if (props.hasFilter[0] === "This Year") {
      setTempDate([null, null]);
    } else if (typeof props.hasFilter[0] === "object") {
      setTempDate(props.hasFilter[0]);
    }
  }, [props.hasFilter]);
  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger defaultValue={"Today"} className="text-black w-fit min-w-[150px]">
        <SelectValue placeholder="Today" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={"Today"}>Today</SelectItem>
          <SelectItem value={"Yesterday"}>Yesterday</SelectItem>
          <SelectItem value={"This Week"}>This Week</SelectItem>
          <SelectItem value={"This Month"}>This Month</SelectItem>
          <SelectItem value={"Last Month"}>Last Month</SelectItem>
          <SelectItem value={"Last Year"}>This Year</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectDate;
