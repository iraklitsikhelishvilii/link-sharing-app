"use client";
import React from "react";
import mobileFirst from "../../../common/images/mobile_out.svg";
import MobileSecond from "../../../common/images/Subtract.svg";
import Image from "next/image";
import MobileTopBox from "../../__atoms/MobileTopBox/MobileTopBox";
import MobileSecondBoxDiv from "../../__atoms/MobileSecondBoxDiv/MobileSecondBoxDiv";
import AddNewStore from "@/app/common/store";

function MobileContainer() {
  const { savedPlatforms } = AddNewStore();

  return (
    <div className="bg-[#FFFFFF] px-[120px] py-[100px] relative max-w-[560px] w-[100%]">
      <Image className="w-[100%] h-[100%]" src={mobileFirst} alt="mobile" />
      <Image
        src={MobileSecond}
        alt="mobile"
        className="absolute top-[120px] left-[137px]"
      />
      <MobileTopBox />
      <div className="flex flex-col gap-[20px] w-[100%] max-w-[237px] absolute top-[380px] left-[160px] z-10000">
        {[0, 1, 2, 3, 4].map((_, index) => {
          const item = savedPlatforms[index];
          return (
            <MobileSecondBoxDiv
              key={index}
              options={item ? item.option : ""}
              link={item ? item.link : ""}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MobileContainer;
