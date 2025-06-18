import React from "react";
import CostumizeSectionTopBox from "../../__molecules/CostumizeSectionTopBox/CostumizeSectionTopBox";
import CostumizeBottomBox from "../../__molecules/CostumizeBottomBox/CostumizeBottomBox";
function CoustumizeSection() {
  return (
    <div className="w-[100%] max-w-[808px] bg-[#fff] rounded-[12px] flex-col px-[40px] flex  items-end">
      <CostumizeSectionTopBox />
      <CostumizeBottomBox />
      <button className="bg-[#633CFF] px-[27px] py-[11px] text-[#FFFFFF] flex text-[16px] font-semibold rounded-[8px] cursor-pointer mt-[30px] max-w-[91px] opacity-25">
        Save
      </button>
    </div>
  );
}

export default CoustumizeSection;
