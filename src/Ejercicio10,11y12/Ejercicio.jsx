import React , {useState} from 'react'

class RGB{
    blue;
    red;
    green;

    constructor(blue,red,green)
    {
        this.blue=blue;
        this.red=red;
        this.green=green;
    }
}

export default function Ejercicio() {

    const [cambioColor, setCambioColor] = useState(false);
    let estiloCuadrado = {
        display:'flex', 
        justifyContent : 'center',
        backgroundColor: "black",
        width: "255px",
        height: "255px"
    }

    const Cuadrado = (props)=>{
        let nuevoColor = new RGB(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
        nuevoColor = `rgb(${nuevoColor.red},${nuevoColor.green},${nuevoColor.blue})`
        if(!cambioColor)
        {
            return(
                <div style={estiloCuadrado} onMouseOver={()=>setCambioColor(true)}></div>
            )
        }else{
            return(
                <div style={{...estiloCuadrado,backgroundColor : nuevoColor}} onMouseOver={()=>setCambioColor(false)}></div>
            )
        }

    }

    function activarCambioColor (bool)
    {
        console.log("enTRE");
        setCambioColor(bool);
        if(cambioColor)
        {
            let nuevoColor = new RGB(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
            estiloCuadrado = {...estiloCuadrado, backgroundColor: nuevoColor}
        }
    }
  return (
    <div>
        <Cuadrado></Cuadrado>
    </div>
  )
}
