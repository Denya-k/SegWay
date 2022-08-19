import React from 'react'
import skooter from "../assets/img/skooter1.svg"
import "../sass/kickskooter.scss"

export default function KickSkooter() {
  return (
    <div className="wrapper kickskooter">
        <h1 className="kickskooter-kickskooter__title">
          KICKSCOOTER OVERVIEW SEGWAY NINEBOT KICKSCOOTER MAX
        </h1>
        <img src={skooter} alt="Skooter" />
    </div>
  )
}
