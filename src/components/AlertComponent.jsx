import React, {useEffect, useState} from 'react'
import Alert from '@mui/material/Alert';
import { Popover } from '@mui/material';

const AlertComponent = ({ status, message, isPopup, handleClearAlert }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  // Show alert when component mounts
  useEffect(() => {
    setAnchorEl(document.body); // Attach popover to the body
    setOpen(true);

    // Close the popover after 2 seconds
    const timer = setTimeout(() => {
      setOpen(false);
      handleClearAlert(null)
    }, 2000);
    return () => clearTimeout(timer);
  }, [status, message]);

  return (
    <>
      {
        isPopup ? (
          <Alert severity={status}>{message}</Alert>
        ) : (
          <Popover
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Alert severity={status}>{message}</Alert>
          </Popover>
        )
      }
    </>
  )
}

export default AlertComponent