import Image, { StaticImageData } from "next/image";
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
import Link from "next/link";
// import WhiteArrow from "../../../common/images/whitearrow.svg";
// import blackArrow from "../../../common/images/blackarrow.svg";
interface MobileSecondBoxDivInterface {
  options: string;
  link: string;
}

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

function MobileSecondBoxDiv({ options, link }: MobileSecondBoxDivInterface) {
  const currentPlatform = platformStyles[options];

  return (
    <Link
      href={link}
      className={`max-w-[237px] w-[100%] rounded-[8px] h-[44px] flex items-center justify-between text-white font-semibold transition-all duration-300 px-[17px] ${
        currentPlatform ? currentPlatform.bg : "bg-[#EEEEEE]"
      }`}
    >
      <div className="flex items-center gap-[8px]">
        {currentPlatform && (
          <>
            <Image
              className="w-[20px] h-[20px] mr-[8px]"
              src={currentPlatform.icon}
              alt={options}
            />
            <p
              className={`text-[12px] font-normal ${
                currentPlatform.textColor || ""
              }`}
            >
              {options}
            </p>
          </>
        )}
      </div>
      {/* <Image
        src={options === "Frontend Mentor" ? blackArrow : WhiteArrow}
        alt="arrow"
        className="w-[16px] h-[16px]"
      /> */}
    </Link>
  );
}

export default MobileSecondBoxDiv;
