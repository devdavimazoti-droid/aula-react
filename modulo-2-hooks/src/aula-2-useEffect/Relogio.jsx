import { useEffect } from "react";
import { useState } from "react";

function Relogio(){
    const [horaAtual, setHoraAtual] = useState(new Date().toLocaleTimeString()) 

   useEffect(() => {
    setInterval(() => {
        setHoraAtual(new Date().toLocaleTimeString())
    },1000)
   }, []);

    return(
        <div>
            <h1>Horas</h1>
            <h3>{horaAtual}</h3>
        </div>
    );

}
export default Relogio;