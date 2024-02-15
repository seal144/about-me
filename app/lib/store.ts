import { create } from 'zustand';

type HamburgerMenuStore = {
  isExtended: boolean;
  toggleIsExtended: () => void;
  hideMenu: () => void;
};

export const useHamburgerMenuStore = create<HamburgerMenuStore>()((set) => ({
  isExtended: false,
  toggleIsExtended: () => set((state) => ({ isExtended: !state.isExtended })),
  hideMenu: () => set(() => ({ isExtended: false })),
}));
