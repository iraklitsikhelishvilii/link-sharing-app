import Image from "next/image";
import React from "react";
import CostumizeSectionImg from "../../../common/images/CostumizeMainImg.svg";
function  CostumizeBottomBox() {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center mt-[86px] bg-[#FAFAFA] rounded-[12px] py-[62px]">
      <Image
        src={CostumizeSectionImg}
        alt="CostumizeSection"
        className="w-[250px] h-[160px]"
      />
      <h1 className="text-[32px] text-[#333333] font-bold mt-[40px] ">
        Let’s get you started
      </h1>
      <p className="text-[#737373] text-[16px] font-normal text-center w-[488px] mt-[24px]">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
}

export default CostumizeBottomBox;
