import Box from "@mui/material/Box";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  sx?: object;
};

export default function Scrollbar({ children, sx, ...other }: Props) {
  return (
    <Box
      sx={{
        overflowY: "auto",
        overflowX: "hidden",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
