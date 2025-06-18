import React from "react";
import Header from "../../__molecules/Header/Header";
import MobileContainer from "../MobileContainer/MobileContainer";
import CoustumizeSection from "../CostumizeSection/CoustumizeSection";

function Main() {
  return (
    <div className="bg-[#FAFAFA]  w-[100%] flex flex-col py-[24px] px-[40px]">
      <Header />
      <div className="flex mt-[24px] gap-[24px] ">
        <MobileContainer />
        <CoustumizeSection />
      </div>
    </div>
  );
}

export default Main;
