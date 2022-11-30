import React from 'react'

export default function AsyncExample() {

    async function generateNumber(){
        return 23; 
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2);
    }

    function obtainNumber(){
        generateNumber().then((response)=> alert(`Response ${response}`))//Usa el then por la funcion que ella es async
        .catch((error)=>alert(`Something went wrong: ${error}`)); 
    }

    
    function obtainPromiseNumber(){
        generatePromiseNumber().then((response)=> alert(`Response ${response}`))
        .catch((error)=>alert(`Something went wrong: ${error}`)); 
    }

    async function saveSessionStorage(key,value){
        sessionStorage.setItem(key,value);

        return Promise.resolve(sessionStorage.getItem(key));
    }

    function showStorage(){
        saveSessionStorage("name","Nacho").then((response)=> {
            let value = response;
            alert(`Saved name: ${value}`);
        }).catch((error)=>alert(`Something went wrong: ${error}`))
        .finally(()=>console.log("Name saved and retreived")); //Finally no devuelve nada
    }

    async function obtainMessage(){
        let promise = new Promise((resolve,reject)=>{
            setTimeout(()=>resolve("Hello World!"),2000);
        });

        let resultado = await promise;
        await alert(`Message received: ${resultado}`);
    }

    const returnError = async()=>{
        await Promise.reject(new Error("Oooops")); 
    }

    const urlNotFound = async()=>{
        try{
            let response = await fetch("invalidUrl"); //Esto no me funciona
            alert (`Response ${JSON.stringify(response)}`);
        }catch (error){
            alert(`Something went wrong: ${error}`);
        }
    }

    const multiplePromisa = async ()=>{
        let results = await Promise.all(
            [
                fetch("https://regres.in/api/users"),
                fetch("https://regres.in/api/users?page=2")
            ]
        ).catch((error)=>{
            alert(`Something went wrong: ${error}`);
        })
    }

    const consumeError = ()=>{
        returnError()
        .then((response)=>alert(`Everything is OK: ${response}`))
        .catch((error)=>alert(`Something went wrong: ${error}`))
        .finally(()=>alert("Finally executed"));//Finally se ejecuta siempre
    }

  return (
    <div>
        <button onClick={obtainNumber}>Obtain number</button>
        <button onClick={obtainPromiseNumber}>Obtain promise number</button>
        <button onClick={showStorage}>Save Name and show</button>
        <button onClick={obtainMessage}>Send message</button>
        <button onClick={consumeError}>Obtain error</button>
        <button onClick={urlNotFound}>Page not found</button>
        <button onClick={multiplePromisa}>Multiple promises</button>
    </div>
  )
}
