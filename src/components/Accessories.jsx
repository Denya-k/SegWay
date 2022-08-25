import React from 'react'
import "../sass/accessories.scss"
import  accessories from './AccessoriesArr'



export default function Accessories() {
  return (
    <div className="accessories wrapper">
        <div className="accessories-title">
            <h1>Accessories</h1>
        </div>

        <div className="accessories-cards">
            {accessories.map((item) => 
                <div
                    className="accessories-cards__item" 
                    key={item.id}
                >
                    <div className="accessories-cards__img">
                        <div className="accessories-cards__ellipse"></div>
                        <img 
                            src={item.src} 
                            alt="Accessories" 
                        />
                    </div>
                    <h3 className="accessories-cards__title">
                        {item.title}
                    </h3>
                    <p className="accessories-cards__text">
                        {item.p}
                    </p>
                    <span className="accessories-cards__price">
                        {item.price}
                    </span>
                    <button className="accessories-cards__button"> 
                        ADD TO CARD
                    </button>
                </div>
            
            )}
        </div>
        
    </div>
  )
}
