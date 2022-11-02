import React, {useState,useRef,useEffect} from 'react'

export default function Ejemplo2() {
    const [contadorUno, setContadorUno] = useState(0);
    const [contadorDos, setContadorDos] = useState(0);

    //Crear referencia con useRef
    const miRef = useRef();

    function incrementarUno()
    {
        setContadorUno(contadorUno + 1);
    }

    function incrementarDos()
    {
        setContadorDos(contadorDos + 1);
    }

   //Caso 1 -> ejecutra siempre un snippet de codigo
    //Cada vez que haya un cambio en el estado del componente se ejectura aquello que este dentro del useEffect()

    /*useEffect(() => {
      console.log("Cambio en el estado del componente");
      console.log("Motrando referencia al elemento del DOM");
      console.log(miRef);
    },)*/

    //Caso 2-> Ejectutar solo cuando cambio el contador uno
    /*useEffect(() => {
      console.log("Cambio en el estado del componente");
      console.log("Motrando referencia al elemento del DOM");
      console.log(miRef);
    },[contadorUno])*/
    

    //Caso 3-> Ejectutar solo cuando cambio el contador uno o contador dos
    useEffect(() => {
      console.log("Cambio en el estado del componente");
      console.log("Motrando referencia al elemento del DOM");
      console.log(miRef);
    },[contadorUno,contadorDos])
    
  return (
    <div>
    <h1>Ejemplu useState, useRef y useEffect</h1>
    <h2>CONTADOR 1: {contadorUno}</h2> 
    <h2>CONTADOR 2: {contadorDos}</h2> 
    <h4 ref={miRef}>Ejemplo elemento referenciado</h4>
    <div>
        <button onClick={incrementarUno}>Incrementar contador uno</button>
        <button onClick={incrementarDos}>Incrementar contador dos</button>
    </div>
    </div>
  )
}
