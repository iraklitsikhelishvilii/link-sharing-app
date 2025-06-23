import Image from "next/image";
import React from "react";
// import logo from "../../../common/images/logo.svg";
import LogoTextImg from "../../../common/images/devlinks.svg";
function HeaderLogo() {
  return (
    <div className="flex gap-[10px] items-center justify-center">
      {/* <Image
        className="w-[26px] h-[26px]"
        src={logo}
        alt="logo"
        width={500}
        height={500}
      /> */}
      <Image
        className="w-[108px] h-[21px]"
        src={LogoTextImg}
        alt="devlinks"
        width={500}
        height={500}
      />
    </div>
  );
}

export default HeaderLogo;
