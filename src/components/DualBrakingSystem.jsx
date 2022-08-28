import React from 'react'
import brakingSystem from "../assets/img/brakingsystem.svg"
import "../sass/braking.scss"


export default function DualBrakingSystem() {
  return (
  <div className="braking-section">
    <div className="wrapper braking">
      <img 
          className=""
          src={brakingSystem}
          alt="Brakyng System" 
      />
            
      
      <div className="braking-system__content">
          <h1 className="braking-system__title">
            DUAL BRAKING SYSTEM
          </h1>
          <p className="braking-system__text">
              Simultaneous mechanical front drum brake and regenerative electric 
              back brake provide both stability and steerabiliti.
          </p>
          <p className="braking-system__text">
            *IPX5 water resistance
          </p>
      </div>
    </div>
 </div>
  )
}
