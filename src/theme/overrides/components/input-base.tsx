import { inputBaseClasses } from "@mui/material/InputBase";
import type { Theme } from "@mui/material/styles";

export function inputBase(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          [`&.${inputBaseClasses.disabled}`]: {
            "& svg": {
              color: theme.palette.text.disabled,
            },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
  };
}
