import { useProfileStore } from "@/app/common/store";
import Image from "next/image";
import React from "react";

function MobileTopBox() {
  const { users } = useProfileStore();

  const lastUser = users.length > 0 ? users[users.length - 1] : null;

  return (
    <div className="flex items-center justify-center absolute top-[165px] left-[170px] flex-col w-[200px]">
      <div className="bg-[#EEEEEE] rounded-[50%] w-[96px] h-[96px] overflow-hidden">
        {lastUser && lastUser.image !== "" && (
          <Image
            src={lastUser.image}
            alt="profile-picture"
            width={100}
            height={100}
            className="w-[100%] h-[100%] "
          />
        )}
      </div>
      {lastUser?.firstname ? (
        <p className="text-[16px] text-[#333333] font-semibold mt-[25px]">
          {lastUser?.firstname}
        </p>
      ) : (
        <div className="bg-[#EEEEEE] w-[160px] h-[16px] rounded-[104px] mt-[25px]"></div>
      )}

      {lastUser?.email ? (
        <p className="text-[16px] text-[#333333] font-semibold mt-[25px]">
          {lastUser?.email}
        </p>
      ) : (
        <div className="bg-[#EEEEEE] w-[72px] h-[16px] rounded-[104px] mt-[25px]"></div>
      )}
    </div>
  );
}

export default MobileTopBox;
