import React from 'react'
import getRandomJoke from '../../services/axios-service-ejercicio';
import { useState, useEffect } from 'react'
import

export default function AxiosExampleEjercicio() {

    const [joke, setJoke ] = useState("");

    useEffect(() => {
      obtainJoke();
    }, [])
    
    const obtainJoke = ()=>{
        getRandomJoke().then(
            (response)=>{
                if(response.status===200)
                {    
                    console.log(response.data.value);  
                    setJoke(response.data.value);
                }
                
            }
          ).catch((err)=> alert(`Something went wrong ${err}`));
    }

  return (
    <div> 
      <h1>Axios example</h1>
      {joke !== "" ?
      (<h2>Joke: {joke}</h2>):
      (<h2>No se encontró el chiste</h2>)}
      <div>
        <button onClick={obtainJoke} variant="contained">New Jokes</button>
      </div>
      
    </div>
  )
}
