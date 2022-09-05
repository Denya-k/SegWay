import React from 'react'
import Cartitem from '../CartItem/Cartitem'
import { calcTotalPrice } from '../untils'
import "./cart_menu.scss"

export default function CartMenu({items, onClick}) {



  return (
    <div className="cart-menu">
        <div className="cart-menu__scooter-list">
            {
                items.length > 0 ? items.map((scooter) => (
                    <Cartitem 
                        scooter={scooter}
                        id={scooter.id}
                        key={scooter.id}
                        price={scooter.price}
                        title={scooter.title}
                    />
                ))
                : 
                "Cart is empty"
            }
        </div>
        {
            items.length > 0 ?
            <div className="cart-menu__arrange">
                <div className="cart-menu__total-price">
                    <span>Sum:</span>
                    <span>{calcTotalPrice(items).toFixed(2)} $</span>
                </div>
                <button 
                    className="button"
                    onClick={onClick}
                >
                    Pay
                </button>
            </div>
            : null
        }
    </div>
  )
}
