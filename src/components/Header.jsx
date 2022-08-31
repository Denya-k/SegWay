import React from 'react'
import "../../src/sass/header.scss"
import logo from "../assets/img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="burger header-burger">
            <FontAwesomeIcon 
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
              className="contact-icon"
              icon={faCartShopping} 
            />
            <FontAwesomeIcon 
              className="contact-icon"
              icon={faInstagram} 
            />
            <span className="contact-number">+1 (888) 888-88-88</span>
        </div>  
      </div>
    </header>
  )
}
