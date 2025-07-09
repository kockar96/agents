import merge from "lodash/merge";

import type { Theme } from "@mui/material/styles";

import { button } from "./components/button";
import { card } from "./components/card";
import { cssBaseline } from "./components/css-baseline";
import { divider } from "./components/divider";
import { filledInput } from "./components/filled-input";
import { formHelperText } from "./components/form-helper-text";
import { formLabel } from "./components/form-label";
import { inputBase } from "./components/input-base";
import { textField } from "./components/textfield";
import { typography } from "./components/typography";
import { defaultProps } from "./default-props";

// ----------------------------------------------------------------------

export function componentsOverrides(theme: Theme) {
  const components = merge(
    defaultProps(theme),
    //
    card(theme),
    button(theme),
    textField(theme),
    typography(theme),
    cssBaseline(theme),
    divider(theme),
    formHelperText(theme),
    formLabel(theme),
    filledInput(theme),
    inputBase(theme)
  );

  return components;
}
