import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';

function App() {
  const [value, setValue] = useState<Dayjs | null>(null);

  return (<LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
      <DatePicker
        label="DOB"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </DemoContainer>
  </LocalizationProvider>);
}

export default App
