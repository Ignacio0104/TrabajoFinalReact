import React from 'react'
import { useHistory,useLocation } from 'react-router-dom'

export default function NotFoundPage() {

  const history = useHistory();

  const navigateTo = (path)=>{
    history.push(path);
  }
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <button onClick={()=>navigateTo("/")}>Go back to home</button>
    </div>
  )
}
