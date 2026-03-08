import React from 'react'
const Navbar = ({setView,cart,favorites}) => {
  return (
    <nav className='navbar'>
      <h2>Maram's Store</h2>
      <div className='nav-buttons'>
        <button onClick={()=>setView("cart")}>🛒 ({cart.length})</button>
        <button onClick={()=>setView("fav")}>❤️ ({favorites.length})</button>

      </div>
    </nav>
  )
}

export default Navbar


