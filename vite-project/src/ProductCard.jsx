function ProductCard({rname,cost,avl,})
{
    
    return (
        <div>
            <p>product ={rname}</p>
            <p>cost = {cost}</p>
            <p>{avl===true?"In stock":"Out of stock"}</p>
        </div>
    )
}
export default ProductCard