import { createContext } from "react";

interface ThemeContextState {
  bg: string;
  setBg: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext({
  bg: "red",
} as ThemeContextState);

export default ThemeContext;
