import { Box, TextField } from '@mui/material'
import React from 'react'

const LoginPage = () => {
  return (<>
  <Box className="" sx={{background:""}}>
  <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
  </Box> 
  login
  </>)
}

export default LoginPage