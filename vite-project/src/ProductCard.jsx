 import "./ProductCard.css"
 function ProductCard(variable)
{

    return (
        <div className="cont">
            <p className="title"> variablername{variable.rname}</p>
            <p className="com">variablecost{variable.cost }</p>
            <p>{variable.avl===true?<p className="con">"In stock"</p>:<p className="on">"Out of stock"</p>}</p>
        </div>
    )
}
export default ProductCard