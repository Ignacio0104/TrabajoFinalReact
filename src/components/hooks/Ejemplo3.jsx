import React, {useState,useContext} from 'react'

/*
El componenente uno dispone de un contexto que va a tener un valor que recibe del padre
*/
const miContexto = React.createContext(null);
function ComponenteUno() {
    //Inicializamos el estado vacia que va a llenarse con los datos del padre
    const state = useContext(miContexto);
  return (
    <div>
        <h1>
            El token es: {state.token}
        </h1>
        <ComponenteDos></ComponenteDos>
    </div>
  )
}

function ComponenteDos() {
    const state = useContext(miContexto);
  return (
    <div>
      <h2>
        La sesion es: {state.sesion}
      </h2>
    </div>
  )
}


export default function ComponenteConContexto() {
    const estadoInicial = {
        token : '123456',
        sesion: 1,
    }

    //Creamos el estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial)

    function actualizarSesion(){
        setSesionData({
            token: "jfasfasjf",
            sesion: sesionData.sesion + 1,
        });
    }

  return (
      <miContexto.Provider value={sesionData}>
        <ComponenteUno></ComponenteUno>
        <button onClick={actualizarSesion}>Actualizar</button>
      </miContexto.Provider>
  )
}

