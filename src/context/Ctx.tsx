import { createContext } from "react";

export interface CtxType {
  currentTitle: any; // Replace 'any' with your actual type
  setCurrentTitle: (title: any) => void;
  currentTitleToggle: boolean;
  setCurrentTitleToggle: (toggle: boolean) => void;
  // Add other context values as needed
}

const Ctx = createContext<CtxType | null>(null);

export default Ctx;