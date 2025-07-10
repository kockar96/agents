import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import type { BreadcrumbsProps } from "./types";

export default function CustomBreadcrumbs({
  links,
  ...other
}: BreadcrumbsProps) {
  return (
    <Breadcrumbs {...other}>
      {links.map((link, idx) =>
        link.href ? (
          <Link key={idx} href={link.href} passHref legacyBehavior>
            <a>{link.name}</a>
          </Link>
        ) : (
          <Typography key={idx}>{link.name}</Typography>
        )
      )}
    </Breadcrumbs>
  );
}
