"use client";
import React from "react";
import CostumizeSectionTopBox from "../../__molecules/CostumizeSectionTopBox/CostumizeSectionTopBox";
import CostumizeBottomBox from "../../__molecules/CostumizeBottomBox/CostumizeBottomBox";
import AddNewStore from "@/app/common/store";
import AddPlatformDiv from "../../__molecules/AddPlarfromDiv/AddPlatformDiv";

function CoustumizeSection() {
  const { AddPlatform, savePlatforms, savedPlatforms } = AddNewStore();
  console.log(savedPlatforms);

  return (
    <div className="w-[100%] max-w-[808px] bg-[#fff] rounded-[12px] flex-col px-[40px] flex items-end">
      <CostumizeSectionTopBox />

      {AddPlatform.length > 0 ? (
        <div className="w-[100%] h-[520px] overflow-y-scroll mt-[15px]">
          {AddPlatform.map((item, index) => (
            <AddPlatformDiv key={index} index={index} />
          ))}
        </div>
      ) : (
        <CostumizeBottomBox />
      )}

      <button
        onClick={savePlatforms}
        className={`bg-[#633CFF] px-[27px] py-[11px] text-[#FFFFFF] flex text-[16px] font-semibold rounded-[8px] cursor-pointer mt-[30px] max-w-[91px] ${
          AddPlatform.length > 0 ? "" : "opacity-25"
        }`}
      >
        save
      </button>
    </div>
  );
}

export default CoustumizeSection;
