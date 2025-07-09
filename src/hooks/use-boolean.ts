import { useCallback, useState } from "react";

// ----------------------------------------------------------------------

export function useBoolean(defaultValue?: boolean) {
  const [value, setValue] = useState(!!defaultValue);

  const onTrue = useCallback(() => {
    setValue(true);
  }, []);

  const onFalse = useCallback(() => {
    setValue(false);
  }, []);

  const onToggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setBoolean = useCallback((newValue: boolean) => {
    setValue(newValue);
  }, []);

  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue: setBoolean,
  };
}
