import { TextField } from "@mui/material";
import { useState } from "react";

function App() {
  const [value, setValue] = useState('');

  return (<TextField
    label="DOB"
    type="date"
    defaultValue={value || ''}
    autoComplete="off"
    name="dob-field"
    onChange={(e) => setValue(e.target.value)}
    inputProps={{
      // Safari-specific attributes to prevent auto-fill
      'data-form-type': 'other',
      'data-lpignore': 'true',
      'webkitdirectory': '',
    }}
  />);
}

export default App
