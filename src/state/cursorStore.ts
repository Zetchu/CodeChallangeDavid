import { create } from 'zustand';

type CursorState = {
  isActive: boolean;
  text: string;
  setActive: (active: boolean) => void;
  setText: (text: string) => void;
};

export const useCursorStore = create<CursorState>((set) => ({
  isActive: false,
  text: '',
  setActive: (active) => set({ isActive: active }),
  setText: (text) => set({ text }),
}));
