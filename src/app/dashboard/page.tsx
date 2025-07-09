"use client";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { AuthGuard } from "@/auth/guard";
import { useAuthContext } from "@/auth/hooks";

// ----------------------------------------------------------------------

function DashboardContent() {
  const { user, logout } = useAuthContext();

  const handleSignOut = async () => {
    await logout();
  };

  return (
    <Container maxWidth="lg">
      <Stack
        spacing={3}
        sx={{
          py: 5,
        }}
      >
        <Typography variant="h3" sx={{ color: "text.primary" }}>
          Dashboard
        </Typography>

        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h6">
                Welcome back, {user?.name || user?.email}!
              </Typography>

              <Typography variant="body1" color="text.secondary">
                You are successfully logged in to your account.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button component={Link} href="/" variant="outlined">
                  Go Home
                </Button>

                <Button
                  onClick={handleSignOut}
                  variant="contained"
                  color="error"
                >
                  Sign Out
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  );
}
 