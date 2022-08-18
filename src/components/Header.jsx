import React from 'react'
import "../../src/sass/header.scss"
import basket from "../../src/assets/icon/basket.svg"
import instagram from "../../src/assets/icon/instagram.svg"

export default function Header() {
  return (
    <header className="header">
        <div className="wrapper">
            <ul className="header-list">
                <li className="header-list__item">REVIEWS</li>
                <li className="header-list__item">SHIPPING AND PAYMENT</li>
                <li className="header-list__item">WHOLESALE</li>
                <li className="header-list__item">BLOG</li>
                <li className="header-list__item">CONTACTS</li>   
            </ul>

            <div className="contact">
                <img className="contact-contact__icon" src={basket} alt="basket" />
                <img className="contact-contact__icon" src={instagram} alt="instagram" />

                <span className="contact-number">+1 (888) 888-88-88</span>
            </div>  
        </div>
    </header>
  )
}
