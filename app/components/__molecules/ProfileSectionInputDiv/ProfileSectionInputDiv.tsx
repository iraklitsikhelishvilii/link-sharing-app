import React from "react";

interface ProfileSectionInputDivInterface {
  lable: string;
  htmlFor: string;
  id: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function ProfileSectionInputDiv({
  lable,
  htmlFor,
  id,
  placeholder,
  type,
  value,
  onChange,
}: ProfileSectionInputDivInterface) {
  return (
    <div className="flex justify-between items-center">
      <label
        className="text-[16px] text-[#737373] font-normal cursor-pointer"
        htmlFor={htmlFor}
      >
        {lable}
      </label>
      <input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="text-[#333333] text-[16px] font-normal w-[100%] max-w-[430px] py-[12px] px-[16px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px] bg-[#fff] outline-none items-center justify-center  hover:border-[#633CFF] focus-within:border-[#633CFF] cursor-pointer transition-colors hover:shadow-[0_0_10px_rgba(99,60,255,0.5)] focus-within:shadow-[0_0_10px_rgba(99,60,255,0.5)]"
        type={type}
        id={id}
      />
    </div>
  );
}

export default ProfileSectionInputDiv;
