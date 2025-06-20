import React from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import Image from "next/image";

interface Option {
  label: string;
  value: string;
  icon: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const SelectComp: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <FormControl fullWidth variant="outlined">
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        displayEmpty
        sx={{
          "& .MuiSelect-select": {
            padding: "16px 15px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#633CFF",

            boxShadow: "0 0 10px rgba(99, 60, 255, 0.7)",
            borderWidth: "1px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D9D9D9",
            borderWidth: "1px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#633CFF",
            boxShadow: "0 0 10px rgba(99, 60, 255, 0.7)",
            borderWidth: "1px",
          },
        }}
        renderValue={(selected) => {
          if (!selected) {
            return (
              <span
                className="text-[16px] text-[#333333] font-normal"
                style={{ color: "#333333" }}
              >
                Select platform
              </span>
            );
          }

          const selectedOption = options.find(
            (option) => option.value === selected
          );

          if (!selectedOption) return selected;

          return (
            <div className="flex items-center gap-[8px]">
              <Image
                src={selectedOption.icon}
                alt={selectedOption.value}
                width={16}
                height={16}
              />
              <span>{selectedOption.label}</span>
            </div>
          );
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={option.value} value={option.value}>
            <div
              className={`flex items-center gap-[12px] w-full ${
                index !== options.length - 1 ? "border-b border-[#D9D9D9]" : ""
              } pb-[8px]`}
            >
              <Image
                className="w-[16px] h-[16px]"
                src={option.icon}
                alt={option.value}
              />
              <p className="text-[16px] text-[#333333] font-normal">
                {option.label}
              </p>
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComp;
