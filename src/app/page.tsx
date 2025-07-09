import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Stack
        spacing={3}
        sx={{
          py: 15,
          textAlign: "center",
        }}
      >
        <Typography variant="h1" sx={{ color: "text.primary" }}>
          Welcome to{" "}
          <Typography
            component="span"
            variant="h1"
            sx={{
              color: "primary.main",
            }}
          >
            Sinker
          </Typography>
        </Typography>

        <Typography
          variant="h4"
          sx={{ color: "text.secondary", fontWeight: "normal" }}
        >
          A modern application built with Next.js, NextAuth, and Material-UI
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            component={Link}
            href="/auth/login"
            variant="contained"
            size="large"
            sx={{
              px: 3,
              py: 1.5,
            }}
          >
            Sign In
          </Button>

          <Button
            component={Link}
            href="/dashboard"
            variant="outlined"
            size="large"
            sx={{
              px: 3,
              py: 1.5,
            }}
          >
            Dashboard
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
