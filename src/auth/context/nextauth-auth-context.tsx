"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { createContext, useEffect, useMemo, useState } from "react";

import type { NextAuthContextType } from "../types";

// ----------------------------------------------------------------------

const initialState: NextAuthContextType = {
  user: null,
  method: "nextauth",
  loading: true,
  authenticated: false,
  unauthenticated: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  loginWithGoogle: async () => {},
  session: null,
};

const AuthContext = createContext<NextAuthContextType | null>(null);

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(status === "loading");
  }, [status]);

  const login = async (email: string, password: string) => {
    // This would be used for email/password login if implemented
    console.log("Email/password login not implemented");
  };

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    // This would be used for registration if implemented
    console.log("Registration not implemented");
  };

  const logout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const loginWithGoogle = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  const memoizedValue = useMemo(
    () => ({
      user: session?.user || null,
      method: "nextauth",
      loading,
      authenticated: !!session?.user,
      unauthenticated: !session?.user,
      login,
      register,
      logout,
      loginWithGoogle,
      session,
    }),
    [session, loading]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
 