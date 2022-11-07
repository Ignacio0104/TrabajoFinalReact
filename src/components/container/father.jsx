import React, {useState} from 'react'
import Child from '../pure/child'

export default function Father() {

    const [name, setName] = useState("Martin")

    function showMessage(texto){
        alert (`Message receive ${texto}`);
    }

    function updateName(texto)
    {
        setName(texto);
    }

  return (
    <div style={{backgroundColor: "tomato",padding: "10px"}}>
    <h1 style={{color: "black"}}>Nombre en el padre {name}</h1>
      <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  )
}
