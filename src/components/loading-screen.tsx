"use client";

import { Box, CircularProgress, Typography } from "@mui/material";

// ----------------------------------------------------------------------

type Props = {
  message?: string;
};

export function SplashScreen({ message = "Loading..." }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 2,
      }}
    >
      <CircularProgress size={40} />
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
}
