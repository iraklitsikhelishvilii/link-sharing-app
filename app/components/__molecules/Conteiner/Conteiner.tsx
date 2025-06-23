"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import SignUpInputsMinorDiv from "../SignUpInputsMinorDiv/SignUpInputsMinorDiv";
import SignUpPasswordInput from "../SignUpPasswordInput/SignUpPasswordInput";
import { LoginSchema } from "@/app/common/ValidationSchema/ValidationSchema";
import { LoginData } from "@/app/common/types";

function Conteiner() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(LoginSchema),
  });
  console.log(errors);
  const onSubmit = () => {
    router.push("/Links");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mt-[32px] gap-[24px]"
    >
      <SignUpInputsMinorDiv
        placeholder="e.g. alex@email.com"
        LabelName="Email address"
        type="email"
        htmlFor="email"
        id="email"
        register={register("email")}
        ErrorText={errors.email?.message}
        errors={errors.email}
      />
      <SignUpPasswordInput
        LabelName="Password"
        type={"password"}
        htmlFor="password"
        id="password"
        register={register("password")}
        ErrorText={errors.password?.message}
        placeholder="Enter your password"
        errors={errors.password}
      />
      <button
        className="w-[100%] p-[11px] cursor-pointer bg-[#633CFF] rounded-[8px] text-[#fff] font-bold text-[16px] hover:opacity-25"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default Conteiner;
