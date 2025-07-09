import type { Theme } from "@mui/material/styles";

export function formHelperText(theme: Theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(1),
          color: theme.palette.text.secondary,
        },
      },
    },
  };
}
