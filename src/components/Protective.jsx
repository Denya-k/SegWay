import React from 'react'
import "../sass/protective.scss"
import protective from "../assets/img/protective.svg"

export default function Protective() {
  return (
    <div className="wrapper protective">
        <img 
            className="protective-img"
            src={protective}
            alt="Protective" 
        />

        <div className="protective-content">
            <h1 className="protective-title">SEGWEY PROTECTIVE GEAR SET AS A GIFT</h1>
            <p className="protective-text">
                The cost of a protection kit when buying 
                a scooter is $ 0 instead of $ $29.99 
            </p>
        </div>
    </div>
  )
}
