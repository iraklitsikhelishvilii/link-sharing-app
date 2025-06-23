import { SignUpInputsMinorDivInterface } from "@/app/common/types";
import React from "react";
import MessageIcon from "../../../common/images/messageIcon.png";
import Image from "next/image";

function SignUpInputsMinorDiv({
  LabelName,
  type,
  htmlFor,
  id,
  register,
  ErrorText,
  placeholder,
  errors,
}: SignUpInputsMinorDivInterface) {
  return (
    <div className=" flex flex-col gap-[4px]">
      <div className="flex justify-between">
        <label
          className={`cursor-pointer text-[12px] text-[#333333] font-normal ${
            errors ? "text-[#FF3939]" : ""
          }`}
          htmlFor={htmlFor}
        >
          {LabelName}
        </label>
      </div>
      <div
        className={`relative w-[100%] px-[12px] py-[16px] border-solid border-[#D9D9D9] border-[1px] gap-[12px] rounded-[8px] flex items-center ${
          errors
            ? "border-[#FF3939]"
            : "focus:border-[#633CFF] focus:shadow-[0_0_10px_rgba(99,60,255,0.7)] hover:border-[#633CFF] hover:shadow-[0_0_10px_rgba(99,60,255,0.7)]"
        }`}
      >
        <p className=" text-[#FF3939] text-[12px] font-normal absolute right-[16px]">
          {ErrorText}
        </p>
        <Image
          src={MessageIcon}
          alt="message"
          width={300}
          height={300}
          className="w-[13px] h-[10px]"
        />
        <input
          placeholder={placeholder}
          className=" outline-none  w-[100%] text-[#333333] text-[16px] font-semibold"
          type={type}
          id={id}
          {...register}
        />
      </div>
    </div>
  );
}

export default SignUpInputsMinorDiv;
