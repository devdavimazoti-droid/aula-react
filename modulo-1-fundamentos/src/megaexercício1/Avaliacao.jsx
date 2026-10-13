export default function Avaliacao({nota}){
    return(
        <div>
            <p>{nota}/5</p>
            <p>{nota >= 4 ? "Muito bem avaliado" : "Avaliação abaixo da média"}</p>
        </div>
    )
}