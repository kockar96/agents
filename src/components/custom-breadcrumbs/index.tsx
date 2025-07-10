"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";

import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

type TLink = {
  href?: string;
  name: string;
  icon?: React.ReactElement;
};

type Props = {
  links: TLink[];
  action?: React.ReactNode;
  heading?: string;
  moreLink?: string[];
  sx?: object;
};

export default function CustomBreadcrumbs({
  links,
  action,
  heading,
  moreLink = [],
  sx,
  ...other
}: Props) {
  const lastLink = links[links.length - 1].name;

  return (
    <Box sx={{ ...sx }}>
      <Stack direction="row" alignItems="center">
        <Box sx={{ flexGrow: 1 }}>
          {/* HEADING */}
          {heading && (
            <Typography variant="h4" gutterBottom>
              {heading}
            </Typography>
          )}

          {/* BREADCRUMBS */}
          {!!links.length && (
            <Stack direction="row" alignItems="center" spacing={0.5}>
              {links.map((link) => {
                const { name, href, icon } = link;

                const lastItem = link.name === lastLink;

                const renderLink = (
                  <LinkItem
                    key={name}
                    link={link}
                    lastItem={lastItem}
                    disabled={lastItem}
                  />
                );

                const renderIcon = icon && (
                  <Box
                    component="span"
                    sx={{
                      ml: 0.5,
                      display: "flex",
                      "& svg": { width: 16, height: 16 },
                    }}
                  >
                    {icon}
                  </Box>
                );

                return (
                  <div
                    key={name}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {renderIcon}
                    {renderLink}
                  </div>
                );
              })}
            </Stack>
          )}
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Stack>

      {/* MORE LINK */}
      {!!moreLink.length && (
        <Box sx={{ mt: 3 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2">More:</Typography>

            {moreLink.map((href) => (
              <Link
                key={href}
                component={RouterLink}
                href={href}
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {href}
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

type LinkItemProps = {
  link: TLink;
  lastItem: boolean;
  disabled?: boolean;
};

function LinkItem({ link, lastItem, disabled }: LinkItemProps) {
  const { name, href, icon } = link;

  const styles = {
    typography: "body2",
    alignItems: "center",
    color: "text.primary",
    display: "inline-flex",
    ...(lastItem && {
      color: "text.primary",
    }),
    ...(disabled && {
      cursor: "default",
    }),
  };

  const renderContent = (
    <>
      {icon && <Box sx={{ mr: 0.5, display: "flex" }}>{icon}</Box>}
      {name}
    </>
  );

  if (lastItem) {
    return <Typography sx={styles}>{renderContent}</Typography>;
  }

  return (
    <Link component={RouterLink} href={href || "#"} sx={styles}>
      {renderContent}
    </Link>
  );
}
