import { TextField } from "@mui/material";
import { useState } from "react";

function App() {
  const [value, setValue] = useState('');

  return (<TextField
    label="DOB"
    type="date"
    value={value}
    autoComplete="off"
    onChange={(e) => setValue(e.target.value)}
  />);
}

export default App
