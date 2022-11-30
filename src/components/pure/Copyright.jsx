import React from 'react'
import Link from "@mui/material/Link";
import { Typography } from '@mui/material';


export default function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="GrayText" align="center">
        {"Copyright (C) "}
        <Link color="inherit" href="https://google.com">
            Google
        </Link>
        { " " }
        { new Date().getFullYear() }
      </Typography>
    </div>
  )
}
