import ProductCard from "./ProductCard.jsx"
function App() {
  const productname="Face Wash"
    const price=200
    const isavailable=true

return (
    <>
    <ProductCard rname={productname} cost={price} avl={isavailable}/>
    </>
  )
}

export default App
