import React from 'react'

const Cart = ({cart,removeCart,increaseQty,decreaseQty,clearCart}) => {

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 && <p className="empty">Cart is empty</p>}
      {cart.map((item)=>(
        <div className="cart-item" key={item.id}>
          <h4>{item.title}</h4>
          <div>
            <button onClick={()=>decreaseQty(item.id)}>-</button>

            <span>{item.quantity}</span>

            <button onClick={()=>increaseQty(item.id)}>+</button>

            <button onClick={()=>removeCart(item.id)}>
              Remove
            </button>

          </div>

        </div>
        ))}
        {cart.length > 0 && (
        <>
          <h3 className="total">
            Total: ${total.toFixed(2)}
          </h3>

          <button onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}

    </div>
  )
}
export default Cart







