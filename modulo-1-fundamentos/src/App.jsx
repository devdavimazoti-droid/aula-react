import ProductCard from "./megaexercício1/ProductCard";
import Cabecalho from "./megaexercício1/Cabecalho"

function App() {
  return (
    <div>
      <Cabecalho nome="Elma Maria" />
      <ProductCard
        nome="Teclado"
        preco={199.99}
        desconto={10}
        emEstoque={true}
        nota={4.5}
      />
      <ProductCard
        nome="Mouse"
        preco={99.99}
        desconto={0}
        emEstoque={false}
        nota={3.5}
      />
      <ProductCard
        nome="Monitor"
        preco={299.99}
        desconto={15}
        emEstoque={true}
        nota={4.0}
      />
      <ProductCard
        nome="Notebook"
        preco={1999.99}
        desconto={20}
        emEstoque={true}
        nota={4.5}
      />
    </div>
  );
}

export default App;
