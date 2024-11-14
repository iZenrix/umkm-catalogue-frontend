import React from 'react'
import Alert from '@mui/material/Alert';

const AlertComponent = ({status, message}) => {
  return (
    <Alert severity={status}>{message}</Alert>
  )
}

export default AlertComponent