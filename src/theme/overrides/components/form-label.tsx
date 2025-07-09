import { inputLabelClasses } from "@mui/material/InputLabel";
import type { Theme } from "@mui/material/styles";

export function formLabel(theme: Theme) {
  return {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.disabled,
          fontWeight: 400,
          [`&.${inputLabelClasses.focused}`]: {
            color: theme.palette.text.primary,
            fontWeight: 600,
          },
          [`&.${inputLabelClasses.error}`]: {
            color: theme.palette.error.main,
          },
          [`&.${inputLabelClasses.disabled}`]: {
            color: theme.palette.text.disabled,
          },
        },
      },
    },
  };
}
