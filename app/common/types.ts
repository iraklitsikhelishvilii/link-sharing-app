export interface PlatformItem {
  option: string;
  link: string;
}

export interface AddNewInterface {
  AddPlatform: PlatformItem[];

  savedPlatforms: PlatformItem[];

  setAddPlatfotm: (newplatform: PlatformItem[]) => void;

  AddNewPlatform: () => void;

  updatePlatformOption: (index: number, option: string) => void;

  updatePlatformLink: (index: number, link: string) => void;

  removePlatform: (index: number) => void;

  savePlatforms: () => void;
}
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface SignUpInputsMinorDivInterface {
  LabelName: string;
  type: string;
  htmlFor: string;
  id: string;
  register: UseFormRegisterReturn;
  ErrorText?: string;
  placeholder: string;
  errors: FieldError | undefined;
}

export interface LoginData {
  email: string;
  password: string;
}
export interface PasswordToggleTypes {
  showPassword: boolean;
  toggleShowPassword: () => void;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface UserProfile {
  firstname: string;
  lastname: string;
  email: string;
  image: string;
}

export interface ProfileStoreTypes {
  firstname: string;
  lastname: string;
  email: string;
  image: string;
  users: UserProfile[];
  setFirstname: (value: string) => void;
  setLastname: (value: string) => void;
  setEmail: (value: string) => void;
  setImage: (value: string) => void;

  handleSave: () => void;
  resetFields: () => void;
}
