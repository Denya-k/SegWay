import React from 'react'
import "../sass/folding.scss"
import folding from "../assets/img/folding.svg"


export default function Folding() {
  return (
    <div className="wrapper folding ">
        <h1 className="folding-folding__title">ONE-STEP FOLDING MECHANISM</h1>
        <p className="folding-folding__text">
            Ninebot KickScooter MAX can be easily folded and carried around in 3 second
        </p>
        <img 
            src={folding}
            alt="Folding"
        />
    </div>
  )
}
