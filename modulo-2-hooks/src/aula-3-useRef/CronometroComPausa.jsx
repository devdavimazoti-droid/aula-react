import { useRef, useState } from "react"

export default function CronometroComPausa(){
    
    const [timer, setTimer] = useState(0)
    const interval = useRef(null)
    
    function iniciarTimer() {
        if (interval.current !== null) return;

        interval.current = setInterval(() => {
                setTimer(timer => timer + 1)
            },1000)
    }

    function pausarTimer() {
        clearInterval(interval.current)
        interval.current = null
    }

    return(
        <div>
            <h3>{timer}</h3>
            <button onClick={iniciarTimer}>Iniciar</button>
            <button onClick={pausarTimer}>Pausar</button>
        </div>
    )
}