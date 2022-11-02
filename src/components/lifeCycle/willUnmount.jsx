import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {
    componentWillUnmount(){
        console.log("Comportamiento cuando el componente esta por desmontarse");
    }
  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    )
  }
}

export const WillUnmountHook=() =>{
    useEffect(() => {
        return()=>{ 
            console.log("Comportamiento cuando el componente esta por desmontarse"); 
        }
    },[]) 
    
  return (
    <div>
      <h1>WillUnmount</h1>
    </div>
  ) 
}
