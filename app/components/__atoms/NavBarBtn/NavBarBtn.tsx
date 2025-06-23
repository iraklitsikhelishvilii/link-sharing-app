import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavBarBtn {
  src: string;
  p: string;
  link: string;
  color: string;
  Pcolor: string;
}

function NavBarBtn({ src, p, link, color, Pcolor }: NavBarBtn) {
  return (
    <Link
      href={link}
      className={`flex items-center justify-center gap-[8px] rounded-[8px] px-[27px] py-[11px] cursor-pointer ${color}`}
    >
      <Image
        className="h-[15px] w-[15px]"
        src={src}
        alt="link"
        width={500}
        height={500}
      />
      <p className={`text-[16px]  font-semibold ${Pcolor}`}>
        {p}
      </p>
    </Link>
  );
}

export default NavBarBtn;
