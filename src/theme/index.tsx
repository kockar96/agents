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
};

export default function ThemeProvider({ children }: Props) {
  const memoizedValue = useMemo(
    () => ({
      palette: {
        ...palette("light"),
      },
      customShadows: {
        ...customShadows("light"),
      },
      direction: "ltr",
      shadows: shadows("light"),
      shape: { borderRadius: 8 },
      typography,
    }),
    []
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
