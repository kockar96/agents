import { forwardRef, useState } from "react";

import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  sx?: object;
  open?: boolean;
  onClose?: () => void;
  arrow?: string;
};

export const usePopover = () => {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const onClose = () => {
    setOpen(null);
  };

  return {
    open: Boolean(open),
    anchorEl: open,
    onOpen,
    onClose,
  };
};

const CustomPopover = forwardRef<HTMLDivElement, Props>(
  ({ children, arrow = "top-right", sx, ...other }, ref) => {
    return (
      <Popover
        ref={ref}
        {...other}
        sx={{
          "& .MuiPopover-paper": {
            boxShadow: (theme) => theme.customShadows.dropdown,
            borderRadius: 1.5,
            ...sx,
          },
        }}
      >
        {arrow === "top-right" && (
          <Box
            sx={{
              top: 8,
              right: 16,
              width: 8,
              height: 8,
              position: "absolute",
              transform: "rotate(-45deg)",
              bgcolor: "background.paper",
              borderLeft: (theme) => `solid 1px ${theme.palette.divider}`,
              borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
            }}
          />
        )}

        {children}
      </Popover>
    );
  }
);

CustomPopover.displayName = "CustomPopover";

export default CustomPopover;
