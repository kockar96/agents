import { Autocomplete, TextField } from "@mui/material";

export default function CountrySelect({
  countries,
  ...props
}: {
  countries: string[];
}) {
  return (
    <Autocomplete
      options={countries}
      renderInput={(params) => <TextField {...params} label="Country" />}
      {...props}
    />
  );
}
