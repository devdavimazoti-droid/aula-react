import { useRef, useState } from "react"

export default function CampoBusca(){
    
    const [texto, setTexto] = useState("")
    const inRef = useRef(null)

    function referenciarCampoLimpo(){
        setTexto("")
        inRef.current.focus()
    }
    
    return (
        <div>
            <input ref={inRef} type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
            <button onClick={referenciarCampoLimpo}>Limpar</button>
        </div>
    )
}