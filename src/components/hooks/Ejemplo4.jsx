import React, { Component } from 'react'

export default function Ejemplo4(props){
  return (
    <div>
      <h1>Ejemplo de children props</h1>
      <h2>Nombre {props.nombre}</h2>
      {/*//Props.children pintara por defecto lo que se encuentre entre las etiquetas de apertura y 
      cierre de este compontente desde el componente de orden superior*/}
      { props.children}     
    </div>
  )
}
