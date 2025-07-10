import { Box } from "@mui/material";

export default function Label({ children }: { children: React.ReactNode }) {
  return <Box component="span">{children}</Box>;
}
