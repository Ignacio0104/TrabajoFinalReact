import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(){
        console.log("Comportamiento antes de que el componente sea anadido al DOM");
    }
  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}

export const DidMountHook=() =>{
    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea anadido al DOM");   
    }, []) //Solo una vez
    
  return (
    <div>
      <h1>DidMount</h1>
    </div>
  ) 
}

