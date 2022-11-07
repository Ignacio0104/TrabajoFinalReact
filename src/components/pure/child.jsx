import React, {useRef} from 'react'

export default function Child(props) {

    const messageRef = useRef("");
    const nameRef = useRef("");

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in input ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }

    function submitForm(e){
        e.preventDefault();
        props.update(nameRef.current.value)
    }
  return (
    <div style={{backgroundColor: "darkBlue", color:"white"}}>
        <p onMouseOver={()=> console.log("On mouse Over")}>Nombre en el hijo {props.name}</p>
        <button onClick={()=>console.log("boton uno apretado")}>Boton uno</button>
        <button onClick={pressButton}>Boton dos</button>
        <button onClick={()=> pressButtonParams ("Hello")}>Boton tres</button>
        <input ref={messageRef} //Estoy asociando este control al use ref
        placeholder='Insert a text' 
        onFocus={()=>console.log("Input focus")}>
        </input>
        <button onClick={()=> props.send(messageRef.current.value)}>Send message</button>
        <div style={{marginTop: "20px"}}>
            <form onSubmit={submitForm}>
                <input ref={nameRef} placeholder='New name'/>
                <button type='submit'>Update name</button>
            </form>
        </div>
    </div>
  )
}
