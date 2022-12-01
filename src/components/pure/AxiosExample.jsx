import React from 'react'
import getRandomUser from '../../services/axios-service'
import { useState, useEffect } from 'react'

export default function AxiosExample() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        obtainUser();
    }, [])
    
    const obtainUser = ()=>{
        getRandomUser().then(
            (response)=>{
                if(response.status===200)
                {          
                    setUser(response.data.results);
                    console.log(user);
                }
                
            }
          ).catch((err)=> alert(`Something went wrong ${err}`));
    }

  return (
    <div>
      <h1>Axios example</h1>
      {user != null?
      (<h2>Name: {user.name} {user.name}</h2>):
      (<h2>No se encontró el usuario solicitado</h2>)}
    </div>
  )
}
