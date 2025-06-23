import { create } from "zustand";
import {
  AddNewInterface,
  PasswordToggleTypes,
  ProfileStoreTypes,
} from "./types";

const AddNewStore = create<AddNewInterface>((set) => ({
  AddPlatform: [],

  savedPlatforms: [],

  setAddPlatfotm: (newplatform) => set({ AddPlatform: newplatform }),

  AddNewPlatform: () =>
    set((state) => ({
      AddPlatform: [...state.AddPlatform, { option: "", link: "" }],
    })),

  updatePlatformOption: (index, option) =>
    set((state) => {
      const updated = [...state.AddPlatform];
      updated[index].option = option;
      return { AddPlatform: updated };
    }),

  updatePlatformLink: (index, link) =>
    set((state) => {
      const updated = [...state.AddPlatform];
      updated[index].link = link;
      return { AddPlatform: updated };
    }),

  removePlatform: (index) =>
    set((state) => {
      const updatedAddPlatform = [...state.AddPlatform];
      updatedAddPlatform.splice(index, 1);

      const updatedSavedPlatforms = [...state.savedPlatforms];
      updatedSavedPlatforms.splice(index, 1);

      return {
        AddPlatform: updatedAddPlatform,
        savedPlatforms: updatedSavedPlatforms,
      };
    }),

  savePlatforms: () =>
    set((state) => {
      const validPlatforms = state.AddPlatform.filter(
        (item) => item.option.trim() !== "" && item.link.trim() !== ""
      );

      if (validPlatforms.length === 0) {
        alert("Fill at least one platform and link.");
        return state;
      }

      return { savedPlatforms: validPlatforms };
    }),
}));

export default AddNewStore;

export const PasswordToggle = create<PasswordToggleTypes>((set) => ({
  showPassword: false,
  toggleShowPassword: () =>
    set((state) => ({ showPassword: !state.showPassword })),
}));

export const useProfileStore = create<ProfileStoreTypes>((set, get) => ({
  firstname: "",
  lastname: "",
  email: "",
  image: "",
  users: [],

  setFirstname: (value) => set({ firstname: value }),
  setLastname: (value) => set({ lastname: value }),
  setEmail: (value) => set({ email: value }),
  setImage: (value) => set({ image: value }),

  handleSave: () => {
    const { firstname, lastname, email, image, users } = get();
    if (!firstname || !lastname || !email || !image) return;

    const newUser = { firstname, lastname, email, image };
    set({ users: [...users, newUser] });

    get().resetFields();
    console.log("User List:", [...users, newUser]);
  },

  resetFields: () =>
    set({
      firstname: "",
      lastname: "",
      email: "",
      image: "",
    }),
}));
