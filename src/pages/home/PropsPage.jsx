import React from 'react'
import { useLocation } from 'react-router-dom'

export default function PropsPage() {

    const location = useLocation();

    console.log(location.state.online); //state sent
    console.log(location.search); //Query params sent
  return (
    <div>
        <h1> State : {location.state.online ? "The user is online" : "The user if offline"} </h1>      
    </div>
  )
}
