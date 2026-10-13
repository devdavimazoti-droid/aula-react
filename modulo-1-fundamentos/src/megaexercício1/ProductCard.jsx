import PrecoTag from "./PrecoTag"
import StatusEstoque from "./StatusEstoque"
import Avaliacao from "./Avaliacao"

export default function ProductCard({ nome, preco, desconto, emEstoque, nota }) {
    return (
        <section>
            <br />
            <p>{nome}</p>
            <PrecoTag preco={preco} desconto={desconto} />
            <StatusEstoque emEstoque={emEstoque} />
            <Avaliacao nota={nota} />
            <br />
        </section>
    )
}