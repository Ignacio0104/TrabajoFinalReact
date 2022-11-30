import React from 'react'
import { useHistory,useLocation } from 'react-router-dom'

export default function ProfilePage(props) {

    const history= useHistory();

    const navigateTo = (path)=>{
        history.push(path)
    }

    const goBack = ()=>{
        history.goBack();
    }
  return (
    <div>
      <h1>Your profile </h1>
      <button onClick={()=>navigateTo("./tasks")}>Tasks</button>
      <button onClick={goBack}> Go Back </button>
    </div>
  )
}
