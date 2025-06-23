"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import devlivksLogo from "../../../common/images/devlinksImg.svg";
import Conteiner from "../../__molecules/Conteiner/Conteiner";

function LogInComp() {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center bg-[#FAFAFA]  max-[1100px]:flex-col ">
      <div className="flex items-center flex-col  justify-center  max-w-[1440px] w-[100%] h-[100%] gap-[58px] max-[1100px]:justify-center px-[20px] ">
        <Image
          className=" h-[40px]"
          src={devlivksLogo}
          width={300}
          height={300}
          alt="devliks"
        />
        <div className="max-w-[476px] w-[100%] bg-white  rounded-[12px] p-[40px] ">
          <h1 className="text-[32px] font-bold leading-[38.5px] text-[#333333]">
            Login
          </h1>
          <p className="mt-[15px] text-[16px] text-[#737373] font-semibold">
            Add your details below to get back into the app
          </p>

          <Conteiner />

          <div className="flex w-[100%] items-center justify-center mt-[24px] gap-[4px]">
            <p className=" leading-[21px] text-[#737373] text-[14px]">
              Don’t have an account? Create account
            </p>
            <Link
              className="text-[#633CFF] text-[14px] font-bold "
              href={"/Sign-up"}
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInComp;
