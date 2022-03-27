import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export function DateSelector({ label, value, onChange, setValue }) {
  return <div className="date-input">
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          onChange();
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />} />
    </LocalizationProvider>
  </div>;
}
