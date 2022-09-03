import React, { useState } from 'react'
import "../sass/range.scss"
import RangeCard from './RangeCard'
import basic from '../assets/img/range_card/basic.svg'
import delivery from '../assets/img/range_card/delivery.svg'
import range40m from '../assets/img/range_card/range40m.svg'
import sales from '../assets/img/range_card/sales.svg'

const rangeCardArr = [
    {
        name: "basic",
        title: "ONE YEARS MANUFACTURER'S WARRANTY",
        p: "The basic warranty is 1 years. You can also extend the warranty up to 4 years.",
        img: basic
    },
    {
        name: "sales",
        title: "After Sales Support",
        p: "If you have any difficulties with your kickscooter, our specialists will contact you within 15 minutes",
        img: sales
    },
    {
        name: "range40m",
        title: "Up to 40 miles of range on a single charge",
        p: "With a range of up to 40 miles, the longest range on the market, and a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from San Francisco Bay Area to Palo Alto on a single charge.",
        img: range40m
    },
    {
        name: "delivery",
        title: "We are in Los Angeles, CA ",
        p: "Free California 1 day shipping. US Free shiping 3-5 Days",
        img: delivery
    },
]

export default function Range() {
    const [hoverCard, seHoverCard] = useState(0)

    const [card, setCard] = useState(2)
    const [cardActive, setCardActive] = useState(4)
    

  return (
    <div className="wrapper">
        <div className="range-icons__list">
                <div 
                    onMouseOver={e => seHoverCard(1)}
                    onMouseOut={e => seHoverCard(0)}
                    onClick={e => (setCard(3),setCardActive(1))}
                    className={cardActive === 1 ? "range-icons__item active_card" : "range-icons__item" }
                >
                    <img 
                        src={hoverCard === 1 ||  cardActive === 1 ? 
                            require("../assets/img/range/range1_wh.svg").default
                            :
                            require("../assets/img/range/range1_gr.svg").default
                        } 
                        alt="range icon" 
                    />
                    <span>
                        Delivery within 1 business day
                    </span>
            </div>
            <div 
                onMouseOver={e => seHoverCard(2)}
                onMouseOut={e => seHoverCard(0)}
                onClick={e => (setCard(0),setCardActive(2))}
                className={cardActive === 2 ? "range-icons__item active_card" : "range-icons__item" }
            >
                    <img 
                        src={hoverCard === 2 ||  cardActive === 2 ? 
                            require("../assets/img/range/range2_wh.svg").default
                            :
                            require("../assets/img/range/range2_gr.svg").default
                        }
                        alt="range icon" 
                    />
                    <span>
                        Basic 1 year arranty
                    </span>
            </div>
            <div 
                onMouseOver={e => seHoverCard(3)}
                onMouseOut={e => seHoverCard(0)}
                onClick={e => (setCard(1),setCardActive(3))}
                className={cardActive === 3 ? "range-icons__item active_card" : "range-icons__item" }
            >
                    <img 
                       src={hoverCard === 3 ||  cardActive === 3 ? 
                        require("../assets/img/range/range3_wh.svg").default
                        :
                        require("../assets/img/range/range3_gr.svg").default
                        }
                        alt="range icon" 
                    />
                    <span>
                        After Sales Support
                    </span>
            </div>
            <div 
                 onMouseOver={e => seHoverCard(4)}
                 onMouseOut={e => seHoverCard(0)}
                 onClick={e => (setCard(2), setCardActive(4))}
                 className={cardActive === 4 ? "range-icons__item active_card" : "range-icons__item" }
            >
                    <img 
                        src={hoverCard === 4 || cardActive === 4 ? 
                            require("../assets/img/range/range4_wh.svg").default
                            :
                            require("../assets/img/range/range4_gr.svg").default
                        }
                        alt="range icon" 
                    />
                    <span>
                        Up to 40 miles per charge
                    </span>
            </div>
        </div>

        <RangeCard 
            img={rangeCardArr[card].img}
            title={rangeCardArr[card].title}
            p={rangeCardArr[card].p}
        />
    </div>
  )
}
