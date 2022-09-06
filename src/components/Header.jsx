import React, { useState } from 'react'
import "../../src/sass/header.scss"
import logo from "../assets/img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import CartMenu from './CartMenu/CartMenu';
import ItemsInCart from './ItemsInCart/ItemsInCart';
import PageMenu from './PageMenu/PageMenu';

const menu = [
  {value: "REVIEWS", href: "!#"},
  {value: "SHIPPING AND PAYMENT", href: "!#"},
  {value: "WHOLESALE", href: "!#"},
  {value: "BLOG", href: "!#"},
  {value: "CONTACTS", href: "!#"}
]

let lastScroll = 0;
const scrollPosition = () => window.pageYOffset

export default function Header({isCartMenuVisible, setIsCartMenuVisible,}) {
  // const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itemsInCart);
  
  const [headerVisible,setHeaderVisible] = useState(true);
  const [menuActive, setMenuActive] = useState(false)




  // window.addEventListener('scroll', () => {
  //   if(scrollPosition() > lastScroll ) {
  //     setHeaderVisible(false)
      
  //   }
  //   else if(scrollPosition() < lastScroll  ) {
  //     setHeaderVisible(true)
  //   } 
  //   lastScroll = scrollPosition();
  // })

  return (
    <header className={headerVisible ? "header" : "header hide"}>
      <div className="wrapper">
        <div className="burger header-burger">
            <FontAwesomeIcon 
                onClick={() => setMenuActive(!menuActive)}
                className="contact-icon"
                icon={faBars} 
              />
        </div>

        <img 
          className="logo header-logo"
          src={logo} 
          alt="Logo" 
        />

        <ul className="header-list">
            <li className="header-list__item">REVIEWS</li>
            <li className="header-list__item">SHIPPING AND PAYMENT</li>
            <li className="header-list__item">WHOLESALE</li>
            <li className="header-list__item">BLOG</li>
            <li className="header-list__item">CONTACTS</li>   
        </ul>

        <div className="contact">
            <FontAwesomeIcon 
                  className="contact-icon"
                  icon={faPhone} 
            />
            
            <FontAwesomeIcon
              onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
                className="contact-icon"
                icon={faCartShopping} 
            />
            { <ItemsInCart quantity={items.length}/> }
            
            {isCartMenuVisible && headerVisible && <CartMenu items={items} onClick={() => null}/>}

            <FontAwesomeIcon 
              className="contact-icon"
              icon={faInstagram} 
            />
            <span className="contact-number">+1 (888) 888-88-88</span>
        </div>  
      </div>
      {/* {menuActive && <PageMenu 
                      active={menuActive}
                      setActive={setMenuActive}
                      items={menu}  
                      header={"Menu"}
                    />} */}
                    <PageMenu 
                      active={menuActive}
                      setActive={setMenuActive}
                      items={menu}  
                      header={"Menu"} />
    </header>
  )
}
