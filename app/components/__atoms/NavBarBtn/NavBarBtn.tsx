import Image from "next/image";
import React from "react";

interface NavBarBtn {
  src: string;
  p: string;
}

function NavBarBtn({ src, p }: NavBarBtn) {
  return (
    <button className="flex items-center justify-center gap-[8px] rounded-[8px] px-[27px] py-[11px] cursor-pointer">
      <Image
        className="h-[15px] w-[15px]"
        src={src}
        alt="link"
        width={500}
        height={500}
      />
      <p className="text-[16px] text-[#737373] font-semibold">{p}</p>
    </button>
  );
}

export default NavBarBtn;
