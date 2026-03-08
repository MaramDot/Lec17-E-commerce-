import React from 'react'
import ProductCard from './ProductCard';

const ProductList = ({products,addToCart,addToFav}) => {
    // console.log(products);
    return (
        <div>
            <h2 style={{textAlign:"center", marginTop:"30px"}}>Product List</h2>
            <div className="products" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}> 
            {products.map((elem,i)=>{
                return(
                    <ProductCard 
                    elem={elem} 
                    key={elem.id} 
                    addToCart={addToCart}
                    addToFav={addToFav}/>
                )
            })}
        </div>  
    </div>
            )
}

export default ProductList

