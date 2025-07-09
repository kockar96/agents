import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import { AuthProvider } from "@/auth/context/nextauth-auth-context";
import TopLoadingBar from "@/components/top-loading-bar";
import { auth } from "@/server/auth";
import ThemeProvider from "@/theme";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Sinker",
  description: "Sinker application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <ThemeProvider>
            <TopLoadingBar />
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
