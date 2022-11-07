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
    const [bloqueoCambioColor, setBloqueoCambioColor] = useState(false)
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
        if(!cambioColor || bloqueoCambioColor)
        {
            return(
                <div style={estiloCuadrado} 
                onMouseOver={()=>setCambioColor(true)}
                ></div>
            )
        }else{
            return(
                <div style={{...estiloCuadrado,backgroundColor : nuevoColor}} 
                onMouseOverCapture={()=>setCambioColor(false)} >                      
                </div>
            )
        }
        }

  return (
    <div>
        <Cuadrado onDoubleClick={()=>setBloqueoCambioColor(true)}></Cuadrado>
    </div>
  )
}
