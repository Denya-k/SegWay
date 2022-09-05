import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../sass/compare.scss";
import { deleteItemFromCart, setItemInCart } from '../redux/cart/reducer';


export default function Buy({scooter, text}) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart);
  
  const isItemInCart = items.some(item => item.id === scooter.id)

  const handlerClick = (e) => {
    e.stopPropagation();
    if(isItemInCart ) {
      dispatch(deleteItemFromCart(scooter.id));
    } else {
      dispatch(setItemInCart(scooter));

    }
   
  }
  return (
    <button  
    onClick={handlerClick}
    className={isItemInCart ? "button added comape__button" : "button comape__button" }
>
    {isItemInCart ?  'Remove' : text  }
</button>
  )
}
