import React from 'react'
import fastcharging from "../assets/img/fastcharging.svg"
import "../sass/braking.scss"


export default function FastCharging() {
  return (
    <div className="braking">
    <div className="wrapper braking">
    <img 
        src={fastcharging}
        alt="Fast Charging" 
    />
   
        <div className="braking-system__content">
            <h1 className="braking-system__title">
             EASY ONE CORD FAST CHARGING
            </h1>
            <p className="braking-system__text">
                The built-in charger lets riders recharge it easily
                when on the go without having to carry along a
                bulky charging adapter. 3A fast charge will give
                Ninebot KickScooter MAX a full charge in 6 hours.  
            </p>
           
        </div>
    </div>
    
</div>
  )
}
