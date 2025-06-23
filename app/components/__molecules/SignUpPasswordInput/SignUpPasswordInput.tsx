"use client";

import React from "react";
import Image from "next/image";
import { SignUpInputsMinorDivInterface } from "@/app/common/types";
import LockIcon from "../../../common/images/lockIcon.svg";
function SignUpPasswordInput({
  htmlFor,
  type,
  id,
  LabelName,
  ErrorText,
  register,
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
        <p className=" absolute text-[12px]  text-[#FF3939] font-normal right-[16px]">
          {ErrorText}
        </p>
        <Image
          src={LockIcon}
          alt="locker"
          width={200}
          height={200}
          className="16px w-[16px]"
        />
        <input
          placeholder={placeholder}
          className={`w-[100%] h-[100%] outline-none ${
            errors ? "max-w-[150px]" : ""
          }`}
          {...register}
          type={type}
          id={id}
        />
      </div>
    </div>
  );
}

export default SignUpPasswordInput;
