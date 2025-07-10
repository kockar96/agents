import { Box, Typography } from "@mui/material";

export default function EmptyContent({ title }: { title: string }) {
  return (
    <Box sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h6">{title}</Typography>
    </Box>
  );
}
