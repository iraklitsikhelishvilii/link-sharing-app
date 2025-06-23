"use client";
import React from "react";
import HeaderLogo from "../../__atoms/HeaderLogo/HeaderLogo";
import linkImg from "../../../common/images/linkblackicon.svg";
import PurpleLinkImg from "../../../common/images/PurpleLink.svg";
import profileIcon from "../../../common/images/profileicon.svg";
import NavBarBtn from "../../__atoms/NavBarBtn/NavBarBtn";
import PurpleProfileIcon from "../../../common/images/PurpleProfileIcon.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const pathname = usePathname();

  return (
    <div className="max-w-[1440px] w-[100%] bg-[#fff] py-[16px] px-[24px] rounded-[12px] flex items-center justify-between">
      <HeaderLogo />
      <div className="flex gap-[16px]">
        <NavBarBtn
          link="/Links"
          src={pathname === "/Links" ? PurpleLinkImg : linkImg}
          p="Links"
          color={pathname === "/Links" ? "bg-[#EFEBFF]" : ""}
          Pcolor={pathname === "/Links" ? "text-[#633CFF]" : "text-[#737373]"}
        />
        <NavBarBtn
          Pcolor={
            pathname === "/Profile-Details"
              ? "text-[#633CFF]"
              : "text-[#737373]"
          }
          color={pathname === "/Profile-Details" ? "bg-[#EFEBFF]" : ""}
          link="/Profile-Details"
          src={
            pathname === "/Profile-Details" ? PurpleProfileIcon : profileIcon
          }
          p="Profile Details"
        />
      </div>
      <Link
        href={"/Preview"}
        className="px-[27px] py-[11px] text-[#633CFF] text-[16px] font-semibold cursor-pointer border-[1px] border-solid border-[#633CFF] rounded-[8px] hover:bg-[#EFEBFF]"
      >
        Preview
      </Link>
    </div>
  );
}

export default Header;
