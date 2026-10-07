import { useEffect } from "react";
import { useState } from "react";

function Relogio(){

    // Declara o useState de horaAtual como data do local
    const [horaAtual, setHoraAtual] = useState(new Date().toLocaleTimeString()) 

    // 
    useEffect(() => {
        const idDoIntervalo = setInterval(() => {
            setHoraAtual(new Date().toLocaleTimeString())
        },1000);
    

        return () => {
          clearInterval(idDoIntervalo);
        };
    }, [])
    

    return(
        <div>
            <h1>Horas</h1>
            <h3>{horaAtual}</h3>
        </div>
    );

}
export default Relogio;