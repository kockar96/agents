import { Icon } from "@iconify/react";
import { forwardRef } from "react";

import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";

import type { IconifyProps } from "./types";

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  icon: IconifyProps;
}

const Iconify = forwardRef<SVGElement, Props>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
);

export default Iconify;
