import React from 'react'
const ProductCard = ({elem,addToCart,addToFav}) => {
    // console.log(elem);
    
  return (
    <div className="card" style={{border:"1px solid gray",padding:"10px"}}>
        <img src={elem.image} alt={elem.title} width="100px"/>
        <h4>{elem.title}</h4>
        <p>$ {elem.price}</p>
        <div className="card-buttons">
          <button onClick={()=> addToCart(elem)}>🛒</button>
          <button onClick={()=> addToFav(elem)}>❤️</button>
        </div>
    </div>
  )
}

export default ProductCard