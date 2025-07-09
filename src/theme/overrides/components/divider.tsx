import type { Theme } from "@mui/material/styles";

export function divider(theme: Theme) {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderStyle: "dashed",
          borderColor: theme.palette.divider,
          borderWidth: 1,
        },
      },
    },
  };
}
