import React from "react";
import linkIcon from "../../../common/images/linkblackicon.svg";
import Image from "next/image";

function LinkInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-col mt-[12px] gap-[5px]">
      <label htmlFor="link" className="text-[12px] text-[#333333] font-normal">
        Link
      </label>

      <div className="flex w-[100%] gap-[12px] items-center justify-center border-[1px] border-solid border-[#D9D9D9] px-[16px] py-[12px] rounded-[8px] text-[#333333] text-[16px] font-normal hover:border-[#633CFF] focus-within:border-[#633CFF] cursor-pointer transition-colors hover:shadow-[0_0_10px_rgba(99,60,255,0.5)] focus-within:shadow-[0_0_10px_rgba(99,60,255,0.5)]">
        <Image src={linkIcon} alt="link" className="w-[16px] h-[16px]" />
        <input
          className="w-[100%] outline-none"
          id="link"
          type="text"
          value={value}
          placeholder="e.g. https://www.github.com/johnappleseed"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default LinkInput;
