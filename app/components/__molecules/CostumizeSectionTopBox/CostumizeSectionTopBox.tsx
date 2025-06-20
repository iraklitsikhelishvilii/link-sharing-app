"use client";
import React from "react";
import AddNewStore from "../../../common/store";

function CostumizeSectionTopBox() {
  const { AddNewPlatform, AddPlatform } = AddNewStore();
  const handleAdd = () => {
    if (AddPlatform.length >= 5) {
      alert("Maximum 5 links allowed.");
      return;
    }
    AddNewPlatform();
  };

  return (
    <div className="w-[100%]  pt-[40px]">
      <h1 className="text-[#333333] text-[32px] font-bold">
        Customize your links
      </h1>
      <p className="text-[16px] text-[#737373] font-normal mt-[8px]">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button
        onClick={handleAdd}
        className="rounded-[8px] border-solid border-[1px] border-[#633CFF] w-[100%] py-[11px] mt-[40px] text-[#633CFF] text-[16px] font-semibold cursor-pointer "
      >
        + Add new link
      </button>
    </div>
  );
}

export default CostumizeSectionTopBox;
