import Image from "next/image";
import React from "react";
import Link from "next/link";
import SignUpInputsDiv from "../../__molecules/SignUpInputsDiv/SignUpInputsDiv";
import DevlinksImg from "../../../common/images/devlinksImg.svg";
function SignUpComp() {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center bg-[#FAFAFA]  max-[1100px]:flex-col max-[1100px]:justify-between">
      <div className="flex flex-col items-center justify-center max-w-[1440px] w-[100%] h-[100%] gap-[60px] max-[1100px]:justify-center px-[20px] ">
        <Image
          src={DevlinksImg}
          width={500}
          height={500}
          alt="Picture of the author"
          className=" w-[180px]"
        />
        <div className="max-w-[476px] w-[100%] bg-white  rounded-[12px] p-[32px] ">
          <h1 className="text-[32px] font-bold leading-[38.5px] text-[#333333]">
            Create account
          </h1>
          <p className="text-[#737373] text-[16px] font-normal mt-[15px]">
            Let’s get you started sharing your links!
          </p>
          <SignUpInputsDiv />
          <div className="flex w-[100%] items-center justify-center mt-[32px]">
            <p className=" leading-[21px] text-[#737373] text-[16px]">
              Already have an account?
            </p>
            <Link className="text-[#633CFF] text-[16px] font-bold " href={"/"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpComp;
