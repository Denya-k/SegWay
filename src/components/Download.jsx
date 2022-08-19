import React from 'react'
import download from "../assets/img/download/download.svg"
import downloadIcon1 from "../assets/img/download/downloadIcon1.svg"
import downloadIcon2 from "../assets/img/download/downloadIcon2.svg"
import downloadIcon3 from "../assets/img/download/downloadIcon3.svg"
import downloadIcon4 from "../assets/img/download/downloadIcon4.svg"
import "../sass/download.scss"

export default function Download() {
  return (
    <div className="section-download">
        <div className="wrapper download">
            <img 
                className="download-download__image"
                src={download}
                alt="Download"
            />
            <div className="download-download__content">
                <h1 className="download-download__title">DOWNLOAD MANUAL</h1>
                <div className="download-download__list">
                    <div className="download-download__item">
                        <img 
                            className="download-download__item-img"
                            src={downloadIcon1}
                            alt="Download"
                        />
                        <span className="download-download__item-text">
                            Assembly and preparation for the trip
                        </span>
                    </div>
                    <div className="download-download__item">
                        <img 
                            className="download-download__item-img"
                            src={downloadIcon2}
                            alt="Download"
                        />
                        <span className="download-download__item-text">
                            How to charge a scooter
                        </span>
                    </div>
                    <div className="download-download__item">
                        <img 
                            className="download-download__item-img"
                            src={downloadIcon3}
                            alt="Download"
                        />
                        <span  className="download-download__item-text">
                            How to ride properly
                        </span>
                    </div>
                    
                </div>
                <button
                        className="download-button"
                        type="submit"
                    >
                        DOWNLOAD MANUAL
                    </button>
            </div>
            
        </div>
    </div>
  )
}
