import { Box, Typography } from "@mui/material";

export default function SearchNotFound({ query }: { query: string }) {
  return (
    <Box sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h6">No results found for "{query}"</Typography>
    </Box>
  );
}
