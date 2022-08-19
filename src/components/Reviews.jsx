import React from 'react'
import reviews from "../assets/img/reviews.svg"
import "../sass/reviews.scss"

export default function Reviews() {
  return (
    <div className="reviews">
        <h1 className="reviews-title">REVIEWS</h1>
        <div className="reviews__list">
            <img 
                src={reviews} 
                alt="Reviews" 
            />
            <img 
                src={reviews} 
                alt="Reviews" 
            />
            <img 
                src={reviews} 
                alt="Reviews" 
            />
        </div>
    </div>
  )
}
