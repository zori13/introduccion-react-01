import { useState } from "react"
export default function Contador(){
    const [contador, setContador]= useState(0)
    const subirContador=()=>{
        setContador(contador +1)
    }
    const bajarContador=()=>{
        setContador(contador -1)
    }
    return(
        <div>
            <h2>Contador</h2>
            <p>Valor del contador: {contador} </p>
            <button onClick={bajarContador}>Decrementar</button>
            <button onClick={subirContador}>Incrementar</button>
        </div>
    )

}
