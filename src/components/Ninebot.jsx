import React from 'react'
import "../sass/ninebot.scss"

const payment = [
    {id:1, src: `${require(`../assets/img/payment/payment1.svg`).default}` },
    {id:2, src: `${require(`../assets/img/payment/payment2.svg`).default}` },
    {id:3, src: `${require(`../assets/img/payment/payment3.svg`).default}` },
    {id:4, src: `${require(`../assets/img/payment/payment4.svg`).default}` },
    {id:5, src: `${require(`../assets/img/payment/payment5.svg`).default}` },
    {id:6, src: `${require(`../assets/img/payment/payment6.svg`).default}` },
    {id:7, src: `${require(`../assets/img/payment/payment7.svg`).default}` },
    {id:8, src: `${require(`../assets/img/payment/payment8.svg`).default}` },
    {id:9, src: `${require(`../assets/img/payment/payment9.svg`).default}` },
    {id:10, src: `${require(`../assets/img/payment/payment10.svg`).default}` },
    {id:11, src: `${require(`../assets/img/payment/payment11.svg`).default}` },
    {id:12, src: `${require(`../assets/img/payment/payment12.svg`).default}` },
    {id:13, src: `${require(`../assets/img/payment/payment13.svg`).default}` },
    {id:14, src: `${require(`../assets/img/payment/payment14.svg`).default}` },
    {id:15, src: `${require(`../assets/img/payment/payment15.svg`).default}` },
    {id:16, src: `${require(`../assets/img/payment/payment16.svg`).default}` }
]

export default function Ninebot() {
  return (
    <div className="ninebot ">
        <div className="wrapper">
            <div className="ninebot-content">
                <h1 className="ninebot-title">
                    SEGWAY Ninebot Kickscooter MAX
                </h1>
                    <div className="ninebot-card">
                        <div>
                            <span className="ninebot-card__title">Add an extended warranty from <b>Extend</b></span>
                        </div>
                        <div className="ninebot-button__list">
                            <button className="ninebot-button">
                                1 Year - $139
                            </button>
                            <button className="ninebot-button">
                                2 Year - $209
                            </button>
                            <button className="ninebot-button">
                                3 Year - $279
                            </button>
                        </div>
                        <div className="ninebot-price__list">
                            <div className="price">
                                <span className="price_item1">$1049.99</span><br />
                                <span className="price_item2">$949.99</span>
                            </div>
                            <span className="ninebot-segway">
                                Segway Protective
                                Gear Set as a gift
                            </span>
                            <img 
                                src={require("../assets/img/protection.svg").default}
                                alt="Protection" 
                            />
                        </div>
                        <div className="ninebot-buy">
                            <button className="ninebot-buy__btn">BUY IT NOW</button>
                            <button className="ninebot-buy__btn">ADD TO CARD</button>
                        </div>
                    </div>
                    <div className="ninebot-payment">
                        <span className="ninebot-payment__title">
                            Payment Methods:
                        </span>
                        <div className="">
                            {payment.map((item) => 
                                <img
                                    key={item.id}
                                    className="ninebot-payment__item" 
                                    src={item.src}
                                    alt="Payment" 
                                />
                            )}
                        </div>
                    </div>
                        <img
                            className="ninebot-img" 
                            src={require("../assets/img/ninebot.svg").default}
                            alt="" 
                        />
                        <img
                            className="ninebot-img__card" 
                            src={require("../assets/img/ninebot_card.svg").default}
                            alt="" 
                        />
                </div>
            </div>
    </div>
  )
}
