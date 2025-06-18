import React from "react";
import mobileFirst from "../../../common/images/mobile_out.svg";
import MobileSecond from "../../../common/images/Subtract.svg";
import Image from "next/image";
import MobileTopBox from "../../__atoms/MobileTopBox/MobileTopBox";
import MobileSecondBoxDiv from "../../__atoms/MobileSecondBoxDiv/MobileSecondBoxDiv";
function MobileContainer() {
  return (
    <div className="bg-[#FFFFFF] px-[120px] py-[100px] relative max-w-[560px] w-[100%]">
      <Image className="w-[100%] h-[100%]" src={mobileFirst} alt="mobile" />
      <Image
        src={MobileSecond}
        alt="mobile"
        className="absolute top-[120px] left-[137px]"
      />
      <MobileTopBox />
      <div className="flex flex-col gap-[20px] w-[100%] max-w-[237px]  absolute top-[380px] left-[160px] ">
        <MobileSecondBoxDiv />
        <MobileSecondBoxDiv />
        <MobileSecondBoxDiv />
        <MobileSecondBoxDiv />
        <MobileSecondBoxDiv />
      </div>
    </div>
  );
}

export default MobileContainer;
