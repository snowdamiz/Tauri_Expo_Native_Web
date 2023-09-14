import { create } from 'zustand'

export const useSystemStore = create((set) => ({
  platform: '',
  themeLoading: true,
  setPlatform: (platform) => set({ platform }),
  setThemeLoading: (themeLoading) => set({ themeLoading }),
}))