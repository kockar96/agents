import type { Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

export function button(theme: Theme) {
  const lightMode = theme.palette.mode === "light";

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 700,
          textTransform: "unset",
          boxShadow: "none",
          paddingLeft: 16,
          paddingRight: 16,
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
          fontSize: 15,
        },
        containedInherit: {
          color: lightMode
            ? theme.palette.common.white
            : theme.palette.grey[800],
          backgroundColor: lightMode
            ? theme.palette.grey[800]
            : theme.palette.common.white,
          "&:hover": {
            backgroundColor: lightMode
              ? theme.palette.grey[700]
              : theme.palette.grey[400],
          },
        },
        containedPrimary: {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.grey[800],
          "&:hover": {
            backgroundColor: theme.palette.grey[700],
          },
        },
        containedSecondary: {
          boxShadow: theme.customShadows?.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
            borderColor: "currentColor",
            boxShadow: "0 0 0 0.5px currentColor",
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
