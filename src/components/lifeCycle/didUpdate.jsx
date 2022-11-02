import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {
    componentDidUpdate(){
        console.log("Comportamiento cuando el componente recibe nuevos props o cambia en su estado privado");
    }
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}

export const DidUpdateHook=() =>{
    useEffect(() => {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambia en su estado privado"); 
    }) //Que se ejecute todas las veces
    
  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  ) 
}
