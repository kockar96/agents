import { alpha } from "@mui/material/styles";

import { grey } from "./palette";

// ----------------------------------------------------------------------

const LIGHT_MODE = grey[500];

const DARK_MODE = "#000000";

export function shadows(mode: "light" | "dark") {
  const color = mode === "light" ? LIGHT_MODE : DARK_MODE;

  const transparent = alpha(color, 0.16);

  return {
    custom: `-40px 40px 80px -8px ${alpha(color, 0.24)}`,
    // card
    card: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(
      color,
      0.12
    )}`,
    dropdown: `0 0 2px 0 ${alpha(color, 0.24)}, -20px 20px 40px -4px ${alpha(
      color,
      0.24
    )}`,
    dialog: `-40px 40px 80px -8px ${alpha(color, 0.24)}`,
    // button
    button: `0 8px 16px 0 ${transparent}`,
    // text
    text: `0 0 2px 0 ${alpha(color, 0.7)}`,
    // z1: z1,
    z1: `0 1px 2px 0 ${alpha(color, 0.3)}`,
    z8: `0 8px 16px 0 ${transparent}`,
    z12: `0 12px 24px -4px ${transparent}`,
    z16: `0 16px 32px -4px ${transparent}`,
    z20: `0 20px 40px -4px ${transparent}`,
    z24: `0 24px 48px 0 ${transparent}`,
    //
    primary: `0 8px 16px 0 ${alpha("#00A76F", 0.24)}`,
    info: `0 8px 16px 0 ${alpha("#00B8D9", 0.24)}`,
    secondary: `0 8px 16px 0 ${alpha("#8E33FF", 0.24)}`,
    success: `0 8px 16px 0 ${alpha("#22C55E", 0.24)}`,
    warning: `0 8px 16px 0 ${alpha("#FFAB00", 0.24)}`,
    error: `0 8px 16px 0 ${alpha("#FF5630", 0.24)}`,
    //
    cardHover: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(
      color,
      0.12
    )}`,
    dialogHover: `-40px 40px 80px -8px ${alpha(color, 0.24)}`,
  };
}
