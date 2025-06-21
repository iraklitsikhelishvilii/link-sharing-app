import React from "react";
import Header from "../../__molecules/Header/Header";
import MobileContainer from "../MobileContainer/MobileContainer";
import CostumizeProfileSection from "../../__molecules/CostumizeProfileSection/CostumizeProfileSection";

function ProfileMain() {
  return (
    <div className="bg-[#FAFAFA]  w-[100%] flex flex-col py-[24px] px-[40px]">
      <Header />
      <div className="flex mt-[24px] gap-[24px] ">
        <MobileContainer />
        <CostumizeProfileSection />
      </div>
    </div>
  );
}

export default ProfileMain;
