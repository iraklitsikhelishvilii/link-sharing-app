import React from "react";
import SelectComp from "../SelectComp/SelectComp";
import GitIcon from "../../../common/images/guthubIcon.svg";
import YoutubeIcon from "../../../common/images/youtubeIcon.svg";
import LinkdinIcon from "../../../common/images/linkdinIcon.svg";
import FacebookIcon from "../../../common/images/facebookIcon.svg";
import FrontendmentorIcon from "../../../common/images/frontenmentorIcon.svg";
import AddNewStore from "@/app/common/store";
import TwitterIcon from "../../../common/images/twitter.svg";
import TwitchIcon from "../../../common/images/twitchIcon.svg";
import DevtoIcon from "../../../common/images/devtoIcon.svg";
import CodwaresIcon from "../../../common/images/CodwaresIcon.svg";
import FreeCodeIcon from "../../../common/images/freecode.svg";
import GitLab from "../../../common/images/gitlab.svg";
import HashnodeIcon from "../../../common/images/hashnode.svg";
import StackOverflowIcon from "../../../common/images/stackoverflow.svg";
interface AddPlatformDivProps {
  index: number;
}

function AddPlatformDiv({ index }: AddPlatformDivProps) {
  const {
    AddPlatform,
    updatePlatformOption,
    updatePlatformLink,
    removePlatform,
  } = AddNewStore();
  const item = AddPlatform[index];

  const options = [
    { label: "GitHub", value: "GitHub", icon: GitIcon },
    { label: "YouTube", value: "YouTube", icon: YoutubeIcon },
    { label: "LinkedIn", value: "LinkedIn", icon: LinkdinIcon },
    { label: "Facebook", value: "Facebook", icon: FacebookIcon },
    {
      label: "Frontend Mentor",
      value: "Frontend Mentor",
      icon: FrontendmentorIcon,
    },
    { label: "Twitter", value: "Twitter", icon: TwitterIcon },
    { label: "Twitch", value: "Twitch", icon: TwitchIcon },
    { label: "Dev.to", value: "Dev.to", icon: DevtoIcon },
    { label: "Codewars", value: "Codewars", icon: CodwaresIcon },
    { label: "freeCodeCamp", value: "freeCodeCamp", icon: FreeCodeIcon },
    { label: "GitLab", value: "GitLab", icon: GitLab },
    { label: "Hashnode", value: "Hashnode", icon: HashnodeIcon },
    {
      label: "Stack Overflow",
      value: "Stack Overflow",
      icon: StackOverflowIcon,
    },
  ];
  const usedOptions = AddPlatform.filter((_, idx) => idx !== index).map(
    (item) => item.option
  );

  const availableOptions = options.filter(
    (option) => !usedOptions.includes(option.value)
  );
  return (
    <div
      key={index}
      className="bg-[#FAFAFA] w-[100%] p-[20px] mt-[24px] rounded-[8px]"
    >
      <div className="flex items-center gap-[8px]">
        <div className="flex flex-col gap-[6px]">
          <div className="w-[12px] h-[1px] bg-[#737373]"></div>
          <div className="w-[12px] h-[1px] bg-[#737373]"></div>
        </div>
        <div className="flex w-[100%] items-center justify-between">
          <p className="text-[16px] text-[#737373] font-bold">
            Link {index + 1}
          </p>
          <button
            className="text-[#737373] text-[16px] font-normal cursor-pointer"
            onClick={() => removePlatform(index)}
          >
            Remove
          </button>
        </div>
      </div>

      <div className="mt-[12px] flex flex-col gap-[5px]">
        <p className="text-[12px] text-[#333333] font-normal">Platform</p>
        <SelectComp
          options={availableOptions}
          value={item.option}
          onChange={(value) => updatePlatformOption(index, value)}
        />
      </div>

      <div className="mt-[12px] flex flex-col gap-[5px]">
        <p className="text-[12px] text-[#333333] font-normal">Link</p>
        <input
          type="text"
          value={item.link}
          onChange={(e) => updatePlatformLink(index, e.target.value)}
          placeholder="e.g. https://github.com/username"
          className="border border-[#D9D9D9] rounded-[8px] p-[12px] text-[16px] text-[#333333] w-full"
        />
      </div>
    </div>
  );
}

export default AddPlatformDiv;
