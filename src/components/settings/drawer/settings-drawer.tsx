"use client";

import { useSettingsContext } from "../context/settings-context";

export function SettingsDrawer() {
  const { onToggle } = useSettingsContext();
  return (
    <div>
      <button onClick={onToggle}>Toggle Theme</button>
    </div>
  );
}
