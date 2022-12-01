import React from 'react'
import Button from "@mui/material/Button/index"
import Copyright from '../../components/pure/Copyright'
import { useHistory } from 'react-router-dom'

export default function DashBoardPage() {

    const history= useHistory();

    const logout = ()=>{
        history.push("/login");
    }
  return (
    <div>
      <Button variant="contained" onClick={logout}>Logout</Button>
      <Copyright></Copyright>
    </div>
  )
}
