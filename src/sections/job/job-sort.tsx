import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import CustomPopover, { usePopover } from "src/components/custom-popover";
import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

type Props = {
  sort: string;
  onSort: (newValue: string) => void;
  sortOptions: {
    value: string;
    label: string;
  }[];
};

export default function JobSort({ sort, onSort, sortOptions }: Props) {
  const popover = usePopover();

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        onClick={popover.onOpen}
        endIcon={
          <Iconify
            icon={
              popover.open
                ? "eva:arrow-ios-upward-fill"
                : "eva:arrow-ios-downward-fill"
            }
          />
        }
        sx={{ fontWeight: "fontWeightSemiBold" }}
      >
        Sort By:
        <Box
          component="span"
          sx={{
            ml: 0.5,
            fontWeight: "fontWeightBold",
            textTransform: "capitalize",
          }}
        >
          {sort}
        </Box>
      </Button>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        sx={{ width: 140 }}
      >
        {sortOptions.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === sort}
            onClick={() => {
              popover.onClose();
              onSort(option.value);
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
