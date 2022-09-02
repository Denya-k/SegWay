import React from 'react'
import "../sass/compare.scss"
import Carousel from './Carousel'
import scootersArr from "./CompareArr.jsx"


export default function Compare() {
  return (
    <div className="compare">
        <div className="wrapper">
            <h1 className="title compare__title">compare specifications</h1>
            <span className="text compare__text">Add model to compare</span>

            <div className="card__list compare__card__list">
            <Carousel>
                    {scootersArr.map((item) => 
                        <div className="card compare__card" key={item.id}>
                            <div className="img">
                                <img
                                    className="img compare__img" 
                                    src={item.img} 
                                    alt="Scooter" 
                                />
                            </div>
                            <span className="compare__card-title">
                                {item.title}
                            </span>
                            <ul>
                                <li>{item.speed}</li>
                                <li>{item.miles}</li>
                                <li>{item.battery}</li>
                                <li>{item.netWeight}</li>
                                <li>{item.payload}</li>
                                <li>{item.charginTime}</li>
                                <li>{item.numberOfBatteries}</li>
                                <li>{item.motorPower}</li>
                                <li>{item.powerOutput}</li>
                                <li>{item.maxIncline}</li>
                                <li>{item.shockAbsorption}</li>
                                <li>{item.safety}</li>
                                <li>{item.atmosphereLight}</li>
                            </ul>

                            <span className="price compare__price">{item.price}</span>
                            <button className="button comape__button">
                                BUY IT NOW
                            </button>
                        </div>
                    )}
            </Carousel>
            </div>
        </div>
    </div>
  )
}
