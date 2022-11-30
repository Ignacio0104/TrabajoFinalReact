import React from 'react'
import { useHistory,useLocation } from 'react-router-dom';

export default function HomePage() {

  const location = useLocation();
  const history = useHistory();
  const navigate = (path)=>{
    history.push(path); 
}

const goBack = ()=>{
    history.goBack();
}

const goForward = ()=>{ //Este no anda bien
    history.goForward();
}

const navigateProps = (path)=>{
  history.push( {
    pathname: path,
    search:"?online=true", //Query params. Son inseguros, nunca claves por aca
    state: {
      online: true,
    }
  })
}
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button onClick={()=>navigate("/profile")}>
            Profile
        </button>
        <button onClick={()=>navigateProps("/online-state")}>
          Go page with state / query params
        </button>
      </div>
    </div>
  )
}
