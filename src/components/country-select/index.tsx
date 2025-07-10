import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// ----------------------------------------------------------------------

type Props = {
  placeholder?: string;
  fullWidth?: boolean;
  multiple?: boolean;
  value?: string | string[];
  onChange?: (event: any, newValue: string | string[]) => void;
  options?: string[];
  getOptionLabel?: (option: string) => string;
};

export default function CountrySelect({
  placeholder,
  fullWidth,
  multiple,
  value,
  onChange,
  options = [],
  getOptionLabel = (option: string) => option,
}: Props) {
  return (
    <Autocomplete
      fullWidth={fullWidth}
      multiple={multiple}
      options={options}
      value={value}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextField {...params} placeholder={placeholder} />
      )}
    />
  );
}
