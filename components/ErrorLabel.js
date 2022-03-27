import React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export function ErrorLabel({ isOpen, onClose, message }) {
  return <Collapse in={isOpen}>
    <Alert
      variant="outlined"
      severity="error"
      action={<IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
          onClose();
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>}
      sx={{ mb: 2 }}
    >
      {message}
    </Alert>
  </Collapse>;
}
