import { Popover } from "@mui/material";
import type { CustomPopoverProps } from "./types";

export default function CustomPopover(props: CustomPopoverProps) {
  return <Popover {...props} />;
}
