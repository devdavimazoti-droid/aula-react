function ProductCard({nome, preco, emEstoque}) {
    return(
        <div>
            <h1>{nome}</h1>
            <p>R${preco.toFixed(2)}</p>
            <p>{emEstoque?"Disponivel" : "Inacesivel"}</p>
        </div>
    );
}
export default ProductCard;