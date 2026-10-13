export default function StatusEstoque({emEstoque}){
    return(
        <div>
            <p>{emEstoque?"Disposnível":"Fora de Estoque"}</p>
        </div>
    )
}