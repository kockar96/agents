import { forwardRef } from "react";
import Box from "@mui/material/Box";

// ----------------------------------------------------------------------

type Props = {
  src: string;
  sx?: object;
};

const SvgColor = forwardRef<HTMLSpanElement, Props>(
  ({ src, sx, ...other }, ref) => (
    <Box
      component="span"
      className="svg-color"
      ref={ref}
      sx={{
        width: 24,
        height: 24,
        display: "inline-block",
        bgcolor: "currentColor",
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
      {...other}
    />
  )
);

SvgColor.displayName = "SvgColor";

export { SvgColor };
