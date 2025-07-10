import type { Theme } from "@mui/material/styles";
import { type SvgIconProps } from "@mui/material/SvgIcon";

// ----------------------------------------------------------------------

export function defaultProps(theme: Theme) {
  return {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "small" as const,
      } as SvgIconProps,
    },
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
      },
    },
    MuiButton: {
      defaultProps: {
        color: "inherit",
        disableElevation: true,
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
        subheaderTypographyProps: {
          variant: "body2",
          marginTop: theme.spacing(0.5),
        },
      },
    },
    MuiDialogActions: {
      defaultProps: {
        disableSpacing: true,
      },
    },
    MuiFab: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
        variant: "rounded",
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        component: "div",
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        iconPosition: "start",
      },
    },
    MuiTabs: {
      defaultProps: {
        textColor: "inherit",
        variant: "scrollable",
        allowScrollButtonsMobile: true,
      },
    },
    MuiTablePagination: {
      defaultProps: {
        backIconButtonProps: {
          size: "small",
        },
        nextIconButtonProps: {
          size: "small",
        },
      },
    },
    MuiSlider: {
      defaultProps: {
        size: "small",
      },
    },
  };
}
