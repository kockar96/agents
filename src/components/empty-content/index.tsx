import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  description?: string;
  filled?: boolean;
  action?: React.ReactNode;
  sx?: object;
};

export default function EmptyContent({
  title,
  description,
  action,
  filled,
  sx,
  ...other
}: Props) {
  return (
    <Stack
      flexGrow={1}
      alignItems="center"
      justifyContent="center"
      sx={{
        px: 3,
        py: 10,
        ...(filled && {
          borderRadius: 2,
          bgcolor: "background.neutral",
        }),
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ width: 1, maxWidth: 480 }}>
        <Box
          sx={{
            width: 1,
            height: 200,
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Iconify icon="solar:box-bold" width={64} height={64} />
        </Box>

        {title && (
          <Typography variant="h6" sx={{ mb: 1, textAlign: "center" }}>
            {title}
          </Typography>
        )}

        {description && (
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            {description}
          </Typography>
        )}

        {action && <Box sx={{ mt: 3 }}>{action}</Box>}
      </Box>
    </Stack>
  );
}
