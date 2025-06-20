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
