import React from 'react'
import getRandomJoke from '../../services/axios-service-ejercicio';
import { useState, useEffect } from 'react'
import  Button  from '@mui/material/Button/Button';

export default function AxiosExampleEjercicio() {

    const [joke, setJoke ] = useState("");
    const [liked, setLiked] = useState(0);
    const [disliked, setDisLiked] = useState(0)

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

    const likeJode=(bool)=>{
      if(bool){
        setLiked(liked + 1);
      }else{
        setDisLiked(disliked + 1);
      }
      obtainJoke();
    }

  return (
    <div> 
      <h1>Chuck norris Jokes!</h1>
      <h3>Liked Jokes: {liked} ------ Disliked Jokes: {disliked}</h3>
      {joke !== "" ?
      (<h2>Joke: {joke}</h2>):
      (<h2>No se encontró el chiste</h2>)}
      <div>
      <button className='btn btn-success' style={{margin: "20px"}} onClick={()=>likeJode(true)}> Like </button>
        <Button onClick={obtainJoke} variant="contained">New Jokes</Button>
      <button className='btn btn-danger' style={{margin: "20px"}} onClick={()=>likeJode(false)}> Dislike </button>
      </div>
      
    </div>
  )
}
