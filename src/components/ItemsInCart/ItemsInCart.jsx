import React from 'react'
import "./items_in_cart.scss"

export default function ItemsInCart({quantity = 0}) {
  return quantity ? (
    <div className="items-in-cart"> 
        {quantity}
    </div>
  ) : null
}
