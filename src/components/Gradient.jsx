import React from 'react'
import gradient from "../assets/img/gradient/gradient.png";
import "../sass/gradient.scss"

export default function Gradient() {
  return (
    <div className="gr">
        <img 
            className="gradient"
            src={gradient} 
            alt="Gradient" 
        />
    </div>
  )
}
