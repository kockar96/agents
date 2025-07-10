import { Box } from "@mui/material";

export default function Scrollbar({ children }: { children: React.ReactNode }) {
  return <Box sx={{ overflow: "auto" }}>{children}</Box>;
}
