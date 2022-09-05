import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./cart_item.scss"
import { deleteItemFromCart } from '../../redux/cart/reducer';

export default function Cartitem({price, title, key, id, scooter}) {

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === scooter.id)
    const handlerClick = (e) => {
      e.stopPropagation();
      if(isItemInCart ) {
        dispatch(deleteItemFromCart(scooter.id));
      } 
     
    }
  return (
    <div className="cart-item">
        <span>{title}</span>
        <div className="cart-item__price">
            <span>{price} $</span>
            <FontAwesomeIcon
                onClick={handlerClick} 
                className="icon-delete"
                icon={faCircleXmark} 
            />
        </div>
    </div>
  )
}
