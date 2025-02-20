import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export function CheckboxBasic({ id, isMobile }) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      id={id}
      inputProps={{ "aria-label": "controlled" }}
      sx={{cursor: isMobile && 'default'}}
    />
  );
}
