import { useState } from "react";

function Curtir(){
    const [curtida, setCurtida] = useState(0);

    function incremento(){
        setCurtida(curtida + 1);
    }

    return(
        <div>
            <h2>{curtida} curtidas</h2>
            <button onClick={incremento}>Curtir</button>
        </div>
    );
}

export default Curtir;