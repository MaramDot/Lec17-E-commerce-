
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Fav from './components/Fav'
import "./App.css"

const App = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("all")
    const [cart, setCart] = useState([])
    const [favorites, setFavorites] = useState(()=>{
        const saved = localStorage.getItem("favorites")
        return saved ? JSON.parse(saved) : []
    })
    const [view, setView] = useState("")

    useEffect(() => {
    fetchProducts()
    }, [])

  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products/")
    const data = await res.json()
    setProducts(data)
  }

  const filterdProducts = category === "all" ? products : products.filter(elem => elem.category === category)

  // --- Cart Functions ---
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id)
    if(exists){
      setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
    } else {
      setCart([...cart, {...product, quantity:1}])
    }
  }

  const removeCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const increaseQty = (id) => {
    setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item))
  }

  const decreaseQty = (id) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item))
  }

  const clearCart = () => setCart([])

  // --- Favorites Functions ---
  const addToFav = (product) => {
    const exists = favorites.find(item => item.id === product.id)
    if(exists) return
    setFavorites([...favorites, product])
  }

  const removeFav = (id) => {
    setFavorites(favorites.filter(item => item.id !== id))
  }

  return (
    <div>
      <Navbar setView={setView} cart={cart} favorites={favorites} />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">ALL</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      {view === "cart" ? (
        <Cart
          cart={cart}
          removeCart={removeCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          clearCart={clearCart}
        />
      ) : view === "fav" ? (
        <Fav favorites={favorites} removeFav={removeFav} />
      ) : (
        <ProductList products={filterdProducts} addToCart={addToCart} addToFav={addToFav} />
      )}
    </div>
  )
}

export default App