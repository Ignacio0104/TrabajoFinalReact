import React, {useState} from 'react'

//Definiendo estilo en constantes
//Usuario logueado
const loggedStyle ={
    color: "white",
}

//Usuario no logueado
const unLoggedStyle ={
    color: "tomato",
    fontWeight: "bold"
}




export default function GreetingStyled(props) {

    const [logged, setLogger] = useState(false);
    const greetingUser = (<p>Hola, {props.name}</p>) ;
    const pleaseLogin =(<p>Please Login</p>);

  return (
    <div style={ logged ? loggedStyle : unLoggedStyle}>
    { logged ? 
        greetingUser
        : 
        pleaseLogin
    }  
      <button onClick={()=>{setLogger(!logged)}}>
        {logged ? "Log out" : "Login"}
      </button>
    </div>
  )
}
