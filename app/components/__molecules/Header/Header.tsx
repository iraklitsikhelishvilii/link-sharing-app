import React from "react";
import HeaderLogo from "../../__atoms/HeaderLogo/HeaderLogo";
import linkImg from "../../../common/images/linkimg.svg";
import profileIcon from "../../../common/images/profileicon.svg";
import NavBarBtn from "../../__atoms/NavBarBtn/NavBarBtn";
function Header() {
  return (
    <div className="max-w-[1440px] w-[100%] bg-[#fff] py-[16px] px-[24px] rounded-[12px] flex items-center justify-between">
      <HeaderLogo />
      <div className="flex gap-[16px]">
        <NavBarBtn src={linkImg} p="Links" />
        <NavBarBtn src={profileIcon} p="Profile Details" />
      </div>
      <button className="px-[27px] py-[11px] text-[#633CFF] text-[16px] font-semibold cursor-pointer border-[1px] border-solid border-[#633CFF] rounded-[8px]">
        Preview
      </button>
    </div>
  );
}

export default Header;
