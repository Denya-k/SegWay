import React from 'react'
import "../sass/other_models.scss"
import otherModelsArr from './OtherModelsArr'

export default function OtherModels() {


  return (
    <div className="other wrapper">
        <h1 className="title other__title">OTHER MODELS</h1>
        <span className="text other__text">Check out the entire line of Segway scooters</span>
        <div className="other other__list">
            {otherModelsArr.map((item) => 
            <ul className="other__item" key={item.id}>
                <li>
                    <img src={item.img} alt="Scooter" />
                </li>
                <li>
                    <h3>{item.title}</h3>
                </li>
                <li>
                    <span className="price">{item.price}</span>
                </li>
                <button className="button">SEE MORE</button>
            </ul>
            
            )}
            <form action="#!" className="other other__form">
                <h3 className="title form__title">
                    DIDN'T FIND A MODEL?
                </h3>
                <span className="text form__text">
                    Leave your contact details
                    and we will help you with 
                    the choice
                </span>
                <input 
                    type="text" 
                    className="form__input" 
                    placeholder="+7 (__) ___-__-__"
                />
                <button className="button form__button">SEND</button>
            </form>
        </div>
        
    </div>
  )
}
