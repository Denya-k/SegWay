import React from 'react'
import "../sass/footer.scss"

export default function Footer() {
  return (
    <footer>
        <div className="wrapper">
            <div className="footer">
                <div className="footer-logo">
                    <img
                        className="footer-img"
                        src={require("../assets/img/logo_gr.svg").default}
                        alt="Logo Segeway" 
                    />
                </div>
                <div className="footer-text">
                    <div className="footer-contacts">
                        <span>+1(888) 777-77-77</span>
                        <span>2637 Fairfax Ave Culver City, CA 90232</span>
                        <span>Segway  California © 2017</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
