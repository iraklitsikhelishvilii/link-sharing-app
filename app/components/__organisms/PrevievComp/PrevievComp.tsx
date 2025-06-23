"use client";

import AddNewStore, { useProfileStore } from "@/app/common/store";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import WhiteGithubIcon from "../../../common/images/whitegithub.svg";
import WhiteFrontendMentor from "../../../common/images/Whitefrontend.svg";
import WhiteTwitter from "../../../common/images/whitetwitter.svg";
import WhiteLinkDin from "../../../common/images/Whitelinkdin.svg";
import WhiteYoutube from "../../../common/images/whiteyoutube.svg";
import WhiteFacebook from "../../../common/images/WhiteFacebook.svg";
import WhiteTwitch from "../../../common/images/whitetwitch.svg";
import WhiteDevTo from "../../../common/images/whitedevto.svg";
import WhiteCodwares from "../../../common/images/whitecodwares.svg";
import WhiteFreeCode from "../../../common/images/whitefreecode.svg";
import WhiteGitlab from "../../../common/images/whitegitlab.svg";
import whitehashnode from "../../../common/images/whitehashnode.svg";
import WhiteStack from "../../../common/images/whiteStack.svg";

function PrevievComp() {
  const { users } = useProfileStore();
  const lastUser = users.length > 0 ? users[users.length - 1] : null;
  const { savedPlatforms } = AddNewStore();

  const platformStyles: Record<
    string,
    { bg: string; icon: StaticImageData; textColor?: string }
  > = {
    YouTube: { bg: "bg-[#EE3939]", icon: WhiteYoutube },
    GitHub: { bg: "bg-[#1A1A1A]", icon: WhiteGithubIcon },
    LinkedIn: { bg: "bg-[#2D68FF]", icon: WhiteLinkDin },
    Facebook: { bg: "bg-[#2442AC]", icon: WhiteFacebook },
    "Frontend Mentor": {
      bg: "bg-[#fafafa] border-solid border-[1px] border-[#D9D9D9]",
      icon: WhiteFrontendMentor,
      textColor: "text-[#333333]",
    },
    Twitter: { bg: "bg-[#43B7E9]", icon: WhiteTwitter },
    Twitch: { bg: "bg-[#EE3FC8]", icon: WhiteTwitch },
    "Dev.to": { bg: "bg-[#333333]", icon: WhiteDevTo },
    Codewars: { bg: "bg-[#8A1A50]", icon: WhiteCodwares },
    freeCodeCamp: { bg: "bg-[#302267]", icon: WhiteFreeCode },
    GitLab: { bg: "bg-[#EB4925]", icon: WhiteGitlab },
    Hashnode: { bg: "bg-[#0330D1]", icon: whitehashnode },
    "Stack Overflow": { bg: "bg-[#EC7100]", icon: WhiteStack },
  };

  return (
    <div className="w-[100%] h-[100vh] bg-[#FAFAFA]">
      <div className="bg-[#633CFF] w-[100%] h-[350px] rounded-b-[32px] px-[24px] pt-[24px] flex flex-col items-center">
        <div className="bg-[#FFFFFF] w-[100%] rounded-[12px] px-[24px] py-[16px] flex items-center justify-between">
          <Link
            className="cursor-pointer border-[#633CFF] border-[1px] border-solid px-[27px] py-[11px] rounded-[8px] text-[#633CFF] text-[16px] font-semibold hover:bg-[#EFEBFF]"
            href={"/Links"}
          >
            Back to Editor
          </Link>

          <button className="border-[#633CFF] cursor-pointer border-[1px] border-solid px-[27px] py-[11px] rounded-[8px] text-[#FFFFFF] text-[16px] font-semibold bg-[#633CFF] hover:opacity-40">
            Share Link
          </button>
        </div>

        <div className="bg-[#FFFFFF] rounded-[24px] px-[56px] py-[48px] max-w-[349px] w-[100%] relative top-[100px] flex flex-col items-center">
          <div className="w-[100%] flex flex-col items-center">
            <div className="w-[104px] h-[104px] rounded-[50%] border-[4px] border-solid border-[#633CFF] overflow-hidden">
              {lastUser && (
                <Image
                  src={lastUser.image}
                  alt="Profile Image"
                  width={100}
                  height={100}
                  className="w-[100%] h-[100%] object-cover"
                />
              )}
            </div>
            <h1 className="text-[#333333] text-[32px] font-bold mt-[25px]">
              {lastUser?.firstname || "Your Name"}
            </h1>
            <p className="text-[16px] text-[#737373] font-normal mt-[10px]">
              {lastUser?.email || "Your Email"}
            </p>
          </div>

          <div className="mt-[56px] w-[100%] flex flex-col gap-[16px] max-h-[180px] overflow-y-scroll">
            {savedPlatforms.length > 0 ? (
              savedPlatforms.map((item, key) => {
                const platform = platformStyles[item.option];
                const bgClass = platform?.bg || "bg-[#E0E0E0]";
                const textColor = platform?.textColor || "text-[#FFFFFF]";
                const icon = platform?.icon;

                return (
                  <Link
                    key={key}
                    href={item?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${bgClass} ${textColor} flex items-center justify-center gap-[10px] px-[16px] py-[12px] rounded-[8px] font-medium hover:opacity-80 transition`}
                  >
                    {icon && (
                      <Image
                        src={icon}
                        alt={item.option}
                        width={20}
                        height={20}
                      />
                    )}
                    {item?.option}
                  </Link>
                );
              })
            ) : (
              <p className="text-[#737373] text-[14px] text-center">
                No links available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrevievComp;
