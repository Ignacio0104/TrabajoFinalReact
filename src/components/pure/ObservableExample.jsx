import React from 'react';
import { getNumbers } from '../../services/ObservableServices';
import { useState } from 'react';

export default function ObservableExample() {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers=()=>{
        console.log("Subscription to observable")
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log(`New number: ${newNumber}`);
                    setNumber(newNumber);
                },
                error(error){
                    alert("Something went wrong!");
                },
                complete(){
                    alert(`Finished with: ${number}`);
                }
            }
        )

        console.log("Finishing subscription");
    }

  return (
    <div>
      <h2>Number: {number} </h2>
      <button onClick={obtainNewNumbers}>Obtain new numbers</button>
    </div>
  )
}
