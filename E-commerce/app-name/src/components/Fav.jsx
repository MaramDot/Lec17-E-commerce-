import React from 'react'

const Fav = ({favorites, removeFav}) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p className="empty">No favorites yet</p>
      ) : (
        favorites.map(item => (
          <div className="fav-item" key={item.id}>
            <h4>{item.title}</h4>
            <button onClick={()=>removeFav(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  )
}

export default Fav