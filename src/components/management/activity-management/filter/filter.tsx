import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
 let newTime:any;
export default function MaterialUIPickers() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
     if(newValue!=null){
        newTime=newValue
    // console.log(new Date(newValue.format()).toISOString().slice(0, 19).replace('T', ' '));
    }
    setValue(newValue);
    if(value!=null){
    console.log(new Date(value.format()).toISOString().slice(0, 19).replace('T', ' '));
    }
    
  };
  const handlecheck=()=>{
    if(value!=null){
    console.log(new Date(value.format()).toISOString().slice(0, 19).replace('T', ' '));
  }
}
React.useEffect(()=>{
setValue(newTime)
if(value!=null){
console.log(new Date(value.format()).toISOString().slice(0, 19).replace('T', ' '));
}
},[value])

  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
    <button onClick={handlecheck} >Click</button>
    </div>
    
  );
}