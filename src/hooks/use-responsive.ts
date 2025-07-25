import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// ----------------------------------------------------------------------

export function useResponsive(query: string, start?: string, end?: string) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start || ""));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start || ""));
  const mediaBetween = end
    ? useMediaQuery(theme.breakpoints.between(start || "", end))
    : null;
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start || ""));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  return mediaOnly;
}

// ----------------------------------------------------------------------

export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null as string | null) || "xs"
  );
}
