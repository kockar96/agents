export type ThemeMode = "light" | "dark" | "system";
export type ThemeDirection = "ltr" | "rtl";
export type ThemeColorPresets =
  | "default"
  | "cyan"
  | "purple"
  | "blue"
  | "orange"
  | "red";
export type ThemeContrast = "default" | "bold";

export interface Settings {
  themeMode: ThemeMode;
  themeDirection: ThemeDirection;
  themeColorPresets: ThemeColorPresets;
  themeContrast: ThemeContrast;
}
