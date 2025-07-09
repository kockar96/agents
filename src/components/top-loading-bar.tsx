"use client";

import { Box, LinearProgress } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

export default function TopLoadingBar() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    // Simulate loading on route change
    handleStart();
    const timer = setTimeout(handleComplete, 500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!loading) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      <LinearProgress
        sx={{
          height: 3,
          "& .MuiLinearProgress-bar": {
            backgroundColor: "primary.main",
          },
        }}
      />
    </Box>
  );
}
