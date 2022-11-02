/*Ejemplo del hook useState*/
import React, {useState} from 'react'

export default function Ejemplo1() {

    //Valor inicial
    const valorInicial = 0;

    //Valor inicial persona

    const personaInicial = {
        nombre:"Nacho",
        email: "ignacio@gmail.com"
    }

    //Valor inicial y persona inicial sean parte del estado del componente

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador(){
        setContador(contador+1);
    }

    function actualizarPersona(){
        setPersona(
            {
                nombre:"Pedro",
                email: "pedro@gmail.com"
            }
        )
    }

  return (
    <div>
      <h1> Ejemplo de useState</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA:</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      <div>
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <button onClick={actualizarPersona}>Actualizar Persona</button>
      </div>
    </div>
  )
}
