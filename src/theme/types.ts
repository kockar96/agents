import type { Theme as MuiTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme extends MuiTheme {
    customShadows?: {
      z1: string;
      z4: string;
      z8: string;
      z12: string;
      z16: string;
      z20: string;
      z24: string;
      primary: string;
      info: string;
      secondary: string;
      success: string;
      warning: string;
      error: string;
      card: string;
      dropdown: string;
      dialog: string;
      button: string;
    };
  }
  interface ThemeOptions {
    customShadows?: {
      z1: string;
      z4: string;
      z8: string;
      z12: string;
      z16: string;
      z20: string;
      z24: string;
      primary: string;
      info: string;
      secondary: string;
      success: string;
      warning: string;
      error: string;
      card: string;
      dropdown: string;
      dialog: string;
      button: string;
    };
  }
}
