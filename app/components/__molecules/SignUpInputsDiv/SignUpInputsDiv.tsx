"use client";
import SignUpInputsMinorDiv from "../SignUpInputsMinorDiv/SignUpInputsMinorDiv";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import LockIcon from "../../../common/images/lockIcon.svg";

import SignUpPasswordInput from "../SignUpPasswordInput/SignUpPasswordInput";
import { SignUpSchema } from "@/app/common/ValidationSchema/ValidationSchema";
import { SignUpData } from "@/app/common/types";
import Image from "next/image";

function SignUpInputsDiv() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(SignUpSchema),
  });
  const onSubmit = () => {
    router.push("/");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mt-[32px] gap-[16px]"
    >
      <SignUpInputsMinorDiv
        LabelName="Email address"
        type="text"
        htmlFor="email"
        id="email"
        register={register("email")}
        ErrorText={errors.email?.message}
        placeholder="ben@example.com |"
        errors={errors.email}
      />
      <SignUpPasswordInput
        LabelName="Email"
        type="password"
        htmlFor="password"
        id="password"
        register={register("password")}
        ErrorText={errors.password?.message}
        placeholder="Enter your password"
        errors={errors.password}
      />
      <div className=" flex flex-col gap-[4px]">
        <div className="flex justify-between">
          <label
            className={`cursor-pointer text-[12px] text-[#333333] font-normal ${
              errors.repeatPassword ? "texy-[#FF3939]" : ""
            }
            `}
            htmlFor={"repeatpassword"}
          >
            Confirm password
          </label>
        </div>
        <div
          className={`relative w-[100%] px-[12px] py-[16px] border-solid border-[#D9D9D9] border-[1px] gap-[12px] rounded-[8px] flex items-center ${
            errors.repeatPassword
              ? "border-[#FF3939]"
              : "focus:border-[#633CFF] focus:shadow-[0_0_10px_rgba(99,60,255,0.7)] hover:border-[#633CFF] hover:shadow-[0_0_10px_rgba(99,60,255,0.7)]"
          }`}
        >
          {errors.repeatPassword && (
            <p className="absolute text-[12px] text-[#FF3939] font-normal right-[16px]">
              {errors.repeatPassword.message}
            </p>
          )}
          <Image
            src={LockIcon}
            alt="locker"
            width={200}
            height={200}
            className="16px w-[16px]"
          />
          <input
            placeholder={"Confirm password"}
            className={`w-[100%] h-[100%] outline-none ${
              errors.repeatPassword ? "max-w-[150px]" : ""
            }`}
            type={"password"}
            id={"repeatpassword"}
            {...register("repeatPassword")}
          />
        </div>
      </div>
      <p className="text-[12px] text-[#737373] font-normal">
        Password must contains at least 8 characters
      </p>
      <button
        className="w-[100%] p-[11px] cursor-pointer bg-[#633CFF] rounded-[8px] text-[#fff] font-bold text-[16px] hover:opacity-25"
        type="submit"
      >
        Create new account
      </button>
    </form>
  );
}

export default SignUpInputsDiv;
