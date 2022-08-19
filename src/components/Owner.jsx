import React from 'react'
import logo from "../assets/img/logo.svg";
import owner from "../assets/img/owner.png";
import "../../src/sass/owner.scss"


export default function Owner() {
  return (
    <div className="wrapper">
      <div className="wrapper-owner">
        <img src={logo} alt="Logo" />
        <div className="owner">
            <img className="owner__img" src={owner} alt="Owner" />
            <div className="owner-contact">
                <span>JONH SMITH</span><br />
                <a href="#">ask a question to the director</a>
            </div>
        </div>
      </div>
    </div>
  )
}
