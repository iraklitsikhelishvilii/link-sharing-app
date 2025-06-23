"use client";
import React, { useRef } from "react";
import CostumizeProfileSectionHeading from "../../__atoms/CostumizeProfileSectionHeading/CostumizeProfileSectionHeading";
import PhotoIcon from "../../../common/images/photoIcon.svg";
import Image from "next/image";
import ProfileSectionInputDiv from "../ProfileSectionInputDiv/ProfileSectionInputDiv";
import { useProfileStore } from "@/app/common/store";

function CostumizeProfileSection() {
  const {
    firstname,
    lastname,
    email,
    image,
    setFirstname,
    setLastname,
    setEmail,
    setImage,
    handleSave,
  } = useProfileStore();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setImage(fileURL);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-[100%] max-w-[808px] bg-[#fff] rounded-[12px] flex-col px-[40px] flex items-end">
      <CostumizeProfileSectionHeading />
      <div className="bg-[#FAFAFA] w-[100%] flex rounded-[12px] p-[20px] mt-[40px] items-center justify-between">
        <p className="text-[#737373] text-[16px] font-normal">
          Profile picture
        </p>
        <div className="flex items-center gap-[24px]">
          <div
            onClick={triggerFileInput}
            className="flex flex-col justify-center items-center cursor-pointer w-[192px] h-[192px] bg-[#EFEBFF] gap-[8px] rounded-[12px] hover:opacity-80 transition"
          >
            {image ? (
              <Image
                src={image}
                alt="profileImage"
                width={100}
                height={100}
                className="w-[100%] h-[100%]"
              />
            ) : (
              <div className="w-[100%] items-center flex flex-col gap-[14px]">
                <Image
                  src={PhotoIcon}
                  alt="Upload"
                  className="w-[40px] h-[40px]"
                />
                <span className="text-[#7B61FF] text-[16px] font-semibold">
                  + Upload Image
                </span>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <p className="text-[#737373] text-[12px] font-normal max-w-[215px] w-[100%]">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </div>
      </div>

      <form
        className="bg-[#FAFAFA] w-[100%] flex flex-col p-[20px] mt-[24px] gap-[12px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <ProfileSectionInputDiv
          lable="First name*"
          htmlFor="Firstname"
          id="Firstname"
          placeholder="e.g. John"
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <ProfileSectionInputDiv
          lable="Last name*"
          htmlFor="Lastname"
          id="Lastname"
          placeholder="e.g. Appleseed"
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <ProfileSectionInputDiv
          lable="Email"
          htmlFor="Email"
          id="Email"
          placeholder="e.g. email@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>

      <button
        onClick={() => {
          handleSave();
          if (fileInputRef.current) fileInputRef.current.value = "";
        }}
        className="bg-[#633CFF] px-[27px] py-[11px] text-[#FFFFFF] flex text-[16px] font-semibold rounded-[8px] cursor-pointer mt-[140px] max-w-[91px]"
      >
        save
      </button>
    </div>
  );
}

export default CostumizeProfileSection;
