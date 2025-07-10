import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import { AuthProvider } from "@/auth/context/nextauth-auth-context";
import TopLoadingBar from "@/components/top-loading-bar";
import { auth } from "@/server/auth";
import ThemeProvider from "@/theme";
import { SettingsDrawer, SettingsProvider } from "src/components/settings";

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
          <SettingsProvider
            defaultSettings={{
              themeMode: "light", // 'light' | 'dark'
              themeDirection: "ltr", //  'rtl' | 'ltr'
              themeContrast: "default", // 'default' | 'bold'
              themeLayout: "vertical", // 'vertical' | 'horizontal' | 'mini'
              themeColorPresets: "default", // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
              themeStretch: false,
            }}
          >
            <ThemeProvider>
              <TopLoadingBar />
              <AuthProvider>
                <SettingsDrawer />
                {children}
              </AuthProvider>
            </ThemeProvider>
          </SettingsProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
