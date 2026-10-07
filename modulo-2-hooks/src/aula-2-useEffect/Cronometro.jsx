import { useEffect, useState } from "react";

export default function Cronometro(){
    const [segundos, setSegundos] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            setSegundos(segundos + 1)
        },1000)

        return() => {
            clearInterval(interval)
        }
    },
    []);
    
    return(
        <div>
            <h3>Tempo: {segundos} segundos</h3>
        </div>
    );
}