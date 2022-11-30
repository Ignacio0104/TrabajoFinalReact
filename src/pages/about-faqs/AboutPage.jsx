import React from 'react'
import { useLocation,useHistory } from 'react-router-dom'

export default function AboutPage() {
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
  return (
    <div>
      <h1>About | FAQs</h1>
      <div>
        <button onClick={()=>navigate("/")}>
            Go to Home
        </button>
        <button onClick={goBack}>
            Go back
        </button>
        <button onClick={goForward}>
            Go forward
        </button>
      </div>
    </div>
  )
}
