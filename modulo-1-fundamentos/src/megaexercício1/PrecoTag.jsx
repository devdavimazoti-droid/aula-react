export default function PrecoTag({ preco, desconto }) {
  return (
    <div>
      {desconto > 0 ? (
        <>
          <parseInt>De: R${preco.toFixed(2)}</parseInt>
          <p>Por: R${(preco * (1 - desconto / 100)).toFixed(2)}</p>
        </>
      ) : (
        <p>Preço: R${preco.toFixed(2)}</p>
      )}
    </div>
  );
}
