import type { Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export function defaultProps(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiChip: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiRadio: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiRating: {
      defaultProps: {
        color: "warning",
      },
    },
    MuiSlider: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiLinearProgress: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiAccordionSummary: {
      defaultProps: {
        sx: {
          "&.Mui-expanded": {
            minHeight: "auto",
          },
        },
      },
    },
    MuiAccordionDetails: {
      defaultProps: {
        sx: {
          pt: 0,
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        PaperProps: {
          sx: {
            boxShadow: (theme: Theme) => theme.customShadows?.z24,
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiToolbar: {
      defaultProps: {
        sx: {
          "@media (min-width: 600px)": {
            minHeight: 64,
          },
        },
      },
    },
    MuiFab: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiSpeedDial: {
      defaultProps: {
        FabProps: {
          color: "primary",
        },
      },
    },
    MuiSpeedDialAction: {
      defaultProps: {
        FabProps: {
          sx: {
            width: 40,
            height: 40,
          },
        },
      },
    },
    MuiBreadcrumbs: {
      defaultProps: {
        sx: {
          "& .MuiBreadcrumbs-separator": {
            mx: 1,
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiListItemButton: {
      defaultProps: {
        sx: {
          borderRadius: 1,
        },
      },
    },
    MuiListItemIcon: {
      defaultProps: {
        sx: {
          minWidth: "auto",
          mr: 2,
        },
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          typography: "body2",
        },
        secondaryTypographyProps: {
          typography: "caption",
        },
      },
    },
    MuiListItemAvatar: {
      defaultProps: {
        sx: {
          minWidth: "auto",
          mr: 2,
        },
      },
    },
    MuiAvatar: {
      defaultProps: {
        sx: {
          width: 40,
          height: 40,
        },
      },
    },
    MuiAvatarGroup: {
      defaultProps: {
        sx: {
          "& .MuiAvatar-root": {
            border: (theme: Theme) =>
              `solid 2px ${theme.palette.background.paper}`,
          },
        },
      },
    },
    MuiDivider: {
      defaultProps: {
        sx: {
          borderStyle: "dashed",
        },
      },
    },
    MuiBackdrop: {
      defaultProps: {
        sx: {
          backgroundColor: (theme: Theme) =>
            alpha(theme.palette.grey[900], 0.8),
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        severity: "info",
      },
    },
    MuiAlertTitle: {
      defaultProps: {
        sx: {
          mb: 0.5,
        },
      },
    },
  };
}
