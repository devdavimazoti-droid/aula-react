import { useRef, useState } from "react"

export default function ContadorDeCliques(){
    const [cont, setCont] = useState(0)
    const contRef = useRef(0)

    function incrementarContadorState(){
        setCont(cont+1)
    }

    function incrementarContadorRef(){
        contRef.current = contRef.current + 1
    }

    function mostrarRef(){
        alert(contRef.current)
    }


    return(
        <div>
            <button onClick={incrementarContadorState}>Clique visível</button>
            <button onClick={incrementarContadorRef}>Clique invisível</button>
            <button onClick={mostrarRef}>Mostrar valor ref</button>
            <p>{cont}</p>
        </div>
    )
};