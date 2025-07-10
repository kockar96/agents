import Box from "@mui/material/Box";

// ----------------------------------------------------------------------

type Props = {
  children: string;
  simple?: boolean;
  sx?: object;
};

export default function Markdown({ children, simple, sx, ...other }: Props) {
  return (
    <Box
      sx={{
        "& h1": { typography: "h1" },
        "& h2": { typography: "h2" },
        "& h3": { typography: "h3" },
        "& h4": { typography: "h4" },
        "& h5": { typography: "h5" },
        "& h6": { typography: "h6" },
        "& p": { typography: "body1" },
        "& ul": { typography: "body1" },
        "& ol": { typography: "body1" },
        ...sx,
      }}
      {...other}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
