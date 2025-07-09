"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { SplashScreen } from "@/components/loading-screen";
import { useAuthContext } from "../hooks";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  roles?: string[];
};

export default function RoleBasedGuard({ children, roles = [] }: Props) {
  const { loading } = useAuthContext();

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <Container roles={roles}>{children}</Container>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

function Container({ children, roles }: Props) {
  const router = useRouter();

  const { authenticated, user } = useAuthContext();

  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!authenticated) {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname,
      }).toString();

      const href = `/auth/login?${searchParams}`;

      router.replace(href);
    } else if (roles && roles.length > 0) {
      // Check if user has required role
      // This assumes the user object has a role property
      // You may need to adjust this based on your user structure
      const userRole = (user as any)?.role;

      if (!userRole || !roles.includes(userRole)) {
        router.replace("/403"); // Access denied page
      } else {
        setChecked(true);
      }
    } else {
      setChecked(true);
    }
  }, [authenticated, roles, router, user]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}
