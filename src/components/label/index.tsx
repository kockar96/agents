import Chip from "@mui/material/Chip";
import { alpha, useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
  variant?: "filled" | "outlined" | "soft";
  sx?: object;
};

export default function Label({
  children,
  color = "default",
  variant = "soft",
  sx,
  ...other
}: Props) {
  const theme = useTheme();

  const isLight = theme.palette.mode === "light";

  const lightStyle = {
    ...(color === "default" && {
      backgroundColor: alpha(theme.palette.grey[500], 0.16),
      color: theme.palette.grey[800],
    }),
    ...(color === "primary" && {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
      color: theme.palette.primary.dark,
    }),
    ...(color === "secondary" && {
      backgroundColor: alpha(theme.palette.secondary.main, 0.16),
      color: theme.palette.secondary.dark,
    }),
    ...(color === "info" && {
      backgroundColor: alpha(theme.palette.info.main, 0.16),
      color: theme.palette.info.dark,
    }),
    ...(color === "success" && {
      backgroundColor: alpha(theme.palette.success.main, 0.16),
      color: theme.palette.success.dark,
    }),
    ...(color === "warning" && {
      backgroundColor: alpha(theme.palette.warning.main, 0.16),
      color: theme.palette.warning.dark,
    }),
    ...(color === "error" && {
      backgroundColor: alpha(theme.palette.error.main, 0.16),
      color: theme.palette.error.dark,
    }),
  };

  const darkStyle = {
    ...(color === "default" && {
      backgroundColor: theme.palette.grey[500],
      color: theme.palette.grey[900],
    }),
    ...(color === "primary" && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    }),
    ...(color === "secondary" && {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    }),
    ...(color === "info" && {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
    }),
    ...(color === "success" && {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
    }),
    ...(color === "warning" && {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
    }),
    ...(color === "error" && {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    }),
  };

  return (
    <Chip
      label={children}
      variant={variant}
      sx={{
        ...(isLight ? lightStyle : darkStyle),
        ...sx,
      }}
      {...other}
    />
  );
}
