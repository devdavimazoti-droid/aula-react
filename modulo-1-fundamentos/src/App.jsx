import ProductCard from './aula-3-props/ProductCard';


function App() {


  return (
    <div>    
      <ProductCard nome= "Mouse" preco={230} emEstoque = {true}/>
      <ProductCard nome= "Teclado" preco={90} emEstoque={false}/>
    </div>
  )
}

export default App
