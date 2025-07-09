"use client";

import merge from "lodash/merge";
import { useMemo } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import type { ThemeOptions } from "@mui/material/styles";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

// system
import { customShadows } from "./custom-shadows";
import { componentsOverrides } from "./overrides";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  mode?: "light" | "dark";
};

export default function ThemeProvider({ children, mode = "light" }: Props) {
  const memoizedValue = useMemo(
    () => ({
      palette: {
        ...palette(mode),
      },
      customShadows: {
        ...customShadows(mode),
      },
      direction: "ltr",
      shadows: shadows(mode),
      shape: { borderRadius: 8 },
      typography,
    }),
    [mode]
  );

  const theme = createTheme(memoizedValue as unknown as ThemeOptions);

  theme.components = merge(componentsOverrides(theme));

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
